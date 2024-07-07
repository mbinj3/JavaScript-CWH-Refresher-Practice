// JavaScript console object
console.log("Hi, Hello");
console.log(console);
console.log("Hi, Herry");
console.error("This is an error");
console.warn("This is a warning");
console.info("This is an info");
console.assert(10>20); //If assertion failed, shows warning, if condition is true does not show any thing

let obj = {a:1, b:2, c:3}
console.table(obj);
console.clear(); 
console.time("forLoop") //process start
for(let i = 0; i <=5; i++){
    console.log(i);
}
console.timeEnd("forLoop")//process end
// Shows the time of completion of for loop

// JavaScript alert, prompt and confirm

alert("Enter the value of a");
let a = prompt("Enter a here");
a = Number.parseInt(a);
let write = confirm("Do you want to write value of a on the page");
if(write){
    document.write("The value of a is : " , a);
}else{
    document.write("Please allow me to write");
}

// Window Object DOM and BOM in JavaScript

// Window is a Global Object

window.console.log(window); //window object
console.log(document); //document object
console.log(document.body); //document body
document.body.style.backgroundColor = "green";

// Walking the DOM
document.head;
document.documentElement;
typeof document.title;
// 'string' always be string
typeof document.body
// // 'object' always be object

// Children of an element
// Document is a parent
console.log(document.firstChild); //DOCTYPE is first children
console.log(document.lastChild); //html is last children
console.log(document.childNodes); // DOCTYPE and html both are children of Document and siblings of each other

console.log(document.body.children[0]); //h1 is the first children of body
console.log(document.body.children[1]); //Script is the second children of body

console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);