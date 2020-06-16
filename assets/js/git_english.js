$(function() {
  
  $("main").hide();

  $.getJSON('assets/json/english.json', function() {})
    .done(function(res) {

      // Part-1 Git Basic
      git_Basic(res.data);

      // Part-2 Git Branch
      git_Branch(res.data);

      // Part-3 Git Branch-Workflow
      git_BranchWorkflow(res.data);

      // Part-4 Git Forking-Workflow
      git_ForkingWorkflow(res.data);

      // Copy clipBoard
      copyData_ClipBoard();

      // preloader
      setTimeout(function () {
        $(".mainLoader").fadeOut();
        $(".collapsible").collapsible();
        $("main").show();
      }, 1000);

    })
    .fail(function() {
      showMaterialToast("Problem ....here! ", "red darken-4");
    });
});

// ClipBoard
function copyData_ClipBoard() {
  $(".content").on("click",function(){
    let currentId = 'ID' + this.id; 
    let copyText = $('#' + currentId).text();
    let input = document.createElement('input');
    input.value = copyText;
    
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    showMaterialToast("Copied ", "deep-purple darken-4");
    document.body.removeChild(input);
 });
}

// Show Toast
function showMaterialToast(data, style) {
  M.toast({
      html : data,
      classes : style
  });
}

// Part-1 Git Basic
function git_Basic(data) {
  let retrunStr = "<ul class='collapsible expandable'>";

  // What is Git?
  retrunStr += whatIsGit(data[0]);
  // Download Git
  retrunStr += downloadGit(data[1]);
  // Initialization and initial commit
  retrunStr += initializationAndInitialCommit(data[2]);
  // Using diff and making additional commit
  retrunStr += usingDiffAndMakingAdditionalCommit(data[3]);
  // Include your signature in commit
  retrunStr += includeYourSignatureInCommit(data[4]);
  // Let's push commit so far
  retrunStr += letsPushCommitSoFar(data[5]);
  // Cancel add
  retrunStr += cancelAdd(data[6]);
  // Clearing the commit
  retrunStr += clearingTheCommit(data[7]);
  // Clearing the commit Advance
  retrunStr += clearingTheCommitAdvance(data[8]);
  // Revert
  retrunStr += revert(data[9]);
  // Pull Request
  retrunStr += pullRequest(data[10]);
  // Merge
  retrunStr += merge(data[11]);
  // Rebase
  retrunStr += rebase(data[12]);
  // Rebase--interactive
  retrunStr += rebaseInteractive(data[13]);
  // Blame
  retrunStr += blame(data[14]);
  // Clean
  retrunStr += clean(data[15]);
  // Gitignore
  retrunStr += gitignore(data[16]);

  $('#git_basic').html(retrunStr + "</ui>");
}

// Part-2 Git Branch
function git_Branch(data) {
  let retrunStr = "<ul class='collapsible expandable'>";

  // Feature Branch creation & termination
  retrunStr += staticbranchStr();
  // Feature Branch creation & termination
  retrunStr += featureBranchCreationTermination(data[17]);
  // Release Branch creation & termination
  retrunStr += releaseBranchCreationTermination(data[18]);

  $('#git_branchs').html(retrunStr + "</ui>");
}

// Part-3 Git Branch-Workflow
function git_BranchWorkflow(data) {
  let retrunStr = "<ul class='collapsible expandable'>";

  // What is Feature Branch Workflow
  retrunStr += whatIsFeatureBranchWorkflow(data[19]);
  // Concept of Local Storage & Remote Storage
  retrunStr += conceptOfLocalStorageRemoteStorage(data[20]);
  // Create a local repository with git clone
  retrunStr += createlocalRepositoryWithGitClone(data[21]);
  // Check branch location
  retrunStr += checkBranchLocation(data[22]);
  // Create a new branch
  retrunStr += createNewBranch(data[23]);
  // Push the branch to the central remote repository
  retrunStr += pushTheBranchToTheCentralRemoteRepository(data[24]);
  // Send a full request to the project manager
  retrunStr += sendFullRequestToTheProjectManager(data[25]);
  // Synchronization
  retrunStr += synchronization(data[26]);
  // Create another branch for the new function
  retrunStr += createAnotherBranchForTheNewFunction(data[27]);

  $('#git_branchsWorkflow').html(retrunStr + "</ui>");
}

// Part-4 Git Forking-Workflow
function git_ForkingWorkflow(data) {
  let retrunStr = "<ul class='collapsible expandable'>";

  // Fork the central remote repository
  retrunStr += forkTheCentralRemoteRepository(data[28]);
  // Create a local repository with the git clone command
  retrunStr += createLocalRepositoryWithTheGitCloneCommand(data[29]);
  // Connect two remote repositories
  retrunStr += connectTwoRemoteRepositories(data[30]);
  // Check branch location
  retrunStr += checkBranchLocation(data[31]);
  // Create a new branch for functional development
  retrunStr += createNewBranchForFunctionalDevelopment(data[32]);
  // Push the commit history to your remote repository
  retrunStr += pushTheCommitHistoryToYourRemoteRepository(data[33]);

  $('#git_forkingWorkflow').html(retrunStr + "</ui>");
}



