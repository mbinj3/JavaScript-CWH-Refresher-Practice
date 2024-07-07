// difference between console.log and console.dir

let tag = document.getElementsByTagName("h1");
console.log(tag);
console.dir(tag);

// innerHTML 
// we can change inner html of any html element
// valid for element nodes only
let text1 = document.getElementById("greetings1");
console.log(text1);
text1.innerHTML = "Hey, how are you";

// outerHTML
// we can change inner as well as outer html of any html element
let text2 = document.getElementById("greetings2");
console.log(text2);
text2.outerHTML = "<div>What about you</div>"

// text content
// it will give all the text of the html page
console.log(document.body.textContent);

// html attributes

// getAttribute
// used to get value of an attribute 
let a = document.getElementById("greet").getAttribute("class");
console.log(a);

// hasAttribute
// used to check existence of an attribute
let a = document.getElementById("greet").hasAttribute("class"); // returns true
console.log(a);

// setAttribute
// used to set value of an attribute
let a = document.getElementById("greet").setAttribute("hidden", "true"); //hides the element

// removeAttribute
// used to remove value of an attribute
let a = document.getElementById("greet").removeAttribute("class"); // remove class attribute

// attributes
// used to get collection of all the attributes of an element
let a = document.getElementById("greet").attributes; // givess all the attributes
console.log(a);

// className and classList in JavaScript

// className
// used to change className of an HTML element
let colorPara = document.getElementById("color");
colorPara.className = "bg-green"; 

// classList
// add
// used to add class to an html element
let colorPara = document.getElementById("color");
colorPara.classList.add("bg-blue");

// remove
// used to remove class from an html element
let colorPara = document.getElementById("color");
colorPara.classList.remove("bg-red");

// toggle
// used to add the class to an html element if class does not exist, other wise remove it from the element 
let colorPara = document.getElementById("color");
colorPara.classList.toggle("bg-red");

// contains
// used to check for the given class exists or not, returns true or false
let colorPara = document.getElementById("color");
console.log(colorPara.classList.contains("bg-red"));


// setTimeout and setInterval in JavaScript

// setTimeout
// allows to run a function once, after the given interval of time

alert("Hi, Hello");

let a = setTimeout(()=>{
    alert("Hey, how are you?");
},2000); // delay in ms

clearTimeout(a); // used to cancel the execution
console.log(a);

// setInterval
// allows to run a function repetitively, between the given interval of time

alert("Hi, Hello");

let a = setInterval(()=>{
    alert("Hey, how are you");
},2000) // interval in seconds

clearInterval(a); // used to cancel the execution
console.log(a);

// Browser events
// Events can also be handle throught onClick property
// elem.onclick

let a = document.getElementById("generate");
a.onclick = () =>{
    let b = document.getElementById("generate");
    b.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt labore quis vero tempora nemo minus cupiditate eligendi nisi aliquid soluta amet aliquam veniam, velit sunt dolorum fugiat? Obcaecati, expedita."
}

// handling browser events

// addEventListener
// used to assign multiple handlers to an event

let x = function(e){
    alert("Hello World1");
    console.log(e);
    console.log(e.target); 
    console.log(e.target.value);
}
let y = function(){
    console.log("Hello World2");
}

let btn = document.getElementById("messages");
btn.addEventListener('click', x);
btn.addEventListener('click', y);

// removeEventListener
// used to remove handler from an event
btn.removeEventListener('click', y);

// the event object
console.log(e); // shows the event object
console.log(e.target); // shows the target
console.log(e.target.value); // shows the target value

console.log(e.type) // shows the event type
console.log(e.currentTarget) //shows the element that handled the event