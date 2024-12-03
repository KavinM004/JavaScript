// Object literal notation and Factory function

/*
let student = {
  name: "Kavin M",
  age: 22,
  email: "karthickkavin004@gmail.com",
  address: {
    street: "1/177",
    place: "Olakkachinnanur",
    taluka: "Sankagiri",
    district: "Salem",
    pincode: 637102  },
    about: function(){
        return `${this.name} is from ${this.address.district}`;
    },
    eligiblity: function(){
        return this.age >= 18;
    }
};
console.log(student.eligiblity()); */

// prototype inheritance

/*
const studentMethod = {
    address: {
    street: "1/177",
    place: "Olakkachinnanur",
    taluka: "Sankagiri",
    district: "Salem",
    pincode: 637102  },
    about: function(){
        return `${this.name} is from ${this.address.district}`;
    },
    eligiblity: function(){
        return this.age >= 18;
    }
};

addStudent = (name, age, email ) => {
    const user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = studentMethod.address;
    user.about = studentMethod.about;
    user.eligiblity = studentMethod.eligiblity;
    return user;
};
console.log(addStudent("Karthick M", 22, 'karthickkavin004@gmail.com')); */

const studentMethod = {
  address: {
    street: "1/177",
    place: "Olakkachinnanur",
    taluka: "Sankagiri",
    district: "Salem",
    pincode: 637102,
  },
  about: function () {
    return `${this.name} is from ${this.address.district}`;
  },
  eligiblity: function () {
    return this.age >= 18;
  },
};
addStudent = (name, age, email) => {
  const user = Object.create(studentMethod);
  user.name = name;
  user.age = age;
  user.email = email;
  return user;
};
console.log(addStudent("Karthick M", 22, "karthickkavin004@gmail.com"));