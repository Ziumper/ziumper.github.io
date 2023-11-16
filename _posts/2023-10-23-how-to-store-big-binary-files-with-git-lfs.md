---
title:  "How to store big binary files with git lfs on Google Drive or One Drive?"
toc: true
toc_label: "What's inside"
toc_icon: "cog"
toc_sticky: true
tags:
    - Git
    - GitExtensions
    - Git-lfs
    - Unity
    - Unreal Engine
   
categories:
    - Tutorials
---

# Transfer adapter

I suggest connecting git lfs with custom transfer adapter.  According to git-lfs documentation:


> Git LFS supports multiple ways to transfer (upload and download) files.
> In the core client, the basic way to do this is via a one-off HTTP request via the URL returned from the LFS API for a given object. 
> The core client also supports extensions to allow resuming of downloads (via Range headers) and uploads (via the tus.io protocol).


# lfs-folderstore 

A lfs-folderstore is a git-lfs custom transfer adapter that utilizes a remote LFS media store in the form of a shared NAS folder. 
Let's say you use Git, but you don't use any fancy hosting solution. You just use a plain Git repo on a server somewhere, perhaps using SSH so you don't even need a web server. It's simple and great.

But how do you use Git LFS? It usually wants a server to expose API endpoints. Sure you could use one of the big hosting providers, but that makes everything more complicated.

Maybe you already have plenty of storage sitting on a NAS somewhere, or via Dropbox, Google Drive etc, which you can share with your colleagues. Why not just use that?

So that's what this adapter does. When enabled, all LFS uploads and downloads are simply translated into file copies to/from a folder that's visible to your system already. Put your media on a shared folder, or on a synced folder like Dropbox, or Synology Cloud Drive etc.

## How to use it?

I copied over the documentation available from github repo of the creator so you don't have switch from place to place ;-) 

### Prerequisites

You need to be running Git LFS version 2.3.0 or later. This has been tested
with 2.5.2 and 2.6.0 (and with Git 2.19.1).

### Download &amp; install

You will need `lfs-folderstore[.exe]` to be on your system path somewhere.

Either download and extract the [latest
release](https://github.com/sinbad/lfs-folderstore/releases), or build it from
source using the standard `go build`.

### Configure a fresh repo

Starting a new repository is the easiest case.

* Initialise your repository as usual with `git init` and `git lfs track *.png` etc
* Create some commits with LFS binaries
* Add your plain git remote using `git remote add origin <url>`
* Run these commands to configure your LFS folder:
  * `git config --add lfs.customtransfer.lfs-folder.path lfs-folderstore`
  * `git config --add lfs.customtransfer.lfs-folder.args "C:/path/to/your/folder"`
  * `git config --add lfs.standalonetransferagent lfs-folder`
* `git push origin master` will now copy any media to that folder

A few things to note:

* As shown, if on Windows, use forward slashes for path separators
* If you have spaces in your path, add **additional single quotes** around the path
    * e.g. `git config --add lfs.customtransfer.lfs-folder.args "'C:/path with spaces/folder'"`
* The `standalonetransferagent` forced Git LFS to use the folder agent for all
  pushes and pulls. If you want to use another remote which uses the standard
  LFS API, you should see the next section.

### Configure an existing repo

If you already have a Git LFS repository pushing to a standard LFS server, and
you want to either move to a folder, or replicate, it's a little more complicated.

* Create a new remote using `git remote add folderremote <url>`. Do this even if you want to keep the git repo at the same URL as currently.
* Run these commands to configure the folder store:
  * `git config --add lfs.customtransfer.lfs-folder.path lfs-folderstore`
  * `git config --add lfs.customtransfer.lfs-folder.args "C:/path/to/your/folder"`
  * `git config --add lfs.<url>.standalonetransferagent lfs-folder` - important: use the new Git repo URL
* `git push folderremote master ...` - important: list all branches you wish to keep LFS content for. Only LFS content which is reachable from the branches you list (at any version) will be copied to the remote

### Cloning a repo

There is one downside to this 'simple' approach to LFS storage - on cloning a
repository, git-lfs can't know how to fetch the LFS content, until you configure
things again using `git config`. That's the nature of the fact that you're using
a simple Git remote with no LFS API to expose this information.

It's not that hard to resolve though, you just need a couple of extra steps
when you clone fresh. Here's the sequence:

* `git clone <url> <folder>`
    * this will work for the git data, but will report "Error downloading object" when trying to get LFS data
* `cd <folder>` - to enter your newly cloned repo
* Configure as with a new repo:
  * `git config --add lfs.customtransfer.lfs-folder.path lfs-folderstore`
  * `git config --add lfs.customtransfer.lfs-folder.args "C:/path/to/your/folder"`
  * `git config --add lfs.standalonetransferagent lfs-folder`
* `git reset --hard master`
  * This will sort out the LFS files in your checkout and copy the content from the now-configured shared folder

## Git config integration

I used my favorite open-source [GitExtension](https://git-extensions-documentation.readthedocs.io/) software as reference for integration, but you can use terminal by using git config approach
or any kind of text editor

To open up the configuration of your github repository choose following option:
![gitExtensions1!](/assets/images/posts-images/integration_gitextension.png "open configuration")

Open it up and append following lines, similar as inside [Cloning a repo](#cloning-a-repo)

```
[lfs "customtransfer.lfs-folder"]
    path = C:\\MyPathToLfsFolderStoreExe\\lfs-folderstore.exe
    args = 'I:\\My drive\\my-lfs-folder'
[lfs]
    standalonetransferagent = lfs-folder
    repositoryformatversion = 0
```

Afterwards you should be good to go, afterwards remember to sort out the LFS files in your checkout and copy the content from the now-configured shared folder, by using following command 
```bash
git reset --hard master
```

Sometimes there could be some problems with your network or issues with git lfs 
In case of smudge errors or problems you can use following hacks:
- try using better internet connection low network bandwidth is not helping
- restart computer
- use git lfs fetch --all - Fetch git lfs files for ALL remote branches
- move your google drive or one drive directory cache to new folder and try to download the data again

# Usage examples

I used following approach to storage media files in my software development project and game dev project. 
I bet you can do it too. Good luck!