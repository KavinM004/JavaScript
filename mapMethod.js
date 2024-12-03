// let array = [1, 2, 3, 4, 5];
// let eN = array.map((num) => num % 2 === 0);
// console.log(eN);

// const users = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Bob', age: 35 },
// ];

/*let names = users.map( name => name.name);
console.log(names);
let updateArray = users.map(name => {
    return name.age = name.age + 10;
});
console.log(updateArray);*/

const students = [
  { id: 1, name: "Kavin M", age: 22, Email: "karthickkavin004@gmail.com" },
  { id: 2, name: "Karthick M", age: 22, Email: "kavinkarthick004@gmail.com" },
  { id: 3, name: "Sanjay Kumar E", age: 23, Email: "sanjaykumar@gmail.com" },
];
let returns = students.map(function(currentValue, index, array){
    return {
        studentId : currentValue.id,
        studentName : currentValue.name,
        studentAge : currentValue.age,
        studentEmail : currentValue.Email,
        indexPosition : index,
        inArray : array.length
    };
});
console.log(returns);

// Map objects in JS
    const userMap =new Map();

// Add elements to the map, update the value & delete the properties :
    userMap.set('Name', 'Kavin M');
    userMap.set('Age', 22);
    userMap.set('email', 'karthickkavin004@gmail.com');
    userMap.set('City', 'Salem');
    console.log(userMap);
    
    const arr = [
        [ ' Name', ' Kavin M'],
        [ ' Age',  22],
        [ ' Email', ' karthickkavin004@gmail.com'],
    ];

    const newMap = new Map(arr);
    console.log(newMap);

    // Map obj to array
    console.log(Array.from(newMap));

    for (let [key, value] of userMap){
        console.log(`${key} : ${value}`);
    }
    console.log([...newMap]);
    
    // Nan use as a map key also

    let array = 'Jobs kills you you kills family family kills love';
    let words = array.split(' ');
    let mapNew = new Map();
    for(let word of words){
        if(mapNew.has(word)){
            mapNew.set(word, mapNew.get(word) + 1);
        }
        else{
            mapNew.set(word, 1);
        }
    };
    console.log(mapNew);
    

// grouping obj by property :
    const persons = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 25 },
        { name: "David", age: 30 },
        { name: "Eve", age: 30 },
        { name: "Frank", age: 30 },
        { name: "Grace", age: 30 },
        { name: "Hannah", age: 35 },
        { name: "Isaac", age: 35 },
        { name: "Jack", age: 35 },
        { name: "Kathy", age: 40 },
        { name: "Leo", age: 40 },
        { name: "Mona", age: 40 },
        { name: "Nina", age: 22 },
        { name: "Oscar", age: 22 },
        { name: "Paul", age: 22 },
        { name: "Quinn", age: 28 },
        { name: "Rachel", age: 28 },
        { name: "Steve", age: 28 }
    ];

        const peopleByAge = new Map();
        for(let person of persons){
            const age = person.age;
            if(peopleByAge.has(age)){
                peopleByAge.get(age).push(person);
            }else{
                peopleByAge.set(age, [person]);
            }
        };
        console.log(peopleByAge);

  // Frequency counter :
        const numbers = [
          1, 2, 3, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 1, 2, 2, 3, 4,
          5, 6, 6, 7, 8, 9, 10,
        ];
        function frequantNumbers (numbers){
            const map = new Map();
            for(let i=0; i < numbers.length; i++){
                const number = numbers[i];
                map.set(number, (map.get(number) || 0) + 1);
            }
            return map;
        }
        console.log(frequantNumbers(numbers));
        
        
