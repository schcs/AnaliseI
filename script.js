$(document).ready(function(){ 
  $.get("sidemenu.html", function(data) {
    $("#sidemenu").html(data);
  });
}); 
