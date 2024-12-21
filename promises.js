/*const promise = new Promise((reslove, reject) => {
  const sum = 2 + 2;
  if (sum == 4) {
    reslove(`Promise resloved : ${sum}`);
  } else {
    reject(`Promise rejected : ${sum}`);
  }
});
promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  }); */

/*
function setTimeoutPromise(mul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const total = mul * mul;
      if(total%2 == 0){
        resolve(`Promise resloved : ${total}`);
      }
      else{
        reject(`Promise rejected : ${total}`);
        }
    }, 1000);
  });
}
setTimeoutPromise(8)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  }); */

/*const button = document.querySelector("button");
function addEventpromise(e, f) {
  return new Promise((resolve, reject) => {
    e.addEventListener(f, resolve);
  });
}
addEventpromise(button, "click")
    .then((msg) => console.log(msg)) 
    .catch((err) => console.log(`hi, Karthick M`)); */
