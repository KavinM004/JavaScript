// Optional chaining for only read and delete
const user = {
    name : 'Kavin M',
    address : {
        city : 'Salem'
    }
};

// // Option 1 
// console.log(user.address.city); // Salem
// // Option 2
// console.log(user.address && user.address.city);
// // Option 3
// console.log(user.address?.city);
// console.log(user['address']['city']);
// console.log(user.address.city);

// console.log(user);
user.email = 'karthickkavin004@gmail.com';
console.log(user);