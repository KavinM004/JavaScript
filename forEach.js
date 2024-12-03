// easiest way of adding array element numbers

/* const array = Array.from({length: 10}, (_, index) => index * 1);
 array.forEach(num => console.log(num)); */

//  const kavin = Array.from({length : 10},(_,index) => index + 1);
//  let kar = 0;
//  kavin.forEach(num => {
//     kar += num;
//  });
//  let nivak = kar/kavin.length;
//  console.log(nivak);
 
// let students = [  "Kavin M", "Karthi G", "Dharun M", "Nirmal Kumar M", "Sanjay Kumar M"];
// let letterK = students.filter(word => word.startsWith('K'));
// console.log(letterK);

// const books = [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     publishYear: 1960,
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     publishYear: 1949,
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishYear: 1925,
//   },
//   {
//     title: "Moby Dick",
//     author: "Herman Melville",
//     publishYear: 1851,
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     publishYear: 1813,
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     publishYear: 1951,
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     publishYear: 1937,
//   },
//   {
//     title: "Fahrenheit 451",
//     author: "Ray Bradbury",
//     publishYear: 1953,
//   },
//   {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     publishYear: 1932,
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     publishYear: 1988,
//   },
// ];

// let searchTerm = 'The'.toLowerCase();
// let year = 1932;
// let filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm) || book.publishYear === year);
// console.log(filteredBooks);
 
// const Fruits = [ 'Apple', 'Banana', 'Cucumber', 'Date'];
// Fruits.forEach( furit => console.log(furit));

// const numbers = [1, 2, 3, 4, 5];
// let num = [];
// numbers.forEach(number => {
//     num.push(number *= 2);
// });
// console.log(num);

// const numbers = [1, 2, 3, 4, 5];
// let max = numbers[0];
// numbers.forEach( num => {
//     if (num > max) {
//         max = num;
//     }
// });
// console.log(max);

// const numbers = [1, 2, 3, 4, 5];
// let average = 0;
// numbers.forEach( num => {
//     average += num;
// });
// console.log(average/numbers.length);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach( num => {
//     if(num%2 == 0){
//         console.log(num);
//     }
// });

// Stack la irukura address mathala, heap la irukura value change pannurom
// const students = ['Kavin M', 'Sanjay Kumar E', 'karthi G'];
// students.forEach(list => {
//     console.log(list.toUpperCase());
// });