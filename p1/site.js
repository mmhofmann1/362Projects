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
//editing invalid or empty input message
var em=document.getElementById("email");
em.addEventListener("input", function(event){
  if(em.validity.typeMismatch){
    em.setCustomValidity("Please enter a valid email")}
  else{
    em.setCustomValidity("");
  }});
