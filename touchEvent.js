// const touchArea = document.getElementById("touchArea");

// touchArea.addEventListener('touchstart', function(){
//     touchArea.textContent = 'Touch Started';
//     touchArea.style.backgroundColor = 'blue';
// });
// touchArea.addEventListener("touchmove", function () {
//   touchArea.textContent = "Touch moved";
//   touchArea.style.backgroundColor = "yellow";
// });
// touchArea.addEventListener("touchend", function () {
//   touchArea.textContent = "Touch Ended";
//   touchArea.style.backgroundColor = "Orange";
// });

const touchArea = document.getElementById("touchArea");
const ball =document.getElementById('ball');
let startX, startY ;

touchArea.addEventListener('touchstart', function(e){
  console.log(e);
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  console.log(startX);
  console.log(startY);
});

touchArea.addEventListener("touchmove", function (e) {
  let diffX = e.touches[0].clientX - startX;
  let diffY = e.touches[0].clientY - startY;
  ball.style.left = Math.max(0, Math.min(380, ball.offsetLeft + diffX)) + 'px';
  ball.style.top = Math.max(0, Math.min(180, ball.offsetTop + diffY)) + 'px';
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  e.preventDefault();
});