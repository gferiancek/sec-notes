# Terminal & Shell

The command line is made up of two parts, the **terminal** and the **shell**.

The **terminal** is an input/output program that allows you to type commands and display the results of those commands. It is **not** responsible for executing the commands themselves.

The **shell** is the software that process your commands. Throughout the course, we'll use bash, but you can slot any shell into your terminal, such as zsh.

## Terminal Structure

Since we're using Linux (or WSL for us Windows users), our root directory is simply "/". (This is contrary to Windows where the root directory is "C:")

Our home directory is under "/users/user", or for those using WSL it's under "/home/user"

## Paths

While navigating in the Terminal, we'll be moving along paths to get to our desired files/directorys. ("/home/user" is an example of a path.)

There are two types of paths:

- Absolute Paths
  - These represent the full path of the files, such as "/home/user/folder/file"
  - These are typically longer, but have the conveniece of being able to be used from anywhere since you provide the full path.
- Relative Paths
  - These paths are relative to your current directory, and are limited in scope. (If you are inside of "/home/user/folder 1" you don't have access to any other folder inside of "/home/user".)

## Common Commands

```
// print working directory
pwd
```

```
// list folers & files
ls
```

```
// change directory
cd <path>
```

```
// manual (gives info about cmd)
man <cmd>
```

```
// Make Directory
mkdir <dir-name>
```

<sub>You can make multiple directories by using a space as a delimiter. (This is a trend used by many commands.)</sub>

```
// Remove Directory (Only works on empty directories)
rmdir <dir-name>
```

<sub>Note: If you want to remove a directory that has files inside, you need to use rm -rf.</sub>

```
// Create File
touch <file-name>
```

```
// Delete File
rm <file-name>
```

```
// Concat and print file contents
cat <file-name>
```

```
// Prints out info
echo <info>
```

There is also a redirect cmd, ">", which can be chained with cmds.

```
echo <output> > <input>

// Takes output from echo and writes to file
echo "I like cats" > <file-name>
```

```
// Move files/directories
mv <original-path> <new-path>

// Rename files/directories
mv <old-name> <new-name>

// Move + Rename
mv old.css ../new.css
```

```
// Copy files/directories
cp <original-path> <new-path>
```

## Flags

Flags are a "-" followed by a single upper/lowercase letter that modify or enhance a command.

Common examples:

```
// Show all files, including hidden files
ls -a

// Give detailed file info
ls -l

// Recursive + Force (Used to delete non-empty directories)
rm -rf

// Recursive (Used to copy an entire directory)
cp -r
```

# Git

Git is a **VCS** (Version Control System) that allows you to "version" or save "snapshots" of your code at various points along it's lifecycle.

This enables you to create a working history to see when files are added/modified, who made the changes, how the files were changes, etc.

There are 3 areas of Git:

1. Working Directory
   - All of the files currently being worked on, but not yet saved to Git. Git is aware of the files, but is not tracking them.
2. Staging Area
   - Files that Git is tracking, but have not yet been committed. Theses files will be committed during the next commit.
3. Local Repository
   - Holds all of the snapshots that have been commited. You can checkout different snapshots, merge them, create new branches, etc.

## Branching & Merging

Git creates a default branch, known as main. However, you usually want pending changes on a separate branch, especially if multiple people are working on the project.

This keeps your code separate and when everything is finished/tested/approved you can merge your branches, preserving all of the git history of both branches.

**Always make sure your working tree is clear before doing ANYTHING. (creating branch, merging, checkout, etc)**

Merges are always one of two types:

- Fast Forward Merge
  - All new commits are on the new branch, so Git can simply stack them on top of the old branch.
- Recursive/ORT Merge
  - If the initial branch has commits AFTER a branch is made from it, Git can't simply stack the commits and needs to recursively decide the correct commit order.

### Merge Conflicts

If two developers make changes to the same file, git won't know which changes are the "correct" ones and won't be able to merge the branches. Git will then prompt you to manually fix the conflicts before proceeding with the merge.

## Common Git Commands

```
// Creates a new repo in current directory
git init
```

<sub> Note: Nesting git repos will confuse Git, so always run git status beforehand to avoid nesting! </sub>

```
// Delete git repo in current directory
rm -rf .git
```

```
// Check status of current repo
git status
```

```
// Move changes into Staging Area
git add <file-name>

// Move all changes into Staging Area
git add .
```

```
// Commit files to repo
git commit -m "message"
```

```
// Show log of all commits
git log --oneline
```

<sub>--oneline is optional, but it makes the log more compact.</sub>

```
// List all branches
git branch

// Create new branch
git branch <name>

// Delete branch
git branch -d <name>
```

<sub>Note: -d only works on **merged** branches. If you want to delete an unmerged branch, use -D</sub>

```
// Switches to a new branch
git checkout <branch>

// Create + Checkout a new branck
git checkout -b <branch>
```

```
// Merge branch into currently checked out branch
git merge <branch>
```

### Github Commands

The following commands are used when using a remote repository, such as Github.

```
// Add a remote repo
git remote add <alias> <url>

// View all remote repos
git remove -v
```

```
// Push to remote repo
git push -u <alias> <branch>
```

<sub>Note: -u is optional. It will set the current alias + branch as the default so repeated calls can be done with git push.

```
// Pull changes into local repo
git pull <alias> <branch>
```

```
// Clone repo
git clone <url>
```
