$(function() {

  let gitInfo = "<ul class='collapsible expandable'>"

  // Fork the central remote repository
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Fork the central remote repository</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Create a local repository with the git clone command
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Create a local repository with the git clone command</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Connect two remote repositories
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Connect two remote repositories</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Check branch location
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Check branch location</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Create a new branch for functional development
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Create a new branch for functional development</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  // Push the commit history to your remote repository
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Push the commit history to your remote repository</h6></div>"
  + "<div class='collapsible-body codejs'><p class='fontSize'></p></div></li>"

  $('#git_forkingWorkflow').html(gitInfo);

})