
/*
var page=window.location.href;
var href=document.getElementById("nav-item1").href;

if(page==href){
    var x=document.getElementById("nav-item1");
    x.className+="test";
}
console.log(page);
console.log(href);

*/

var page=window.location.href;
var href=document.querySelectorAll("a");

if(href[1]==page){
    href[1].style.color="green";
}else if(href[2]==page){
    href[2].style.color="green";
}
else if(href[3]==page){
    href[3].style.color="green";
}
else if(href[4]==page){
    href[4].style.color="green";
}
else if(href[5]==page){
    href[5].style.color="green";
}
