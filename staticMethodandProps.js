// Static Method and Property
    class  Static{
    static myProperty = 'Kavin';
    static myStatic () {
        console.log(`Hi, I am from Static method.`);
    }
};
Static.myStatic();
console.log(Static.myProperty);

// Singleton Pattern
class Database{
    static instance = null;
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }
};

console.log(Database.instance);
const Obj1 = Database.instance;
const Obj2 = Database.instance;
console.log(Obj1 === Obj2); // true

// Constants 
class Colors{
    static RED = '#ff0000';
    static GREEN = '#00ff00';
    static BLUE = '#0000ff';
};
console.log(Colors.RED);