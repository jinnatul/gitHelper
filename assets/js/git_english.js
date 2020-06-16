$(function() {
 
  $.getJSON('assets/json/english.json', function() {})
    .done(function(res) {
      let gitBasicStr = "<ul class='collapsible expandable'>";

      // Part-1 Git basic
      git_Basic(res.gitBasic, gitBasicStr);

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

function git_Basic(data, gitBasicStr) {
  console.log(data);
  let retrunStr = "";
  // What is Git?
  retrunStr += whatIsGit(data[0], gitBasicStr);
  // Download Git
  retrunStr += downloadGit(data[1], gitBasicStr);
  // Initialization and initial commit
  retrunStr += initializationAndInitialCommit(data[2], gitBasicStr);
  // Using diff and making additional commit
  retrunStr += usingDiffAndMakingAdditionalCommit(data[3], gitBasicStr);

  
  $('#git_basic').html(retrunStr + "</ui>")
}

// What is Git?
function whatIsGit(data, gitBasicStr) {
  gitBasicStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitBasicStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitBasicStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitBasicStr += "<td id='IDbasic-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitBasicStr += "<td><a id='basic-"+ index +"' class='content'><i class='material-icons teal-text "
    gitBasicStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitBasicStr += "</table></div></li>";
  return gitBasicStr;
}

// Download Git
function downloadGit(data, gitBasicStr) {
  gitBasicStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitBasicStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitBasicStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitBasicStr += "<td id='IDinstall-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    if (index > 0) {
      gitBasicStr += "<td><a id='install-"+ index +"' class='content'><i class='material-icons teal-text "
      gitBasicStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
    }
  }
  gitBasicStr += "</table></div></li>";
  return gitBasicStr;
}

// Initialization and initial commit
function initializationAndInitialCommit(data, gitBasicStr) {
  gitBasicStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitBasicStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitBasicStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitBasicStr += "<td id='IDinitialization-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitBasicStr += "<td><a id='initialization-"+ index +"' class='content'><i class='material-icons teal-text "
    gitBasicStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitBasicStr += "</table></div></li>";
  return gitBasicStr;
}

// Using diff and making additional commit
function usingDiffAndMakingAdditionalCommit(data, gitBasicStr) {
  console.log(data);
  gitBasicStr += "<li><div class='collapsible-header'><h6>"+ data.title +"</h6></div>"
  gitBasicStr += "<div class='collapsible-body codejs center'><table>"; 
  for (let index = 0; index < data.items.length; index++) {
    gitBasicStr += "<tr><td>"+ data.items[index].gitQus +"</td>"
    gitBasicStr += "<td id='IDusingDiff-"+ index +"'>"+ data.items[index].gitAns +"</td>"
    gitBasicStr += "<td><a id='usingDiff-"+ index +"' class='content'><i class='material-icons teal-text "
    gitBasicStr += "text-darken-1'>file_copy</i>copy</a></td></tr>"
  }
  gitBasicStr += "</table></div></li>";
  return gitBasicStr;
}