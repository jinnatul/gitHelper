$(function() {

  $("main").hide();

  $.getJSON('assets/json/bangla.json', function() {})
    .done(function(res) {
      ইনসটল(res.gitData[0]);
      কনফিগ(res.gitData[1]);
      সাধারণ(res.gitData[2]);
      রিসেট(res.gitData[3]);
      আপডেট_এবং_ডিলিট(res.gitData[4]);
      বাঞচ(res.gitData[5]);
      মারজ(res.gitData[6]);
      সটাশ(res.gitData[7]);
      লগ(res.gitData[8]);
      তুলনা(res.gitData[9]);
      রিলিজ_এবং_ভারসন(res.gitData[10]);
      সহযোগিতা(res.gitData[11]);
      গিট_ফলো(res.gitData[12]);
      গিটহাব_ইসু(res.gitData[13]);

      // Copy clipBoard
      copyData_ClipBoard();

      // preloader
      setTimeout(function () {
        $(".mainLoader").fadeOut();
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

function showMaterialToast(data, style) {
  M.toast({
      html : data,
      classes : style
  });
}

function ইনসটল(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>"; 
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDinstall-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='install-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitInstall').html(tableData);
}

function কনফিগ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDconfig-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='config-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitConfig').html(tableData);
}

function সাধারণ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDnormal-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='normal-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitGeneral').html(tableData);
}

function রিসেট(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDreset-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='reset-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitReset').html(tableData);
}

function আপডেট_এবং_ডিলিট(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDupdate-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='update-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitUpdateDelete').html(tableData);
}

function বাঞচ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDbranch-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='branch-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitBranch').html(tableData);
}

function মারজ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDmarge-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='marge-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitMerge').html(tableData);
}

function সটাশ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDstash-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='stash-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitStash').html(tableData);
}

function লগ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDlog-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='log-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitLog').html(tableData);
}

function তুলনা(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDcompare-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='compare-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitCompare').html(tableData);
}

function রিলিজ_এবং_ভারসন(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDrelease-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='release-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitReleasesVersion').html(tableData);
}

function সহযোগিতা(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDhelp-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='help-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitCollaborate').html(tableData);
}

function গিট_ফলো(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td>"
    tableData += "<td id='IDflow-"+ index +"'>"+ data.items[index].gitAns + "</td><td>"
    tableData += "<a id='flow-"+ index +"' class='content'>"
    tableData += "<i class='material-icons teal-text text-darken-1'>file_copy</i>copy</a></td></tr>";
  }
  tableData += "</table>";
  $('#gitFlow').html(tableData);
}

function গিটহাব_ইসু(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index+=3) {
    tableData += "<tr><td>"+ data.items[index].gitAns +"</td>";
    tableData += "<td>"+ data.items[index + 1].gitAns +"</td>";
    tableData += "<td>"+ data.items[index + 2].gitAns +"</td></tr>";
  }
  tableData += "</table>";
  $('#gitIssues').html(tableData);
}