

var page=window.location.href;
var href=document.getElementById("nav-item5").href;

if(page==href){
    var x=document.getElementById("nav-item5");
    x.className+="test";
}
console.log(page);
console.log(href);

