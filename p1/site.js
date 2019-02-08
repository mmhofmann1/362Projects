'use strict';
//listener for submit button
var n=document.getElementById("name");
var e=document.getElementById("email");
document.getElementById("signup").addEventListener("submit", function(event) {
if(n.validity.valid && e.validity.valid){
  event.preventDefault();
  incomplete.style.display = "none";
  complete.style.display = "block";
}});
