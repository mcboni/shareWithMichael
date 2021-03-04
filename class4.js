

var page=window.location.href;
var href=document.getElementById("nav-item4").href;

if(page==href){
    var x=document.getElementById("nav-item4");
    x.className+="test";
}
console.log(page);
console.log(href);

