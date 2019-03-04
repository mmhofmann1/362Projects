'use strict';
//listener for submit button
var i=document.getElementById("incomplete");
var c=document.getElementById("complete");
var n=document.getElementById("name");
var e=document.getElementById("email");
document.getElementById("signup").addEventListener("submit", function(event) {
if(n.validity.valid && e.validity.valid){
  event.preventDefault();
  i.classList.toggle("hidden");
  c.classList.toggle("visible");
}});
//editing invalid or empty input message
var em=document.getElementById("email");
em.addEventListener("input", function(event){
  if(em.validity.typeMismatch){
    em.setCustomValidity("Please enter a valid email")}
  else{
    em.setCustomValidity("");
  }});
