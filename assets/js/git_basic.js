$(function() {

  let gitInfo = "<ul class='collapsible expandable'>"

  // What is Git?
  + "<li><div class='collapsible-header'>"
  + "<h6>$ What is Git?</h6></div>"
  + "<div class='collapsible-body codejs center'><p class='fontSize'><span class='codejs-keyword'>"
  + "Git</span> is a free and distributed version-control system for tracking changes in source "
  + "code during software development. It is designed for coordinating work among programmers, but it "
  + "can be used to track changes in any set of files. Its goals include speed, "
  + "data integrity, and support for distributed, non-linear workflows.</p></div></li>"

  // What is the purpose of Git?
  + "<li><div class='collapsible-header'>"
  + "<h6>$ What is the purpose of Git?</h6></div>"
  + "<div class='collapsible-body codejs center'><p class='fontSize'><span class='codejs-keyword'>Git</span>"
  + " (/ɡɪt/) is a version control system for tracking changes in computer files and coordinating work "
  + "on those files among multiple people. It is primarily used for source code management in software "
  + "development, but it can be used to keep track of changes in any set of files.</p></div></li>"

  // What is git vs GitHub?
  + "<li><div class='collapsible-header'>"
  + "<h6>$ What is git vs GitHub?</h6></div>"
  + "<div class='collapsible-body codejs center'><p class='fontSize'></p>The key difference between "
  + "<span class='codejs-keyword'>Git</span> and <span class='codejs-keyword'>GitHub</span> is that "
  + "<span class='codejs-keyword'>Git</span> is an open-source tool developers install locally to manage "
  + "source code, while <span class='codejs-keyword'>GitHub</span> is an online service to which "
  + "developers who use <span class='codejs-keyword'>Git</span> can connect and upload or download "
  + "resources.</div></li>"

  // Download Git
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Download Git</h6></div>"
  + "<div class='collapsible-body codejs'>"+ downloadGit() +"</div></li>"

  // Initialization and initial commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Initialization and initial commit</h6></div>"
  + "<div class='collapsible-body codejs'>"+ initializationAndInitialCommit() +"</div></li>"

  // Using diff and making additional commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Using diff and making additional commit</h6></div>"
  + "<div class='collapsible-body codejs'>"+ usingDiffAndMakingAdditionalCommit() +"</div></li>"

  // Include your signature in commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Include your signature in commit</h6></div>"
  + "<div class='collapsible-body codejs'>"+ includeYourSignatureInCommit() +"</div></li>"

  // Let's push commit so far
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Let's push commit so far</h6></div>"
  + "<div class='collapsible-body codejs'>"+ letsPushCommitSoFar() +"</div></li>"

  // Changing the commit (including commits from the remote repository)
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Changing the commit (including commits from the remote repository)</h6></div>"
  + "<div class='collapsible-body codejs'>"+ changingTheCommit() +"</div></li>"

  // Cancel add
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Cancel add</h6></div>"
  + "<div class='collapsible-body codejs'>"+ cancelAdd() +"</div></li>"

  // Clearing the commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Clearing the commit</h6></div>"
  + "<div class='collapsible-body codejs'>"+ clearingTheCommit() +"</div></li>"

  // Clearing the commit (Advanced)
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Clearing the commit (Advanced)</h6></div>"
  + "<div class='collapsible-body codejs'>"+ clearingTheCommit_Advanced() +"</div></li>"

  // revert
  + "<li><div class='collapsible-header'>"
  + "<h6>$ revert</h6></div>"
  + "<div class='collapsible-body codejs'>"+ revert() +"</div></li>"

  // Pull Request
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Pull Request</h6></div>"
  + "<div class='collapsible-body codejs'>"+ pullRequest() +"</div></li>"

  // Merge
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Merge</h6></div>"
  + "<div class='collapsible-body codejs'>"+ merge() +"</div></li>"

  // Rebase
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Rebase</h6></div>"
  + "<div class='collapsible-body codejs'>"+ rebase() +"</div></li>"

  // Rebase --interactive
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Rebase --interactive</h6></div>"
  + "<div class='collapsible-body codejs'>"+ rebaseInteractive() +"</div></li>"

  // blame
  + "<li><div class='collapsible-header'>"
  + "<h6>$ blame</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // clean
  + "<li><div class='collapsible-header'>"
  + "<h6>$ clean</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // gitignore
  + "<li><div class='collapsible-header'>"
  + "<h6>$ gitignore</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  $('#git_basic').html(gitInfo);

})

