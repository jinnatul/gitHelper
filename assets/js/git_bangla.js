$(function() {

  $.getJSON('assets/json/bangla.json', function() {})
    .done(function(res) {
      console.log(res.gitData[0]);
    })
    .fail(function() {
      console.log('Problem ....here!');
    })

});