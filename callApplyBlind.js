function kavin(){
    console.log(this);
}
// kavin();
// console.log(kavin.toString());
kavin.call();

function welcome  (){
    console.log('Welcome : ' + this.user_name);
};

const student = { user_name : 'Kavin M'};
welcome.call(student);

// In apply multiple parameters can pass in single array :
function totalMarks(tamil, english, science, social, maths){
    console.log(this.user_name + ' got a total of' +' '+ ( tamil + english + science + social + maths)+' ' + 'out of 500');
}
let marks = [81, 80, 70, 93, 97];
totalMarks.apply(student, marks);

// In bind, we can bind the function to variable for later usage :
const multi = totalMarks.bind(student, 65, 85, 75, 85, 91);
multi();

const person = {
    firstName : 'Kavin',
    lastName : 'M',
    getFullName : function(){
        return this.firstName + ' ' + this.lastName;
        },
};
console.log(person.getFullName());

const anotherPerson = {
    firstName : 'Karthick',
    lastName : 'M',
}

console.log(person.getFullName.apply(anotherPerson))