function downloadGit() {
  let code = "<code>"
  + "- <span class='codejs-header'>Windows :</span><br>"
  + "<a href='https://git-scm.com/download/win' target='_blank'>[Download]</a> and Install program then "
  + "run the git bash icon.<br><br>"
  + "- <span class='codejs-header'>Mac :</span><br>"
  + "$ <span class='codejs-cmd'>ruby -e '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)'</span><br>"
  + "$ <span class='codejs-cmd'>brew doctor</span><br>"
  + "$ <span class='codejs-cmd'>brew install git</span><br><br>"
  + "- <span class='codejs-header'>Linux :</span><br>"
  + "$ <span class='codejs-cmd'>sudo apt-get update</span><br>"
  + "$ <span class='codejs-cmd'>sudo apt-get upgrade</span><br>"
  + "$ <span class='codejs-cmd'>sudo apt-get install git</span><br>"
  + "</code>"
  return code;
}

function initializationAndInitialCommit() {
  let code = "<code>"
  + "Go to HOME path (~)<br>"
  + "- cd ~<br><br>"
  + "Create git-training folder<br>"
  + "- mkdir <span class='blue accent-1'>git</span>-training<br><br>"
  + "Move the path (check the current path with the pwd command)<br>"
  + "- cd <span class='blue accent-1'>git</span>-training<br><br>"
  + "Initialize the folder git (see the .git folder created with the ls -A command)<br>"
  + "- <span class='blue accent-1'>git</span> init<br><br>"
  + "Add PDF file (add to commit list add) (use file in commit1 folder)<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.pdf<br><br>"
  + "Making the first commit (creating a unit of history)<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'report card: Add question PDF'<br><br>"
  + "Add source code (add to commit list add) (use files in commit2 folder)<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "commit (make history unit)<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'report card: Add base code'<br><br>"
  + "</code>"
  return code;
}

function usingDiffAndMakingAdditionalCommit() {
  let code = "<code>"
  + "Check the status<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Change or overwrite the contents of the report_card.c source file in the commit3 folder and check<br>"
  + "- <span class='blue accent-1'>git</span> diff<br><br>"
  + "If you confirm the change through diff, proceed to add command<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "Commit the prepared source file<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'report card: Print a message of introduction'<br><br>"
  + "Check three commit so far<br>"
  + "- <span class='blue accent-1'>git</span> log<br><br>"
  + "Change or overwrite the contents of the report_card.c source file in the commit4 folder and check<br>"
  + "- <span class='blue accent-1'>git</span> diff<br><br>"
  + "If you confirm the change through diff, proceed to add command<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "Commit the prepared source file<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'report card: Print grades of each subject'<br><br>"
  + "Check four commit so far<br>"
  + "- <span class='blue accent-1'>git</span> log<br><br>"
  + "</code>"
  return code;
}

function includeYourSignatureInCommit() {
  let code = "<code>"
  + "Change or overwrite the contents of the report_card.c source file in the commit5 folder and check<br>"
  + "- <span class='blue accent-1'>git</span> diff<br><br>"
  + "If you confirm the change through diff, proceed to add command<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "Commit with signature (Include signatures with the -s option.)<br>"
  + "- <span class='blue accent-1'>git</span> commit -sm 'report card: Show the sum of each grade'<br><br>"
  + "Change or overwrite the contents of the report_card.c source file in the commit6 folder and check<br>"
  + "- <span class='blue accent-1'>git</span> diff<br><br>"
  + "If you confirm the change through diff, proceed to add command<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "Commit with signature<br>"
  + "- <span class='blue accent-1'>git</span> commit -sm 'report card: Get a average of grades'<br><br>"
  + "</code>"
  return code;
}

function letsPushCommitSoFar() {
  let code = "<code>"
  + "Check the status and check the current branch name master.<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Check the commit so far (if not six, check again)<br>"
  + "- <span class='blue accent-1'>git</span> shortlog<br><br>"
  + "Register <span class='codejs-keyword'>GitHub</span> remote repository URL(Pause and turn "
  + "on http://github.com and create a new repository)<br>Register <span class='codejs-keyword'>"
  + "GitHub</span> remote repository with the copied URL (except for '<' and '>')<br>"
  + "- <span class='blue accent-1'>git</span> remote add origin <copy URL><br><br>"
  + "Now let's push the work to the <span class='codejs-keyword'>GitHub</span> remote repository (origin).<br>"
  + "- <span class='blue accent-1'>git</span> push origin master<br><br>"
  + "Open and view the <span class='codejs-keyword'>GitHub</span> remote repository'<br>"
  + "</code>"
  return code;
}

