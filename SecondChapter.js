// Operators in JS
// Arrithmatic Operators

let a = 45;
let b = 4;
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b);
console.log("a++ =", a++);
console.log("++a =", ++a);
console.log("b-- =", b--);
console.log("--b =", --b);

// Assignment Operators in JS
let c = 1;
c += 5 //Same as c = c + 5
console.log(c);
let d = 5;
d -= 2; //Same as d = d - 2
console.log(d);
let e = 6;
e *= 2; //Same as e = e * 2
console.log(e);

// Comparison operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 != comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is", comp1 !== comp2);
console.log("comp1 > comp2 is", comp1 > comp2);
console.log("comp1 < comp2 is", comp1 < comp2);

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!true);
console.log(!false);

// Conditional Expressions
// if statement, if else statement, if else if else statement

let age = prompt("What is your age");
age = Number.parseInt(age); //Converting string into a number

if(age > 0){
    alert("This is a valid age");
}

if(age > 0){
    alert("This a valid age");
}
else{
    alert("This is not a valid age");
}

if(age < 0){
    alert("This is an invalid age");
}
else if(age > 0 && age < 18){
    alert("You are a kid, connot even think of driving");
}
else if(age > 18 && age <= 50 ){
    alert("You can drive");
}
else{
    alert("You cannot drive because of over age");
}

// Switch Case statements
let age = prompt("What is your age?");

switch(age){
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    case '14':
        console.log("Your age is 14");
        break; 
    case '15':
        console.log("Your age is 15");
        break;    
    default:
        console.log("Your age is special");          
}

let age = 17;
let a = age > 18 ? "You can drive" : "You can't drive";
console.log(a);