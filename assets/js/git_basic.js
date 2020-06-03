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
  + "<div class='collapsible-body codejs center'>"+ downloadGit() +"</div></li>"

  // Initialization and initial commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Initialization and initial commit</h6></div>"
  + "<div class='collapsible-body codejs center'>"+ initializationAndInitialCommit() +"</div></li>"

  // Using diff and making additional commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Using diff and making additional commit</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Include your signature in commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Include your signature in commit</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Let's push commit so far
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Let's push commit so far</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Changing the commit (including commits from the remote repository)
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Changing the commit (including commits from the remote repository)</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Cancel add
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Cancel add</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Clearing the commit
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Clearing the commit</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Clearing the commit (Advanced)
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Clearing the commit (Advanced)</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // revert
  + "<li><div class='collapsible-header'>"
  + "<h6>$ revert</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Pull Request
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Pull Request</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Merge
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Merge</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Rebase
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Rebase</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Rebase --interactive
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Rebase --interactive</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

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
  +"</code>"
  return code;
}