function changingTheCommit() {
  let code = "<code>"
  + "Assume that you change the 'Mean' variable name in report_card.cto 'Average’ (use source in commit6-1 folder)<br>"
  + "- <span class='blue accent-1'>git</span> diff<br><br>"
  + "If you confirm the change through diff, proceed to add command<br>"
  + "- <span class='blue accent-1'>git</span> add report_card.c<br><br>"
  + "Edit the comment at the top of the commit(save and close it when you open a registered editor program such as the vi editor)<br>"
  + "- <span class='blue accent-1'>git</span> commit --amend<br><br>"
  + "Let's push it right away (crash error)<br>"
  + "- <span class='blue accent-1'>git</span> push origin master<br><br>"
  + "Force push to change local repositories to remote repositories (use the --force or -f option)<br>"
  + "- <span class='blue accent-1'>git</span> push origin master --force<br><br>"
  + "Let's go back to <span class='codejs-keyword'>GitHub</span> and see if it changed properly.<br>"
  + "</code>"
  return code;
}

function cancelAdd() {
  let code = "<code>"
  + "Create and add an empty file with touch (it is possible to execute commands consecutively with ';')<br>"
  + "- touch test;<br>" 
  + "- <span class='blue accent-1'>git</span> add test<br><br>"
  + "Check your current status<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Let's cancel the add command with reset command.<br>"
  + "- <span class='blue accent-1'>git</span> reset<br><br>"
  + "Check your current status again<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "</code>"
  return code;
}

function clearingTheCommit() {
  let code = "<code>"
  + "Make sure the test file still exists (re-create it if you deleted it)<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Make some wrong commit. (Can execute commands consecutively)<br>"
  + "- <span class='blue accent-1'>git</span> add test;<br>"
  + "- <span class='blue accent-1'>git</span> commit -sm'test'<br><br>"
  + "Then push and apply the wrong commit to the tree in <span class='codejs-keyword'>GitHub</span>.<br>"
  + "- <span class='blue accent-1'>git</span> push origin master<br><br>"
  + "And clears the most recent commit.<br>"
  + "- <span class='blue accent-1'>git</span> reset HEAD~1<br><br>"
  + "Force push to the remote repository tree to clear the wrong commit.<br>"
  + "- <span class='blue accent-1'>git</span> push origin master --force<br><br>"
  + "Commit is canceled and the files are staged and saved in working directory<br>"
  + "- <span class='blue accent-1'>git</span> reset --soft HEAD^<br><br>"
  + "Commit is canceled and the files are unstagedand saved in the working directory.<br>"
  + "- <span class='blue accent-1'>git</span> reset --mixed HEAD^ // Default option<br>"
  + "- <span class='blue accent-1'>git</span> reset HEAD^ // Same as above<br>"
  + "- <span class='blue accent-1'>git</span> reset HEAD~2 // Cancel last two commit<br><br>"
  + "Commit is canceled and the files are unstagedand deleted from the working directory<br>"
  + "- <span class='blue accent-1'>git</span> reset --hard HEAD^<br>"
  + "</code>"
  return code;
}

function clearingTheCommit_Advanced() {
  let code = "<code>"
  + "Return to commit in the working directory-Cancels the most recent commit and returns the working "
  + "directory<br>"
  + "- <span class='blue accent-1'>git</span> reset HEAD^  //Cancel the most recent commit (default "
  + "option: --mixed)-Check your commit history<br>"
  + "- <span class='blue accent-1'>git</span> reflog  //Reflog(the branch and commit that HEAD has "
  + "pointed to in the last few months) or<br>"     
  + "- <span class='blue accent-1'>git</span> log –g  //Return the working directory to the desired "
  + "point in time<br>"
  + "- <span class='blue accent-1'>git</span> reset HEAD@numberor<br>" 
  + "- <span class='blue accent-1'>git</span> reset commit_id<br><br>"
  + "Commit again with reverted<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'Write commit messages'<br><br>"
  + "Force push to remote storage<br>"
  + "- <span class='blue accent-1'>git</span> push origin branch_name–f or<br>" 
  + "- <span class='blue accent-1'>git</span> push origin + branch_name<br>"
  + "- <span class='blue accent-1'>git</span> push origin +master<br>"
  + "</code>"
  return code;
}

