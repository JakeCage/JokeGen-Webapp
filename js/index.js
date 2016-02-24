document.getElementsByTagName("h1")[0].style.fontSize = "20px";

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$("#joke").on("click", function(){
  
$.getJSON("http://api.icndb.com/jokes/random", function(json) {
var key = json["value"]["joke"];
 
  
$(".message").html(JSON.stringify(key));
  
});
  });