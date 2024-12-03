/*
const person = {
    firstName : 'Kavin',
    lastName : 'M',
    // Getter
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
    // Setter
    set fullName(name){
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];        
    }
};

console.log(person.fullName); // Kavin M
person.fullName = 'Kavin Muthusamy';
console.log(person.fullName); // Kavin Muthusamy 
*/

// GetterSetter in Class type
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(name){
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

const Obj1 = new Person('Kavin', 'Muthusamy');
console.log(Obj1.fullName); // Kavin Muthusamy

// Create a class called circle
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    // Getter
    get diameter(){
        return this.radius * 2;
    }
    // Setter
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    // Getter
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

let value = new Circle(5);
console.log(value.radius);
console.log(value.diameter);
console.log(value.area);


