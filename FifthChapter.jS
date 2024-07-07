// Array in JavaScript
let marks = [91,82,63,72, "Not Present"];
console.log(marks);
console.log(marks[1]);
console.log(marks[4]);
marks[5] = 59; // Adding new value in an array
marks[2] = 93; // Changing existing value in an array 
console.log(marks.length);
console.log(marks);
console.log(typeof marks);

// Array Methods in JavaScript
let num = [1,2,3,4];
toString() //Converts an array to a string
let b = num.toString();
console.log(b);
console.log(typeof b);
console.log(typeof num);

// Join Mthod join array elements with a separator
let c = num.join(" and ");
console.log(c);
console.log(typeof c);

// Pop Metod removes last elemnent of an array, modifies original array
let d = num.pop();
console.log(num); // modifies the original array
console.log(d); // returns popped element

// Push Method adds a new element at the end of an array, modifies original array
let e = num.push(5);
console.log(num); // modifies the original array
console.log(e); // returns added element

// Shift Method removes first element of an array and return it
let f = num.shift();
console.log(num); // modifies the original array
console.log(f); // returns first removed element

// Unshift Method adds a new element at the beginning of an array and returns it
let g = num.unshift(0);
console.log(num); // modifies the original array
console.log(g); // returns new array length

// Delete Operator array elements can be deleted using delete operator
delete num[1]; //Delete element of an array, but its place in the array remains as empty item
console.log(num);

// Concat Method connect two arrays does not change existing array returns a new array
let num2 = [5,6,7,8];
let newNums = num.concat(num2);
console.log(newNums); 

// Sort Method sort array elements in alphabetical order
let num2 = [1,5,3,2,4];
num2.sort(); // Modifies the original array
console.log(num2);

// Compare function sorting Sorting in Ascending and Descending order

const compare = (a,b) => {
    return a - b; // Ascending Order
    return b - a; // Descending Ordder
}
let num2 = [1,5,3,2,4];
num2.sort(compare);
console.log(num2);

// Reverse Method reverse the order of array elements
let num = [1,2,3,4];
num.reverse();
console.log(num);

// Splice Method is used to add new elements in an array
let num = [1,2,3,4];
let i = num.splice(1,2,55,66);
console.log(num); //Modifies the original array
console.log(i); //Returns the removed elements of an array

// Slice Method slices out elements from an array returns a new array
let num = [1,2,3,4];
let j = num.slice(1);
let k = num.slice(1,3);
console.log(num);
console.log(j); //returns a new array
console.log(k); //returns a new array

// Looping through array elements using for loop and other loops
let num = [1,2,3,4];
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}

// forEach loop calls a function for each array element
let num = [1,2,3,4];
num.forEach((element)=>{
    console.log(element);
})

// Array.from used to create an array from another object
let name = "Harry";
let arr = Array.from(name);
console.log(arr);

// for of Loop used to print array elements
let num = [1,2,3,4];
for(let i of num){
    console.log(i);
}

// for in loop used to print keys/index of an array
let num = [1,2,3,4];
for(let i in num){
    console.log(i);
}

// Higher order array methods (Map, Filter and Reduce)

// Map method creates a new array by performing some operations on each array element
let arr = [1,2,3,4];
let a = arr.map((value)=>{
    // (value, index, array)
    console.log(value);
    // console.log(value, index, array);
    return value + 10;
})
console.log(a);
console.log(arr);// Does not change original array

// Filter method filters an array with values that passes a test creates a new array

let arr = [5,8,12,13,14];
let a = arr.filter((value)=>{
    return value < 10;
})
console.log(a);
console.log(arr); //Does not change original array

// Reduce method reduces an array to a single value returns a single value
let arr = [1,2,3,4];
let a = arr.reduce((x,y)=>{
    return x + y;
})
console.log(a);