# git-help

**Table of Contents:**
  - [What is Git?](#What is Git?)
  - Let’s Do it
    - [Download Git](#download-git)
    - [Initialization and initial commit](#initialization-and-initial-commit)
    - [Using diff and making additional commit](#using-diff-and-making-additional-commit)
    - [Include your signature in commit](#include-your-signature-in-commit)
    - [Let's push commit so far](#lets-push-commit-so-far)
    - [Changing the commit (including commits from the remote repository)](#changing-the-commit-including-commits-from-the-remote-repository)
    - [Cancel add](#cancel-add)
    - [Clearing the commit](#clearing-the-commit)
      - [Clearing the commit (Advanced)](#clearing-the-commit-advanced)
      - [revert](#revert)
    - [Pull Request](#pull-request)
    - [Merge](#merge)
    - [Rebase](#rebase)
    - [Rebase --interactive](#rebase--interactive)
    - [blame](#blame)
    - [clean](#clean)
    - [gitignore](#gitignore)
  - Types & Usage of Git Branch
    - [Master Branch]()
    - [Develop Branch]()
    - [Feature Branch]()
    - [Feature Branch creation & termination]()
    - [Release Branch]()
    - [Release Branch creation & termination]()
    - [Hotfix Branch]()
    - [Hotfix Branch creation & termination]()
    - [The whole flow of the branch]()
  - Feature Branch Workflow
    - [Concept of Local Storage & Remote Storage]()
    - [Create a local repository with git clone]()
    - [Check branch location]()
    - [Create a new branch]()
    - [Push the branch to the central remote repository]()
    - [Send a full request to the project manager]()
    - [Synchronization]()
    - [Create another branch for the new function]()
  - Forking Workflow
    - [Fork the central remote repository]()
    - [Create a local repository with the git clone command]()
    - [Connect two remote repositories]()
    - [Check branch location]()
    - [Create a new branch for functional development]()
    - [Push the commit history to your remote repository]()
    - [Send a full request to the project manager]()
    - [Synchronization]()
    - [Create another branch for the new function]()
  

## Download Git
  - Windows : [Download](https://git-scm.com/download/win) and Install program then run the git bash icon.
  - Mac :
    - Install Homebrew
    - $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
    - $ brew doctor
  
    - Install Git
    - $ brew install git
  - Linux :
    - $ sudo apt-get update
    - $ sudo apt-get upgrade
    - $ sudo apt-get install git


## Initialization and initial commit
  - Go to HOME path (~)
    - cd ~
  - Create git-training folder
    - mkdir git-training
  - Move the path (check the current path with the pwd command)
    - cd git-training
  - Initialize the folder git (see the .git folder created with the ls -A command)
    - git init
  - Add PDF file (add to commit list add) (use file in commit1 folder)
    - git add report_card.pdf
  - Making the first commit (creating a unit of history)
    - git commit -m "report card: Add question PDF"
  - Add source code (add to commit list add) (use files in commit2 folder)
    - git add report_card.c
  - commit (make history unit)
    - git commit -m "report card: Add base code"
    
    
## Using diff and making additional commit
  - Check the status
    - git status
  - Change or overwrite the contents of the report_card.c source file in the commit3 folder and check
    - git diff
  - If you confirm the change through diff, proceed to add command
    - git add report_card.c
  - Commit the prepared source file
    - git commit -m "report card: Print a message of introduction"
  - Check three commit so far
    - git log
  - Change or overwrite the contents of the report_card.c source file in the commit4 folder and check
    - git diff
  - If you confirm the change through diff, proceed to add command
    - git add report_card.c
  - Commit the prepared source file
    - git commit -m "report card: Print grades of each subject"
  - Check four commit so far
    - git log


## Include your signature in commit
  - Change or overwrite the contents of the report_card.c source file in the commit5 folder and check
    - git diff
  - If you confirm the change through diff, proceed to add command
    - git add report_card.c
  - Commit with signature (Include signatures with the -s option.)
    - git commit -sm "report card: Show the sum of each grade"
  - Change or overwrite the contents of the report_card.c source file in the commit6 folder and check
    - git diff
  - If you confirm the change through diff, proceed to add command
    - git add report_card.c
  - Commit with signature
    - git commit -sm "report card: Get a average of grades"


## Let's push commit so far
  - Check the status and check the current branch name master.
    - git status
  - Check the commit so far (if not six, check again)
    - git shortlog
  - Register Github remote repository URL(Pause and turn on http://github.com and create a new repository)
  - Register Github remote repository with the copied URL (except for '<' and '>')
    - git remote add origin <copy URL>
  - Now let's push the work to the Github remote repository (origin).
    - git push origin master
  - Open and view the Github remote repository


## Changing the commit (including commits from the remote repository)
  - Assume that you change the 'Mean' variable name in report_card.cto 'Average’ (use source in commit6-1 folder)
    - git diff
  - If you confirm the change through diff, proceed to add command
    - git add report_card.c
  - Edit the comment at the top of the commit(save and close it when you open a registered editor program such as the vi editor)
    - git commit --amend
  - Let's push it right away (crash error)
    - git push origin master
  - Force push to change local repositories to remote repositories (use the --force or -f option)
    - git push origin master --force
  - Let's go back to Githuband see if it changed properly.


## Cancel add
  - Create and add an empty file with touch (it is possible to execute commands consecutively with ';')
    - touch test; git add test
  - Check your current status
    - git status
  - Let's cancel the add command with reset command.
    - git reset
  - Check your current status again
    - git status
    
  
## Clearing the commit
  - Make sure the test file still exists (re-create it if you deleted it)
    - git status
  - Make some wrong commit. (Can execute commands consecutively)
    - git add test; git commit -sm“test”
  - Then push and apply the wrong commit to the tree in Github.
    - git push origin master
  - And clears the most recent commit.
    - git reset HEAD~1
  - Force push to the remote repository tree to clear the wrong commit.
    - git push origin master --force
  - Commit is canceled and the files are staged and saved in working directory
    - git reset --soft HEAD^
  - Commit is canceled and the files are unstagedand saved in the working directory.
    - git reset --mixed HEAD^ // Default option
    - git reset HEAD^ // Same as above
    - git reset HEAD~2 // Cancel last two commit
  - Commit is canceled and the files are unstagedand deleted from the working directory
    - git reset --hard HEAD^


## Clearing the commit (Advanced)
  - Return to commit in the working directory-Cancels the most recent commit and returns the working directory
    - git reset HEAD^  //Cancel the most recent commit (default option: --mixed)-Check your commit history
    - git reflog  //Reflog(the branch and commit that HEAD has pointed to in the last few months) or     
    - git log –g  //Return the working directory to the desired point in time
    - git reset HEAD@numberor 
    - git reset commit_id
  - Commit again with reverted
    - git commit -m "Write commit messages"
  - Force push to remote storage
    - git push origin branch_name–f or 
    - git push origin + branch_name
    - git push origin +master


## Revert
- Revert single commit
  - git revert commit_idex) 
  - git revert 2664ce8
- If you need to commit multiple commits at onc
  - git revert start_commit_id...end_commit_id


## Pull Request
  - Go to https://github.com/jinnatul/git-helper
  - Click Fork Button
  - Downloading Forked Project 
    - git clone project_url_forked_in_your_account
  - Move Clone Project Directory (If directory name is git-training-1, move to there)
  - cd clone_project_directory_name
  - Create branch (develop) for pull-request
    - git checkout -b develop
  - Move pull_request_testdirectory
  - cd pull_request_test
  - Create a directory with your name
  - mkdir your_name
  - Copy any files in Directory
  - cp any_file Or
  - touch any_name.txt
  - Go to Parent Directory
  - cd ..
  - Add the working directory
    - git add your_name
  - Prepared files commit
    - git commit –m "your_namepull request test"
  - Push to the develop branch of the forked repository (note: not master)
    - git push origin develop


## Merge
  - Make sure that your just-in-progress develop branch is the current branch (also visible as status)
    - git branch
  - Let's create an additional branch
    - git checkout -b test
  - Create an empty file with touch and make a commit
    - touch test
    - git add test
    - git commit -m "test"
  - Merge additional branches (test) based on the current branch (develop).
    - git checkout develop
    - git status
    - git merge test

## Rebase
  - On Stage 8, go to the project path that was cloned after the fork and add upstream(This is not your project URL)
    - git remote add upstream https://github.com/jinnatul/git-helper.git
  - get upstream'sdevelop branch.
    - git fetch upstream develop
  - Make sure your current branch is develop
    - git status
  - Rebase
    - git rebase upstream/develop


## Rebase--interactive
  - Select the commit to modify
    - git rebase -i--root
  - When the vi editor opens, delete the word "pick" at the beginning of the commit lines you want to edit,write "edit" instead, and exit the editor.
  - Check status and check if rebase is normal
    - git status
  - Modify the commit information and finish with --continue
    - git commit --amend
    - git rebase --continue


## Blame
  - Identify which file, who modified which line.
    - git blame report_card.c
  - Check commit information at the time using commit ID
    - git show <commit ID>
  

## Clean
  - git clean -f // Only delete files except directories
  - git clean -f -d // Delete directory inclusion
  - git clean -f -d -x // Delete even ignored files

  
## Gitignore
  - Move to the top level directory where the .git file is located(The .gitignorefile can be created in the same directory as the .git file.)
    - Make .gitignore
    - touch .gitignore // Since .gitignoreis a hidden file, I confirm that it is generated properly in the following two ways.
  - Edit .gitignore
  - vi .gitignore
  - Delete all caches in the current repository.
    - git rm -r --cached 
  - Delete the file corresponding to file_namefrom the remote repository.(Do not delete files in the local repository)
    - git rm -r --cached file_name
  - Set to track all other files again, except for the list of files put in .gitignore.
    - git add .
    - git commit -m "Fixed untracked files"

