// Loops in JavaScript
// for Loop , while Loop, do while Loop, for of Loop, for in Loop

// for Loop
for(let i = 0; i <= 10; i++){
    console.log(i+1)
}

let sum = 0;
let n = prompt("Enter the value of n");
for(let i = 0; i <= n; i++){
    sum += i+1;
}
console.log("Sum of first " + n + " natural numbers is " + sum);

// for in Loop
let obj = {
    person1: 20,
    person2: 19,
    person3: 18
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

// for of Loop
for(let b of "Harry"){
    console.log(b);
}

// while Loop
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

let n = prompt("Enter your number");
let i = 0;
while(i <= n){
    console.log(i);
    i++;
}

// do while Loop
let i = 0;
do{
    console.log(i);
    i++;
}
while(i <= 10);

let n = prompt("Enter your number");
let i = 0;
do{
    console.log(i);
    i++;
}
while(i <= n);

// Functions in JavaScript
function hello(){
    console.log("Hi, Hello");
    return "Hey, how are you?"
}
function avgOFNums(x,y){
    return (x + y) / 2;
    // return Math.round((x + y) / 2);
}
const sumOFNums = (x,y) => {
    return x + y;
}
hello();
let greetings = hello();
console.log(greetings);
let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is", avgOFNums(a,b));
console.log("Average of b and c is", avgOFNums(b,c));
console.log("Average of a and c is", avgOFNums(a,c));

console.log("Sum of a and b is", sumOFNums(a,b));