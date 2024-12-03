/* array.reduce (function(accumulator, currentValue, array){
}, initialValues);
accumulator means final value for output. 
*/

// let sum = [1, 2, 3, 4, 5];
// let sub = sum.reduce((accumulator,value) => {
//     return accumulator + value;
// });
// console.log(sub);

// Flattening an array
// let array = [ [1, 2], [3, 4], [5, 6] ];
// let combine = array.reduce((final, value) => final.concat(value));
// console.log(combine);

// let colors = ["Red", "Blue", "Red", "Red", "Blue", "Yellow"];
// let count = colors.reduce((final, value) => {
//   if (final[value]) {
//     final[value]++;
//   } else {
//     final[value] = 1;
//   }
//   return final;
// }, []);
// console.log(count);

// let array = [5, 35, 20, 15, 25, 36, 94];
// let max = array.reduce((final, value) => {
//     return Math.max(final, value);
// });
// console.log(max);

let students = [
    { name: "John", age: 20, city: 'Salem' },
    { name: "Alice", age: 21, city: 'Chennai' },
    { name: "Bob", age: 19, city: 'Chennai' },
];
// let cityWise = students.reduce((final, value) => {
//     if (final[value.city]) {
//         final[value.city].push(value);
//         } else
//         {   
//             final[value.city] = [value];
//             }
//             return final;
// },{});
// console.log(cityWise);

// improved code
// let cityWise = students.reduce((final, value) => {
//   final[value.city] = final[value.city]
//     ? [...final[value.city], value]
//     : [value];
//   return final;
// }, {});
// console.log(cityWise);