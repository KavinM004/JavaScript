// Function inside the object known as method

// const kavinM = {
//     name : 'Kavin M',
//     dob : '28-06-2002',
//     age : 22,
//     displayDetails : function(){
//         console.log(`Name : ${this.name} ,DOB : ${this.dob}, Age : ${this.age}`);
// }
// }
// kavinM.displayDetails();
// console.log(kavinM);
var age = 67;
const student = {
    age : 25,
    fun1:function(){
        console.log('Fun 1 : ', this.age);
        console.log('Fun 1 : ', this);
        function fun2 (){
            console.log('Fun 2 : ',this.age);
            console.log('Fun 2 : ',this);
        }
        fun2();
    }
}
student.fun1();