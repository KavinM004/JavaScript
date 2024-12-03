// ES5 Class
/*
function Person(name,age){
    this.name=name;
    this.age=age;
};

Person.prototype.newPerson = function(){
    console.log(`Name : ${this.name}`);
    console.log(`Age : ${this.age}`);
};

const person = new Person('Kavin M', 22);
person.newPerson();

// Inheritance
function sayHello (name, age){
    Person.call(this, name);
    this.age = age;
};
sayHello.prototype = Object.create(Person.prototype);
sayHello.prototype.constructor = sayHello;
sayHello.prototype.eligibility = function(){
    console.log(this.name + ' is ' + this.age + ' year old. He is ' + (this.age >= 18 ? 'eligible.' : 'not eligible.') );
};

var nivakM = new sayHello('Nivak M', 12);
nivakM.newPerson();
nivakM.eligibility();
*/
//ES6 Class


class Student{
    constructor(name, age, email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    getDetails(){
         console.log(`Name : ${this.name}`);
         console.log(`Age : ${this.age}`);
         console.log(`email : ${this.email}`);
    }
};

// Inheritance
const student1 = new Student('Karthick M', 22, 'Karthickkavin004@gmail.com');
student1.getDetails();

class Person extends Student {
  constructor(name, age, email) {
    super(name);
    this.age = age;
    this.email = email;
  }
  eligibility = function () {
    console.log(
      this.name +
        " is " +
        this.age +
        " year old. He is " +
        (this.age >= 18 ? "eligible." : "not eligible.")
    );
  };
}

var student2 = new Person('Sanjay Kumar E', 23, 'sanjaykumar@gmail.com');
student2.getDetails();
student2.eligibility();