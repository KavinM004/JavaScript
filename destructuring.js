/*
// After ES6 array destructuring :
    let array = [ 1, 2, 3, 4, 5];
    let [ first, second, ...rest] = array;

// After ES6 obj destructuring :
    let person = {
        name : 'Kavin M',
        age : 22,
        gender : 'Male'
    };
    let { name, age, gender} = person;

// Default value with array destructuring :
    let nums = [ 1, 2];
    let [ X, Y = 10, Z = 40] = nums;
    
    // Default value with obj destructuring :
        let student = {a : 'Karthick M' , b : 22,  c : 'Female' };
        let { a, b, c = 'Male' } = student;

// Swaping variables in ES6 :
    let m = 2;
    let n = 5;
    [m, n] = [n, m]; // output : m = 5, n = 5

// Destructuring assignment :
    let myArray = [ 1, 2, 3, 4, 5];
    let [ p , , ,s] = myArray; // output : 4

// Destructuring nested obj :
    const user = {
        name : 'Kavin M',
        age : 22,
        email : 'karthickkavin004@gmail.com',
        address : {
            city : 'Salem',
            state : 'Tamilnadu'
        }
    };

    const {
        name,
        age ,
        email ,
        address : { city , state },
    } = user ;

// Destructuring nested array :
    const numbers = [ 1, 2, [3, 4, [5, 6]]];
    const [ I, II, [III, IV, [ V, VI]]] = numbers ; */

// Array of nested obj's :
let users = [
  {
    name: "Kavin M",
    age: 22,
    email: "karthickkavin004@gmail.com",
    address: {
      city: "Salem",
      state: "Tamil Nadu",
    },
  },
  {
    name: "Karthick M",
    age: 24,
    email: "kavin004@gmail.com",
    address: {
      city: "Erode",
      state: "Tamil Nadu",
    },
  },
];

const [
  {
    name: name1,
    email: email1,
    address: { city: city1, state: state1 },
  },
  {
    name: name2,
    email: email2,
    address: { city: city2, state: state2 },
  },
] = users;
