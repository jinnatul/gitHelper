$(function() {

  $.getJSON('assets/json/bangla.json', function() {})
    .done(function(res) {
      ইনসটল(res.gitData[0]);
      কনফিগ(res.gitData[1]);
      সাধারণ(res.gitData[2]);
    })
    .fail(function() {
      console.log('Problem ....here!');
    });

});

function ইনসটল(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>"; 
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td><td>"+ data.items[index].gitAns +"</td></tr>";
  }
  tableData += "</table>";
  $('#gitInstall').html(tableData);
}

function কনফিগ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td><td>"+ data.items[index].gitAns +"</td></tr>";
  }
  tableData += "</table>";
  $('#gitConfig').html(tableData);
}

function সাধারণ(data) {
  let tableData = "<table><tr><h5 class='center-align blue-text'>"+ data.title +"</h5></tr>";
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td><td>"+ data.items[index].gitAns +"</td></tr>";
  }
  tableData += "</table>";
  $('#gitGeneral').html(tableData);
}