/******* Part-1 Git Basic *******/
// What is Git?
function whatIsGit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDbasic-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='basic-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Download Git
function downloadGit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDinstall-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    if (index > 0) {
      gitStr += "<td><a id='install-"+ index +"' class='content'><i class='material-icons teal-text "
      gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
    }
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Initialization and initial commit
function initializationAndInitialCommit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDinitialization-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='initialization-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Using diff and making additional commit
function usingDiffAndMakingAdditionalCommit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDusingDiff-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='usingDiff-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Include your signature in commit
function includeYourSignatureInCommit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDincludeYour-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='includeYour-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Let's push commit so far
function letsPushCommitSoFar(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDletsPush-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='letsPush-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Cancel add
function cancelAdd(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDcancelAdd-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='cancelAdd-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Clearing the commit
function clearingTheCommit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDclearing-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='clearing-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Clearing the commit
function clearingTheCommit(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDclearing-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='clearing-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Clearing the commit Advance
function clearingTheCommitAdvance(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDclearingAd-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='clearingAd-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Revert
function revert(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDrevert-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='revert-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Pull Request
function pullRequest(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDpull-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    if (index < 3 || index == 4) continue;
    gitStr += "<td><a id='pull-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Merge
function merge(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDmerge-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='merge-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Rebase
function rebase(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDrebase-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='rebase-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Rebase--interactive
function rebaseInteractive(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDrebaseIn-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='rebaseIn-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Blame
function blame(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDblame-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='blame-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Clean
function clean(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDclean-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='clean-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Gitignore
function gitignore(data) {
  let gitStr = "";
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDgitignore-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='gitignore-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

/******* Part-2 Git Branch *******/
// Static Branch Str
function staticbranchStr() {
  let gitStr = ""
  // Master Branch
  gitStr += "<li><div class='collapsible-header'>"
  gitStr += "<h6>$ Master Branch</h6></div>"
  gitStr += "<div class='collapsible-body codejs'><img class='responsive-img' "
  gitStr += "src='assets/img/masterBranch.png' alt='masterBranch'></div></li>"

  // Develop Branch
  gitStr += "<li><div class='collapsible-header'>"
  gitStr += "<h6>$ Develop Branch</h6></div>"
  gitStr += "<div class='collapsible-body codejs'><img class='responsive-img' "
  gitStr += "src='assets/img/developBranch.png' alt='developBranch'></div></li>"

  // Feature Branch
  gitStr += "<li><div class='collapsible-header'>"
  gitStr += "<h6>$ Feature Branch</h6></div>"
  gitStr += "<div class='collapsible-body codejs'><img class='responsive-img' "
  gitStr += "src='assets/img/featureBranch.png' alt='featureBranch'></div></li>"
  return gitStr;
}

// Feature Branch creation & termination
function featureBranchCreationTermination(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDfeatureBranchCreation-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='featureBranchCreation-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";
  return gitStr;
}

// Release Branch creation & termination
function releaseBranchCreationTermination(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitStr += "<td id='IDreleaseBranchCreation-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitStr += "<td><a id='releaseBranchCreation-"+ index +"' class='content'><i class='material-icons teal-text "
    gitStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitStr += "</table></div></li>";

  // The whole flow of the branch
  gitStr += "<li><div class='collapsible-header'>"
  gitStr += "<h6>$ The whole flow of the branch</h6></div>"
  gitStr += "<div class='collapsible-body codejs'><img class='responsive-img' "
  gitStr += "src='assets/img/branchs.png' alt='branchs'></div></li>"

  return gitStr;
}


/******* Part-3 Git Branch-Workflow*******/
// What is Feature Branch Workflow
function whatIsFeatureBranchWorkflow(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Concept of Local Storage & Remote Storage
function conceptOfLocalStorageRemoteStorage(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Create a local repository with git clone
function createlocalRepositoryWithGitClone(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Check branch location
function checkBranchLocation(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Create a new branch
function createNewBranch(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Push the branch to the central remote repository
function pushTheBranchToTheCentralRemoteRepository(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Send a full request to the project manager
function sendFullRequestToTheProjectManager(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Synchronization
function synchronization(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Create another branch for the new function
function createAnotherBranchForTheNewFunction(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

/******* Part-4 Git Forking-Workflow*******/

// Fork the central remote repository
function forkTheCentralRemoteRepository(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Create a local repository with the git clone command
function  createLocalRepositoryWithTheGitCloneCommand(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Connect two remote repositories
function  connectTwoRemoteRepositories(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Check branch location
function  checkBranchLocation(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Create a new branch for functional development
function  createNewBranchForFunctionalDevelopment(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}

// Push the commit history to your remote repository
function  pushTheCommitHistoryToYourRemoteRepository(data) {
  let gitStr = ""
  gitStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitStr += "<div class='collapsible-body codejs center'><table>"; 

  gitStr += "</table></div></li>";
  return gitStr;
}