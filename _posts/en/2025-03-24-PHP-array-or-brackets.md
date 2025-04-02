---
layout: post 
title: "Array Functions: Initializing an Array Using [...] or array()? - PHP Review #2" 
date: 2025-03-24 
tags: php 
description: "Is declaring an array using the array() function becoming obsolete? What does baking a cake have in common with code compilation?" 
thumbnail: assets/img/posts/cake-1326881.jpg 
giscus_comments: true
---
This is another installment in the PHP review series. This time, I decided to take a closer look at the array declaration function and what really lies behind it. From what I remember, using `array()` was considered outdated by my colleagues at work and should no longer be used. To verify this, I decided to pull the repository of a PHP code refactoring and updating framework—Rector. After all, what tool is better at handling arrays than one designed for refactoring and adhering to best coding practices?

## A Deep Dive into the Shallow End

To my surprise, I didn’t find many examples. In fact, the only example where `array()` was actually used—or rather its documentation, recommending against its use—was in Rector’s framework under the golden rule for [LongArrayToShortArray](https://github.com/rectorphp/rector/blob/59ca5ad3cdd75183ef65f6929693903f2f2a1717/rules/Php54/Rector/Array_/LongArrayToShortArrayRector.php#L30):

```php
public function getRuleDefinition() : RuleDefinition
{
    return new RuleDefinition('Long array to short array', [new CodeSample(<<<'CODE_SAMPLE'
class SomeClass
{
    public function run()
    {
        return array();
    }
}
CODE_SAMPLE
, <<<'CODE_SAMPLE'
class SomeClass
{
    public function run()
    {
        return [];
    }
}
CODE_SAMPLE
)]);
}
```

This is thought-provoking, considering that the method in `LongArrayToShortArrayRector.php` is located in the `Php54` package. In **PHP 5.4**, the short array syntax was introduced. Since then, it has been recommended to use the shorter array notation.

However, this still doesn’t fully answer the question: What is the fundamental difference between calling `array()` and `[]`? So what really happens behind the scenes? When executing a PHP script, you first need to bake a cake... To bake a cake, you need to:
<figure>
<iframe src="https://www.youtube.com/embed/oVSGrY4DfUg" class="rounded z-depth-1" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" width="100%" height="500px"></iframe>
</figure>


## Creating an Abstract Syntax Tree – The Cake

The key is understanding AST (Abstract Syntax Tree). This is a tree structure necessary to separate the compilation process from the parser. The [Lexer](https://en.wikipedia.org/wiki/Lexical_analysis) returns tokens, which are then processed by the parser to generate the AST structure. This structure is then compiled into opcode, stored in opcache, and later interpreted by the computer as executable instructions. To learn more about this topic, I recommend watching the following video:

> [Climbing the Abstract Syntax Tree - James Titcumb - Forum PHP 2017](https://www.youtube.com/watch?v=MWITYIWyowk)

## So, Where Exactly is the Difference Between `[]` and `array()`?

The first difference I noticed was in the [compiler](https://github.com/php/php-src/blob/master/Zend/zend_compile.h#L1044):

```
#define ZEND_ARRAY_SYNTAX_LIST 1  /* list() */
#define ZEND_ARRAY_SYNTAX_LONG 2  /* array() */
#define ZEND_ARRAY_SYNTAX_SHORT 3 /* [] */
```

And in the case of assignment validation:

```c
static void zend_verify_list_assign_target(zend_ast *var_ast, zend_ast_attr array_style) {
    if (var_ast->kind == ZEND_AST_ARRAY) {
        if (var_ast->attr == ZEND_ARRAY_SYNTAX_LONG) {
            zend_error_noreturn(E_COMPILE_ERROR, "Cannot assign to array(), use [] instead");
        }
        if (array_style != var_ast->attr) {
            zend_error_noreturn(E_COMPILE_ERROR, "Cannot mix [] and list()");
        }
    } else if (!zend_can_write_to_variable(var_ast)) {
        zend_error_noreturn(E_COMPILE_ERROR, "Assignments can only happen to writable values");
    }
}
```

In PHP code, this has the following consequences:

```php
array(1, 2, 3) = [4, 5, 6];  // Error: cannot assign to array()
[1, 2, 3] = [4, 5, 6];  // Correct
```

Honestly, I didn’t expect to find such quirks in the compiler, but this is a significant difference.

Another difference is visible in the [Lexer](https://en.wikipedia.org/wiki/Lexical_analysis), specifically in the [language\_scanner.l](https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1764C1-L1766C2) file:

```lexer
<ST_IN_SCRIPTING>"array" {
    RETURN_TOKEN_WITH_IDENT(T_ARRAY);
}

<ST_IN_SCRIPTING>"["|"(" {
    enter_nesting(yytext[0]);
    RETURN_TOKEN(yytext[0]);
}

<ST_IN_SCRIPTING>"]"|")" {
    /* Check that ] and ) match up properly with a preceding [ or ( */
    RETURN_EXIT_NESTING_TOKEN(yytext[0]);
}
```

## What Conclusions Can We Draw?

- For `[]`, the lexer must return two tokens, and the parser then merges them into the appropriate structure. This requires more work during tokenization and parsing compared to `array()`, where the lexer directly returns a `T_ARRAY` token, and the parser simply processes it as a single expression.
- In a PHP version without opcache, code must be processed every time it is executed, meaning that both `array()` and `[]` must go through the lexer and parser to generate AST and opcodes.
- Longer parsing time for `[]`: Since `[]` requires additional analysis by the parser (to recognize brackets), processing takes longer.
- Shorter parsing time for `array()`: The `T_ARRAY` token is easier to recognize, and the parser does not have to perform additional syntax analysis.

Who would have thought that to determine the real difference between `[]` and `array()`, I would have to delve so deeply into PHP? It seems that `array()` might still have some use cases:

- When code is compiled without access to temporary memory (opcache), which is rare.
- When using the `eval()` function, where opcache is not utilized.

## Important Links

- [The PHP Interpreter](https://github.com/php/php-src/tree/master)
- [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
- [OpCache Preloading](https://www.php.net/manual/en/opcache.preloading.php)


