$(function() {

  $.getJSON('assets/json/bangla.json', function() {})
    .done(function(res) {
      //console.log(res.gitData);
      ইনসটল(res.gitData[0]);
    })
    .fail(function() {
      console.log('Problem ....here!');
    })

});

function ইনসটল(data) {
  console.log(data)
  let tableData = "<table><tr><th>"+ data.title +"</th></tr>"; 
  for (let index = 0; index < data.items.length; index++) {
    tableData += "<tr><td>"+ data.items[index].gitQus +"</td><td>"+ data.items[index].gitAns +"</td></tr>";
  }
  tableData += "</table>";
  $('#gitInstall').html(tableData);
}