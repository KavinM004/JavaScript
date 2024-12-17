// const eventL = document.getElementById('event');
// eventL.addEventListener('click', function(){
//     alert('Welcome to event');
// });

// mouse events :
/*
eventL.addEventListener("mousedown", function () {
  this.style.backgroundColor = 'Orange';
});

eventL.addEventListener("mouseout", function () {
  this.style.backgroundColor = "blue";
});
eventL.addEventListener("mouseup", function () {
  this.style.backgroundColor = "yellow";
});
eventL.addEventListener("mouseover", function () {
  this.style.backgroundColor = "pink";
}); */

// Key events :
/*
document.addEventListener('keydown', handleKeyEvent);
document.addEventListener('keypress', handleKeyEvent);
document.addEventListener('keyup', handleKeyEvent);
function handleKeyEvent(event) {
  const eventType = event.type;
  const keyCode = event.code;
  const keyName = event.key ;
  console.log(`EventType : ${eventType}`);
  console.log(`keyCode : : ${keyCode}`);
  console.log(`keyName : ${keyName}`);
}; */

// input box enter only number :

const num = document.getElementById('inputNum');
num.addEventListener('keydown', function(event){ // in advance method give 'input as event handler
  // this.value = this.value.replace(/[^0-9]/g, "");
  const key = event.key;
  if(isNaN(key)) event.preventDefault();
});