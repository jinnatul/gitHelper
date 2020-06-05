$(function() {

  let gitInfo = "<ul class='collapsible expandable'>"

  // Master Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Master Branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Develop Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Develop Branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Feature Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Feature Branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Feature Branch creation & termination
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Feature Branch creation & termination</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Release Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Release Branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Release Branch creation & termination
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Release Branch creation & termination</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Hotfix Branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Hotfix Branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // Hotfix Branch creation & termination
  + "<li><div class='collapsible-header'>"
  + "<h6>$ Hotfix Branch creation & termination</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  // The whole flow of the branch
  + "<li><div class='collapsible-header'>"
  + "<h6>$ The whole flow of the branch</h6></div>"
  + "<div class='collapsible-body codejs'></div></li>"

  $('#git_branchs').html(gitInfo);

})