// Searching the DOM
// Using id
let para = document.getElementById("para");
para.style.color = "red";

// Using class
// getElementsByClassName return a collection of html elements with same class name, not a single element,
// we can acces them using index.
let paraColor = document.getElementsByClassName("para-color")[0];
paraColor.style.color = "green";
let paraColor1 = document.getElementsByClassName("para-color")[1];
paraColor1.style.color = "green";
let paraColor2 = document.getElementsByClassName("para-color")[2];
paraColor2.style.color = "green";

// Or can be accessed using this way
let paraColor3 = document.getElementsByClassName("para-color");
paraColor3[0].style.color = "green";
paraColor3[1].style.color = "blue";
paraColor3[2].style.color = "red";
paraColor3[3].style.color = "violet";

// Using querySelectorAll
// returns collection of html elements matching given CSS selectors;
let headings = document.querySelectorAll(".headings")[0];
headings.style.backgroundColor = "red";

// Or can be accessed using this way
let headings = document.querySelectorAll(".headings");
headings[0].style.backgroundColor = "red";
headings[1].style.backgroundColor = "green";
headings[2].style.backgroundColor = "blue";

// Using querySelector
// returns single html element matching given css selector

// accessing with id selector
let greetings1 = document.querySelector("#greetings1");
greetings1.style.color = "red";

// // accessing with class selector
let greetings2 = document.querySelector(".greetings2");
greetings2.style.color = "blue";

// using tagName
// returns html elements with the given tag name
let tags = document.getElementsByTagName("h1");
console.log(tags);

// // using name
// // returns html elements with the given name
let name = document.getElementsByName("weather");
console.log(name);

// matches, closest and contains
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1.matches(".box"));
console.log(sp1.closest(".box"));
console.log(id1.contains(sp1));