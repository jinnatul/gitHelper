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
    - [cancel add]()
    - [Clearing the commit]()
      - [Clearing the commit (Advanced)]()
      - [revert]()
    - [Pull Request]()
    - [Merge]()
    - [Rebase]()
    - [Rebase --interactive]()
    - [blame]()
    - [clean]()
    - [gitignore]()
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


