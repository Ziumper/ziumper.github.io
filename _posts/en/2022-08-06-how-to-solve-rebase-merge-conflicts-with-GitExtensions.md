---
layout: post
title: How to solve rebase and merge conflicts with GitExtensions?
date: 2022-08-06 16:40:16
tags: git
categories: tutorials
description: Resolving issues with merge conflicts.
giscus_comments: true
---

Have you ever wondered how to merge your changes easily without destroying the entire project?
So here is a quick and easy guide to follow. Let’s start!
First, you should install and configure [GitExtensions](https://git-extensions-documentation.readthedocs.io/). After that, open up your repository. In my case, it contains two branches: master and develop. Check the image below to see it.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/gitExtensions_1.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/gitExtensions_2.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
</div>

It contains one hello.html file with the same line edited on both branches, so git does not know which line it should take when a [conflict](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) happens.

## How to rebase?

Let’s [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) the develop branch onto master, so our commit on develop will be “above” the commits from master and it “should” contain all commits from the master branch too. How do I do it?
Check out the develop branch. Click the right mouse button on it. Choose checkout branch and then develop.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_3.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

When you are on the develop branch, choose the commit you would like to rebase onto. In my case, it is a master branch commit with the message “Hope it will work”.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_4.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

After clicking yes to rebase, you should see an error pop up. Do not worry, there is nothing wrong with git. It is just information for you that you need to resolve some conflicts.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_5.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Click OK and proceed. Next, you should see a window similar to the one below:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_6.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Choose solve conflicts and then the next window should pop up.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_7.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

It is a resolve merge conflicts window. You can solve your merge conflicts in two ways. The fast and easy way, or the second way, in which you use a diff tool like [kdiff3](https://github.com/KDE/kdiff3).

## Fast/easy way to resolve merge conflicts

You can apply the changes for the hello.html file by dropping your changes and using the changes of the master. Click the right mouse button on the hello.html file and choose (theirs) just like on the image below.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_8.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

If you would like to overwrite the change, you can always choose the (ours) option. Afterward,
click continue rebase in the main rebase window.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_9.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

In case of more files or conflicts, you would have to resolve them later. Keep in mind that working with bigger files or changes could take some time.

## Diff tool way

Here I modified the history of the repository a little, so we have something to work with.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_10.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Let’s rebase develop onto the master branch again.

1. Checkout to develop

2. Choose the first master commit with the message “Some other changes”, and click the right mouse button on it

3. Rebase current branch on -> selected commit.

Then the magic begins. I will skip the steps leading to the merge conflicts window, which are the same as above. Choose to open it up in kdiff3 or another merging/diff tool.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_11.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

You should see a window similar to the one below:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_12.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Three-way merge:

- A – the base version (“A” is treated as the older base of both).

- B – the (theirs) version from the master branch

- C – the (ours) version, in this case from the develop branch

Below is the Output window that will contain the merging result.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_13.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

You can choose whichever version of each line you would like and combine them in the output. As you can see, I have chosen one line from C, one line from A, and one line from B.
Then I saved the file and continued the rebase after solving the conflicts. Simple as that, but sometimes it can be tricky so pay attention.
Result of rebasing:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_14.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

It will create files with the .orig extension, so you can always see the history of your changes.
It is better to not commit those files to your repository.

That’s it! I hope the article will help you with resolving the conflicts!
