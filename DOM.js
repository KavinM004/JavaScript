// it is not part of JS

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// htmlCollection use only in 'for loop' ( works dynamically). & nodelist use in array methods(staticlly works).

/*
let unList = document.getElementsByTagName('li');
console.log(unList);
console.log(unList.length);

let addList = document.createElement('li');
addList.innerHTML = 'NodeJS';
unList[0].parentNode.appendChild(addList);
console.log(unList);
console.log(unList.length);
for (let i = 0; i < unList.length; i++) {
    unList[i].style.color = 'hotpink';
};

*/

/*
// Static eg. Nodelist.
let li = document.querySelectorAll('li');
console.log(li);
let addList = document.createElement("li");
addList.innerHTML = "NodeJS";
li[0].parentNode.appendChild(addList);
li.forEach((list) => {
    list.style.color = 'purple';
});
*/
// accessing parent node by child :
/*
const list = document.getElementsByTagName('p');
const parent = list[0].parentNode;
parent.style.backgroundColor = 'yellow';
parent.style.padding = '11px';

const parentDiv = document.getElementsByTagName('h4');
const father = parentDiv[0].parentNode;
father.style.backgroundColor = 'whitesmoke';
father.style.padding = "11px";

const mern = document.getElementsByTagName('li');
const parentList = mern[0].parentNode;
parentList.style.backgroundColor = 'lightblue';
parentList.style.padding = "20px"; */

// children :
/*
const unList = document.getElementsByTagName('ul')[0];
console.log(unList.children[0]);
console.log(unList.children[1]);
console.log(unList.children[2]);
console.log(unList.childNodes);
console.log(unList.childElementCount); */

// siblings
const broSis = document.getElementsByTagName('ul')[0];
console.log(broSis.previousElementSibling);
console.log(broSis.previousSibling)
