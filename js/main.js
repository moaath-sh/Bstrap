window.onload=function(){
    alert("wlecome to our page ");
}
window.onerror=function() {
    alert("oops you have an error")
}
var signButton= document.querySelectorAll('.sign')
for (var i = 0; i < signButton.length; i++) {
    signButton[i].onclick=function() {
        alert("congrats you are with us ")
    }}

var signCard =document.getElementById("signCard");

signCard.onmouseover=function(){
    signCard.className="jscardChang";
}
signCard.onmouseleave=function(){
    signCard.className="pricing-item";
}

var signCard1 =document.getElementById("signCard1");

signCard1.onmouseover=function(){
    signCard1.className="jscardChang";
}
signCard1.onmouseleave=function(){
    signCard1.className="pricing-item";
}


var signCard2 =document.getElementById("signCard2");

signCard2.onmouseover=function(){
    signCard2.className="jscardChang";
}
signCard2.onmouseleave=function(){
    signCard2.className="pricing-item";
}
