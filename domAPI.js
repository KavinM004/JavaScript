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
setInterval(clock, 1000);