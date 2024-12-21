// Web API's
/*
    console, setTimeout(), DOM API's, fetch(), Local Storage, Location
*/
// call Stack - LIFO & quickly execute, can't wait for anything , JS is Single threaded, 

// Event Bubbling || Event Caputring :

const gP = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

gP.addEventListener('click', function(){
    console.log('Grand Parent Clicked');
}, true);
parent.addEventListener("click", function () {
  console.log("Parent Clicked");
}, true);
child.addEventListener("click", function () {
  console.log("Child Clicked");
}, true);
