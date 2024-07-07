// Object oriented programming in JavaScript
// Prototypes and __proto__

let a = {
    name2: "Harry",
    language: "JavaScript",

    run:()=>{
        console.log("Self Run");
    }
}
console.log(a);

let p = {
    run: ()=>{
        console.log("Run");
    }
}

p.__proto__ = {
    name: "Jackie"
}

a.__proto__ = p;
a.run();
console.log(a.name);

// Classes and Objects in JavaScript

class railwayForm{
    submit(){
        console.log(this.name + " your form has been submitted successfully!, for train no " + this.trainno);
    }
    cancel(){
        console.log(this.name + " your form has been cancelled!, for train no " + this.trainno);
    }
    fill(givenname, trainno){
        this.name = givenname;
        this.trainno = trainno;
    }
}

let harryForm = new railwayForm();
harryForm.fill("Harry",123);

let rohanForm1 = new railwayForm();
rohanForm1.fill("Rohan",456);

let rohanForm2 = new railwayForm();
rohanForm2.fill("Rohan",789);

harryForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();

// Constructors in JavaScript

class railwayForm{
    constructor(givenname, trainno){
        console.log("Constructor Called " + givenname + " " + trainno );
        this.name = givenname;
        this.trainno = trainno;
    }
    submit(){
        console.log(this.name + " your form has been submitted successfully!, for train no " + this.trainno);
    }
    cancel(){
        console.log(this.name + " your form has been cancelled!, for train no " + this.trainno);
    }
    
}

let harryForm = new railwayForm("Harry", 123);
harryForm.fill("Harry",123);

let rohanForm1 = new railwayForm("Rohan", 456);
// rohanForm1.fill("Rohan",456);

let rohanForm2 = new railwayForm("Rohan", 789);
// rohanForm2.fill("Rohan",789);

harryForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();

class railwayForm{
    constructor(givenname, trainno, address){
        console.log("Constructor Called " + givenname + " " + trainno );
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }
    preview(){
        console.log(this.name + " your form for train number " + this.trainno + " and your address is " + this.address);
    }
    submit(){
        console.log(this.name + " your form has been submitted successfully!, for train no " + this.trainno);
    }
    cancel(){
        console.log(this.name + " your form has been cancelled!, for train no " + this.trainno);
        this.trainno = 0;
    }
        
}

let harryForm = new railwayForm("Harry",123,"Pacific Ocean, Street #1, House #1");

harryForm.preview();
harryForm.submit();


// Inheritence and extends keyword in JavaScript

class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is running");
    }
    shout(){
        console.log(this.name + " is shouting");
    }
}

// // Monkey is a Child class and Animal is a Parent class
class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating banana");
    }
    hide(){
        console.log(this.name + " is hiding");
    }
}

let ani = new Animal("Bruno","White");
let mon = new Monkey("Chimpu","Orange");

ani.shout();
// ani.hide(); //shows an error
mon.eatBanana();
mon.hide();


// Method Overriding

class Employee{
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(5);
        console.log("One extra leave granted");
    }
}

let e = new Employee();
e.login();
e.requestLeaves(3);
e.logout();

let p = new Programmer();
p.login();
p.requestCoffee(1);
p.requestLeaves(4);
p.logout();


// Method Overriding with Constructor

class Employee{
    constructor(name){
        this.name = name;
        console.log(`${name} - Constructor for employee`);
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(5);
        console.log("One extra leave granted");
    }
}

let p = new Programmer("Harry");
p.login();
p.requestCoffee(1);
p.requestLeaves(4);
p.logout();



// / // / Prototypes and __proto__ \ \\ \\\

let a = {
    name: "Harry",
    language: "JavaScript",
    run:()=>{
        console.log("Self run")
    }
}
 
console.log(a);

let p = {
    run: ()=>{
        console.log("run");
    } 
}
a.__proto__ = p;
p.__proto__ = {
    name1: "Jackie",
}
console.log(a.name1)
a.run();

/// // / Classes and Objects in JavaScript \ \\ \\\

class RailwayForm {
    submit(){
        console.log(this.name + " your form has been submitted for train no " + this.trainno);
    }
    cancel(){
        console.log(this.name + " your form has been cancelled for train no " + this.trainno);
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}


let harryForm = new RailwayForm
harryForm.fill("Harry", 111);
let rohanForm = new RailwayForm
rohanForm.fill("Rohan", 222);

harryForm.submit();
rohanForm.submit();
rohanForm.cancel();

// Constructors in JavaScript

class RailwayForm {
    constructor(givenname, trainno, address){
        console.log("Constructor called");
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview(){
        console.log(this.name + " your form is for train no " + this.trainno + " and your address is " + this.address);
    }
    submit(){
        console.log(this.name + " your form has been submitted for train no " + this.trainno);
    }
    cancel(){
        console.log(this.name + " your form has been cancelled for train no " + this.trainno);
    }
    
}

// // create and fill form for Harry
let harryForm = new RailwayForm("Harry", 111, 333)

// // create a form for Rohan
let rohanForm = new RailwayForm("Rohan", 222, 333);

harryForm.preview();
harryForm.submit();
rohanForm.submit();
rohanForm.cancel();

// Inheritence and extends keyword in JavaScript

class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running");
    }
    shout(){
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal {
    eatBanana(){
        console.log(this.name + " is eating banana");
    }
}

let ani = new Animal("Bruno", "White");
let m = new Monkey("Chimpu", "Orange");

ani.shout();
ani.eatBanana(); // this will  throw an error
m.shout();
m.eatBanana();

/// // / Method Overriding \ \\ \\\

class Employee {
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    requestCoffees(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One extra leave granted) `)
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
    } // super method
}

let emp = new Employee();
let emp2 = new Programmer();

// emp.login();
// emp.requestLeaves(4);
// emp.logout();

emp2.requestLeaves(4);

/// // / Method Overriding with constructor \ \\ \\\

class Employee {
    constructor(name){
        this.name = name
        console.log(`${name} - Employee's constructor is here`);
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    constructor(name){
        super(name)
        this.name = name
        console.log(`${name} - Programmer's constructor is here`);
    }
    requestCoffees(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    
    // requestLeaves(leaves){
    //    super.requestLeaves(4);
    // } // super method
}

let emp2 = new Programmer("Harry");

emp2.requestCoffees(1);

/// // / Static Method in JavaScript \ \\ \\\

class Animal {
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        console.log("Animal " + (this.name) + " is walking");
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.lenght)
    }
}

let ani = new Animal("jack");

ani.walk();

/// // / Getters and Setters in JavaScript \ \\ \\\

class Animal {
    constructor(name){
        this._name = name 
    }
    fly(){
        console.log("I am flying");
    }
    get name(){
        return this._name
    }
    set name(newName){
        return this._name = newName 
    }
} 

let ani = new Animal("Bruno");
ani.fly();
console.log(ani.name);
ani.name = "Jack"
console.log(ani.name);

let bird = "Parrot";
console.log(ani instanceof Animal);
console.log(bird instanceof Animal); 