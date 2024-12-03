// const array = Array.from({ length: 10 }, (_, index) => index * 1);
// let evenNum = array.filter( num => num%2==0 );
// console.log(evenNum);

// let users = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Bob", age: 35 },
//     { id: 4, name: "Alice", age: 20 },
//     { id: 5, name: "Mike", age: 40 }
// ];
// let filtered = users.filter( list => {
//     return list.age >= 30;
// });
// console.log(filtered);

// let word = ['cat', 'dog', 'tiger', 'elephant', 'fish'];
// let filtered = word.filter( list => {
//     return list.length >= 4;
// });
// console.log(filtered);

let items = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Potato", category: "Vegetables" },
  { name: "Orange", category: "Fruits" },
  { name: "Grapes", category: "Fruits" },
  { name: "Tomato", category: "Vegetables" },
  { name: "Cucumber", category: "Vegetables" },
  { name: "Pineapple", category: "Fruits" },
  { name: "Broccoli", category: "Vegetables" },
];

let filtered = items.filter((item) => {
  return item.category === "Fruits";
});
console.log(filtered);
