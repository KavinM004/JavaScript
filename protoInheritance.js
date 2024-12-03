// Prototype and Prototypal Inheritance :

let arr = [ ' Apple ', ' Orange '];
// Prototype Inheritance
let obj1 = {
    name: ' Kavin M',
    city: 'Salem',
    info: function(){
        return `${this.name} is from + ${this.city}`;
    }
};
/*
let obj2 = {
    name: 'Karthick M',
    city: 'Erode'
};

obj2.__proto__ = obj1; */

// Prototypal inheritance
const obj2 = Object.create(obj1);
obj2.city = 'Erode';

// Regular expression refers it's own 'this' .
// Arrow function does not refer it's own 'this', instead it defines gobal lexical scope .
Array.prototype.doubleLength = function() {
    return this.length * 2;
};

Function.prototype.myBind = function(){
    console.log('This is bind function');
};

function fun (){}

function student(name){
    this.name = name;
}

student.prototype.welcome = function(){
    console.log(`Welcome ${this.name}`);
};

const kavinM = new student('Kavin M');
const karthickM = new student('Karthick M');

kavinM.welcome();
karthickM.welcome();