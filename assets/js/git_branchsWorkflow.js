$(function() {

  let gitInfo = "<ul class='collapsible expandable'>"

  // What is Feature Branch Workflow?
  + "<li><div class='collapsible-header'>"
  + "<h6>$ What is Feature Branch Workflow?</h6></div>"
  + "<div class='collapsible-body codejs'>"+ whatIsFeatureBranchWorkflow() +"</div></li>"

  // Concept of Local Storage & Remote Storage
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Concept of Local Storage & Remote Storage</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Create a local repository with git clone
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Create a local repository with git clone</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Check branch location
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Check branch location</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Create a new branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Create a new branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Push the branch to the central remote repository
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Push the branch to the central remote repository</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Send a full request to the project manager
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Send a full request to the project manager</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Synchronization
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Synchronization</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Create another branch for the new function
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Create another branch for the new function</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  $('#git_branchsWorkflow').html(gitInfo);

})

function whatIsFeatureBranchWorkflow() {
  let code = "<code>"
  + "• Creating and working with functional branches.<br><br>"
  + "• Many team members can safely develop new functions around the main code base (master).<br><br>"
  + "• You can improve code quality by facilitating communication between team members.<br><br>"
  + "• Flexible collaboration methods<br><br>"
  + "• Collaboration method used in project of small number of people"
  + "</code>"
  return code;
}