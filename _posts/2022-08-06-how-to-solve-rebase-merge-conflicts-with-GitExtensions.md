---
title:  "How to solve rebase and merge conflicts with GitExtensions?"
excerpt: "Have you ever wondered how to merge your changes easily without destroying the entire project?"
tagline: "Have you ever wondered how to merge your changes easily without destroying the entire project?"
header:
    overlay_color: "#000"
    overlay_filter: "0.5"
    overlay_image: /assets/images/posts-images/gitExtensions_12.png
    teaser: /assets/images/posts-images/gitExtensions_12.png
toc: true
toc_label: "What's inside"
toc_icon: "cog"
toc_sticky: true
---


Have you ever wondered how to merge your changes easily without destroying the entire project? 
So here is a quick and easy guide to follow. Let’s start!
First, you should install and configure [GitExtensions](https://git-extensions-documentation.readthedocs.io/). After that open up your repository. In my case, it contains two branches: master and develop. Check the image below to see it.

![gitExtensions1!](/assets//images//posts-images/gitExtensions_1.webp "gitextensions window tree changes")

![gitExtensions2!](/assets//images//posts-images/gitExtensions_2.webp "gitextensions window tree changes with develop")

It contains on hello.html file with the same line edited so it does not know which line it should take when [conflict](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) happens.

## How to rebase?

Do [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) from develop branch to master, so our commit on develop will be “above” commits from master and it “should” contain all commits from the master branch too. How do I do it?
Checkout on develop branch. Click the right mouse button on it. Choose checkout branch and then develop.


![gitExtensions3!](/assets//images//posts-images/gitExtensions_3.webp "gitextensions window with checkout option")

When you are on develop branch choose which commit would like to rebase. In my case, it is a master branch commit with the message “Hope it will work”.

![gitExtensions4!](/assets//images//posts-images/gitExtensions_4.webp "gitextensions window rebase check")

After clicking, yes to rebase it, you should see an error pop up, do not worry it is nothing wrong with git. It is just information for you that you need to resolve some conflicts.

![gitExtensions5!](/assets//images//posts-images/gitExtensions_5.png "gitextensions window error")

Click, ok, and procceed. Next, you should see a similar window below:

![gitExtensions6!](/assets//images//posts-images/gitExtensions_6.webp "gitextensions window solve conflicts")

Choose solve conflicts and then the next window should pop up.

![gitExtensions7!](/assets//images//posts-images/gitExtensions_7.png "gitextensions window merge conflicts")

It is a resolve merge conflicts window. You can solve your merge conflicts in two ways. The fast and easy second way for which you use a diff tool like [kdiff3](https://github.com/KDE/kdiff3).

## Fast/easy way to resolve merge conflicts.

You can apply the changes for the hello.html file by dropping your changes and using the changes of the master. Click the right mouse button on the hello.html file and choose (theirs) just like on the image below.

![gitExtensions8!](/assets//images//posts-images/gitExtensions_8.png "gitextensions window choose local")

If you would like to overwrite the change you can always use choose (ours) option. Afterward
Click continue rebase on the main rebase window

![gitExtensions9!](/assets//images//posts-images/gitExtensions_9.webp "gitextensions window continue rebase")

In case of more files or conflicts, you would have to resolve them later. Keep in mind that working with bigger files or changes could take some time.


## Diff tool way

Here I modified a little history of the repository so we can work with something.

![gitExtensions10!](/assets//images//posts-images/gitExtensions_10.webp "gitextensions window tree changes before merge")


Let’s rebase again and develop to a master branch.

1. Checkout to develop

2. Choose the first master commit with the message “Some other changes”, and click the right mouse button on it

3. Rebase current branch on -> selected commit.

Then the magic begins. I omit the steps to merge conflicts window, which is the same as above. Chose to open it up in kdiff3 or another merging/diff tool.

![gitExtensions11!](/assets//images//posts-images/gitExtensions_11.png "gitextensions window open up diff tool")

You should see a window similar to below:

![gitExtensions12!](/assets//images//posts-images/gitExtensions_12.png "window kdiff tool")

Three directory-merge 

- (“A” is treated as the older base of both).

- B – is a (theirs) master branch version

- C – is a (ours)  in that case, develop branch version

Below is the Output window that will contain the merging result.

![gitExtensions13!](/assets//images//posts-images/gitExtensions_13.png "window kdiff tool difference")

You can choose whatever version of the file you would like and combine them in the output you can see I have chosen one line from C, one line from A, and one line from B.
Then I saved the file and continue to rebase after solving the conflicts. Simply as that, but sometimes it can be tricky so pay attention.
Result of rebasing:

![gitExtensions14!](/assets//images/posts-images/gitExtensions_14.png "gitextensions window diff window")

It will create .orig file extensions so you can always see the history of your changes.
It is better to not commit those files to your repository.

That’s it! I hope the article will help you with resolving the conflicts!