function revert() {
  let code = "<code>"
  + "Revert single commit<br>"
  + "- <span class='blue accent-1'>git</span> revert commit_idex<br>" 
  + "- <span class='blue accent-1'>git</span> revert 2664ce8<br><br>"
  + "If you need to commit multiple commits at onc<br>"
  + "- <span class='blue accent-1'>git</span> revert start_commit_id...end_commit_id<br>"
  + "</code>"
  return code;
}

function pullRequest() {
  let code = "<code>"
  + "Go to <span class='orange accent-1'>https://github.com/jinnatul/gitHelper</span><br>"
  + "- Click Fork Button<br>"
  + "Downloading Forked Project<br>" 
  + "- <span class='blue accent-1'>git</span> clone project_url_forked_in_your_account<br>"
  + "Move Clone Project Directory (If directory name is git-training-1, move to there)<br>"
  + "- cd clone_project_directory_name<br><br>"
  + "Create branch (develop) for pull-request<br>"
  + "- <span class='blue accent-1'>git</span> checkout -b develop<br>"
  + "Move pull_request_testdirectory<br>"
  + "- cd pull_request_test<br><br>"
  + "Create a directory with your name<br>"
  + "- mkdir your_name<br>"
  + "Copy any files in Directory<br>"
  + "- cp any_file Or<br>"
  + "- touch any_name.txt<br>"
  + "Go to Parent Directory<br>"
  + "- cd ..<br><br>"
  + "Add the working directory<br>"
  + "- <span class='blue accent-1'>git</span> add your_name<br><br>"
  + "Prepared files commit<br>"
  + "- <span class='blue accent-1'>git</span> commit –m 'your_namepull request test'<br><br>"
  + "Push to the develop branch of the forked repository (note: not master)<br>"
  + "- <span class='blue accent-1'>git</span> push origin develop<br>"
  + "</code>"
  return code;
}

function merge() {
  let code = "<code>"
  + "Make sure that your just-in-progress develop branch is the current branch (also visible as status)<br>"
  + "- <span class='blue accent-1'>git</span> branch<br><br>"
  + "Let's create an additional branch<br>"
  + "- <span class='blue accent-1'>git</span> checkout -b test<br><br>"
  + "Create an empty file with touch and make a commit<br>"
  + "- touch test<br>"
  + "- <span class='blue accent-1'>git</span> add test<br>"
  + "- <span class='blue accent-1'>git</span> commit -m 'test'<br><br>"
  + "Merge additional branches (test) based on the current branch (develop).<br>"
  + "- <span class='blue accent-1'>git</span> checkout develop<br>"
  + "- <span class='blue accent-1'>git</span> status<br>"
  + "- <span class='blue accent-1'>git</span> merge test<br>"
  + "</code>"
  return code;
}

function rebase() {
  let code = "<code>"
  + "On Stage 8, go to the project path that was cloned after the fork and add upstream(This is not your "
  + "project URL)<br>"
  + "- <span class='blue accent-1'>git</span> remote add upstream <span class='orange accent-1'>"
  + "https://github.com/jinnatul/gitHelper.git</span><br><br>"
  + "get upstream'sdevelop branch.<br>"
  + "- <span class='blue accent-1'>git</span> fetch upstream develop<br><br>"
  + "Make sure your current branch is develop<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Rebase<br>"
  + "- <span class='blue accent-1'>git</span> rebase upstream/develop<br>"
  + "</code>"
  return code;
}

function rebaseInteractive() {
  let code = "<code>"
  + "Select the commit to modify<br>"
  + "- <span class='blue accent-1'>git</span> rebase -i--root<br><br>"
  + "Check status and check if rebase is normal<br>"
  + "- <span class='blue accent-1'>git</span> status<br><br>"
  + "Modify the commit information and finish with --continue<br>"
  + "- <span class='blue accent-1'>git</span> commit --amend<br>"
  + "- <span class='blue accent-1'>git</span> rebase --continue<br>"
  + "</code>"
  return code;
}