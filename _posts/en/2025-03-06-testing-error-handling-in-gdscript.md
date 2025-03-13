---
layout: post
title: Testing Error Handling in Godot Using GUT
date: 2025-03-06
tags: game-dev godot tests
categories: tutorials
description: Testing error handling vis stub method in GUT tool.
thumbnail: assets/img/posts/gut_logo_256x256.png
giscus_comments: true
---

Testing is certainly not an easy task, especially when it comes to writing tests in game engines. However, we can take advantage of existing solutions. One such solution is [GUT](https://github.com/bitwes/Gut), which stands for Godot Unit Tests.

## Problem Definition

Recently, I encountered the following issue in my project. I wanted to test error handling in my game when loading a saved game state.

```py
## Reads the data from file and returns as a dictionary
func load_data()->Dictionary:
    var data = {}
    var path = get_saved_game_path()
    var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
...
```

I first looked into the documentation for `FileAccess.get_open_error`. This method returns an `enum` type `Error`. Checking the returned code was a good lead, but first, I needed to write a test:

```py
func test_load_if_game_save_doesnt_exist()->void:
    var save = GameSave.new("TestingGameSave.save", "12345")
    var data: Dictionary = save.load_data()
    assert_not_null(data)
```

This is a good starting point. I first check if there's something to work with and whether the data is not null.  
I had a few ideas on how it should look. Mainly:

1. **Don't return errors**  
   I didn't want to throw exceptions and handle them outside the function. Instead, I aimed to handle errors where they occur.  
   In GDScript, you cannot use `try-catch` or throw exceptions, which is also not a good practice. I don’t like shifting responsibility onto others. I prefer solving problems where they actually occur, as that is the most likely place to resolve them effectively.

2. **Avoid returning null values**  
   This is a common issue that I call "null propagation." The problem is that every time we return null, a small part of our humanity dies. And with every subsequent function call, we must first check whether the object is null before calling a method on it—otherwise, we risk a `NullPointerException`, which may crash the game mid-session.  
   So, we must eliminate null values! This issue is discussed in more detail [here](https://hackernoon.com/null-the-billion-dollar-mistake-8t5z32d6).

3. **Don't lump everything together**  
   Returning errors or objects could trigger an avalanche of error handling (see point 1). The simpler, the better—this makes it easier to work with in the future.

## Solution

I implemented the following code:

```py
## Reads the data from file and returns as a dictionary
func load_data()->Dictionary:
    var data = {}
    var path = get_saved_game_path()
    var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
    var error: Error = FileAccess.get_open_error()
    if not error == OK:
        push_error('There was an error while trying to open a file with the following error code: ' + var_to_str(error))
        return data
```

This looks pretty good, but I was still not satisfied.  
I wanted to test a scenario where an error occurs while ensuring that nothing gets printed to the console during the test execution—only when the problem actually arises. Additionally, I needed to handle the error code returned by Godot.  
All these factors combined posed a challenge, especially for a relatively young scripting language like GDScript.  
Here’s what I did:

- I used the [stub method from GUT](https://gut.readthedocs.io/en/latest/Stubbing.html#to-call-callable).
- Unfortunately, it's not possible to override the built-in `push_error` function. So, I wrote my own `print_error` method and called the original function inside it. Then, I replaced it with an anonymous function that set a flag to check whether the method was called correctly.
- Ideally, GUT's [stub](https://gut.readthedocs.io/en/latest/Stubbing.html#to-call-callable) would allow checking whether a method was actually invoked. For now, I had to rely on a global variable.
- Additionally, I had to use a [partial double](https://gut.readthedocs.io/en/latest/Partial-Doubles.html) because stubbing methods on `double` class objects requires it.
- I searched through the GUT documentation and found a way to verify this using the following function, provided that the checking class is a subclass of `stub`:
  ```py
  assert_called(save, "print_error")
  ```

Here’s the complete code:

```py
#game_save.gd
#wrapper for testing errors
func print_error(msg: String)->void:
    push_error(msg)

## Reads the data from file and returns as a dictionary
func load_data()->Dictionary:
    var data = {}
    var path = get_saved_game_path()
    var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
    var error: Error = FileAccess.get_open_error()
    if not error == OK:
        print_error('There was an error while trying to open a file with the following error code: ' + var_to_str(error))
        return data

#test_game_save.gd
extends GutTest

var _error_called = false

func test_load_if_game_save_doesnt_exist()->void:
    #arrange
    var save = partial_double(GameSave).new("TestingGameSave.save", "12345")

    stub(save,"print_error").to_call(func(_msg: String)->void:
        _error_called = true
    )

    #act
    var data: Dictionary = save.load_data()

    #assert
    assert_true(_error_called) # custom solution for checks
    assert_called(save, "print_error")   # this one comes from gut
    assert_not_null(data)
```

## Solution Details

One important thing to note is that the anonymous function must update `_error_called` inside the test class instance.

There is a specific issue in GDScript:  
If I wanted to modify a variable like this:

```py
func test_load_if_game_save_doesnt_exist()->void:
    #arrange
    var save = partial_double(GameSave).new("TestingGameSave.save", "12345")
    var error_called = true

    stub(save,"print_error").to_call(func(_msg: String)->void:
        error_called = true
    )

    #act
    var data: Dictionary = save.load_data()

    #assert
    assert_true(error_called)
    assert_not_null(data)
```

The test would fail because anonymous functions in GDScript capture variables **by value**, not by reference.  
To make it work, you need to reference the class instance’s variable instead.

Thanks to these simple tricks, I was able to test error handling in a deterministic and repeatable way.

However, this approach has some drawbacks:

- It requires creating a partial double that partially mimics the logic of the `GameSave` class.
- Each test class must override error handling with an additional `print_error` method.
- Every test needs to stub this method with an additional stub call.

This is a small price to pay for transparent and convenient error handling validation in GDScript.  
There's definitely room for improvement, but I'll leave that for the next article.

### Possible Improvements

In short, this approach can be improved in the following ways:

- Add verification of the returned error code and handle it properly.
- Validate the returned error code in tests.
- Implement a custom logging layer or service for error handling.
