// const para = document.createElement('p');
// para.innerHTML = 'This <b><i>Kavin M</i></b>';
// para.style.color = 'goldenrod';

// const body = document.querySelector('body');
// body.appendChild(para);

// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello, World!';
// h1.style.color = 'orange';

// body.insertBefore(h1, para);

// remove or removeChild :
/*
const removeChild = document.querySelectorAll('.btn');
removeChild.forEach((btn)=>{
    btn.addEventListener('click', function(){
        const tr = this.parentNode.parentNode;
        // tr.remove();
        const th = tr.childNodes[5];
        tr.removeChild(th);
    });
});  */

/*
const h4 = document.querySelector('h4');
h4.style.color = 'whitesmoke';
h4.style.backgroundColor = 'blue';
h4.style.padding = '40px';
h4.style.borderRadius = '20px'
h4.style.fontSize = '20px'

h4.innerHTML = '<i>Hi! Kavin <b>M,</b></i>';

// cloneElement
const heading = document.querySelector('body');
const clone = h4.cloneNode(true);
heading.appendChild(clone);

let clockDiv = document.querySelector('.clock');
clockDiv.style.fontSize = '40px';
function clock() {
    const date = new Date();
    const time = date.getHours() + " : " + date.getMinutes()+' : '+date.getSeconds()+' : '+date.getMilliseconds();
    clockDiv.innerHTML = time;
}
setInterval(clock, 1000); */

// DomApiFunction :
/*
// classList
const box = document.querySelector('.box');
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const btnToggle = document.querySelector('#btnToggle');
btnAdd.addEventListener('click', function(){
    box.classList.add('newbox');
});
btnRemove.addEventListener('click', function(){
    box.classList.remove('newbox');
});
btnToggle.addEventListener('click', function(){
    box.classList.toggle('newbox');
}); */

/*
// Get & Set attributes
const textBox = document.querySelector("input");
const btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", function () {
  const box = textBox.getAttribute("type");
  if (box == "text") {
    textBox.setAttribute("type", "password");
  } else {
    textBox.setAttribute("type", "text");
  }
});

const checkBox = document.querySelector('#click');
console.log(checkBox);
checkBox.addEventListener('click', function(){
    const cB = textBox.getAttribute('type');
    if(cB == 'text'){
         textBox.setAttribute("type", "password");
    }else{
        textBox.setAttribute("type", "text");
    }
}); */

// Attributes :
const textBox = document.querySelector("input");
console.log(textBox.getAttributeNames());
console.log(textBox.hasAttribute('type'));
console.log(textBox.removeAttribute('id'));
console.log(textBox.getAttributeNames());