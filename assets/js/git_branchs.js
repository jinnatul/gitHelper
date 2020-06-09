$(function() {

  let gitInfo = "<ul class='collapsible expandable'>"

  // Master Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Master Branch</h6></div>"
  + "<div class='collapsible-body codejs'><img class='responsive-img' "
  + "src='assets/img/masterBranch.png' alt='masterBranch'></div></li>"

  // Develop Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Develop Branch</h6></div>"
  + "<div class='collapsible-body codejs'><img class='responsive-img' "
  + "src='assets/img/developBranch.png' alt='developBranch'></div></li>"

  // Feature Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Feature Branch</h6></div>"
  + "<div class='collapsible-body codejs'><img class='responsive-img' "
  + "src='assets/img/featureBranch.png' alt='featureBranch'></div></li>"

  // Feature Branch creation & termination
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Feature Branch creation & termination</h6></div>"
  + "<div class='collapsible-body codejs'>"+ featureBranchCreation() +"</div></li>"

  // Release Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Release Branch</h6></div>"
  + "<div class='collapsible-body codejs'><img class='responsive-img' "
  + "src='assets/img/releaseBranch.png' alt='releaseBranch'></div></li>"

  // Release Branch creation & termination
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Release Branch creation & termination</h6></div>"
  + "<div class='collapsible-body codejs'>"+ releaseBranchCreation() +"</div></li>"

  // The whole flow of the branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ The whole flow of the branch</h6></div>"
  + "<div class='collapsible-body codejs'><img class='responsive-img' "
  + "src='assets/img/branchs.png' alt='branchs'></div></li>"

  $('#git_branchs').html(gitInfo);

})

function featureBranchCreation() {
  let code = "<code>"
  + "Branch the feature branch (feature/login) on the 'develop' branch. (not in the 'master' branch!)<br>"
  + "- <span class='blue accent-1'>git</span> checkout -b feature/login develop<br><br>" 
  + "Move to the 'develop' branch<br>"
  + "- <span class='blue accent-1'>git</span> checkout develop<br><br>"
  + "Merge the contents of the feature/login branch into the 'develop' branch<br>"
  + "- <span class='blue accent-1'>git</span> merge --no-ff feature/login// --no-ff option: additional "
  + "description below<br>"
  + "- <span class='blue accent-1'>git</span> branch -d feature/login// -d option: Delete the branch "
  + "corresponding to feature/login.<br><br>"
  + "Put the 'develop' branch on the remote repository<br>"
  + "- <span class='blue accent-1'>git</span> push origin develop<br>"
  + "</code>"
  return code;
}

function releaseBranchCreation() {
  let code = "<code>"
  + "branch from the release branch (release-1.2) to the 'develop' branch (not from the 'master' branch)<br>"
  + "- <span class='blue accent-1'>git</span> checkout -b release-1.2 develop<br><br>"
  + "Move to the 'master' branch.<br>"
  + "- <span class='blue accent-1'>git</span> checkout master<br><br>"
  + "Merge the contents of the release-1.2 branch into the 'master' branch.<br>"
  + "- <span class='blue accent-1'>git</span> merge --no-ff release-1.2<br><br>"
  + "Give the release version tag to the merged commit.<br>"
  + "- <span class='blue accent-1'>git</span> tag -a 1.2<br><br>"
  + "Go to the 'develop' branch.<br>"
  + "- <span class='blue accent-1'>git</span> checkout develop<br><br>"
  + "Merge the contents of the release-1.2 branch into the 'develop' branch.<br>"
  + "- <span class='blue accent-1'>git</span> merge --no-ff release-1.2<br>"
  + "- <span class='blue accent-1'>git</span> branch -d release-1.2 // -d option: Delete the branch corresponding to release-1.2"
  + "</code>"
  return code;
}