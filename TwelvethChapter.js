 /// // / Immediately Invoked Functions \ \\ \\\

 let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(456)
        },2000);
    })
 }

 ( async () => {
    let b = await a()
    console.log(b);
    let c = await a()
    console.log(c);
    let d = await a()
    console.log(d); 
 })();

 /// // / Destructuring and Spread Operator in JavaScript \ \\ \\\

 let arr = [1,2,3];
 let [a,b,c] = arr
 let arr = [1,2,3,4,5,6];
 let [a,b,c,d, ...rest] = arr // Now 1 is assigned to a and 2 is assigned to b
//  No need to do this
 let a = arr[0];
 let b = arr[1];

console.log(a,b,c,d,rest);

/// // / Object Destructuring / // ///

 let obj = {a:1, b:2}
 let {a,b} = obj
 console.log(a,b);

 /// // / Spread Operator \ \\ \\\

 let arr1 = [8,9,10]
 let obj1 = {...arr1}
 console.log(obj1);

 function sum (v1,v2,v3) {
    return v1+v2+v3
 }

 console.log(sum(...arr1));

 let obj2 = {
    name: "Harry",
    company: "abc",
    address: "xyz"
 }

 console.log({...obj2});

/// // / Block, Function & Global Scope \ \\ \\\

{
    // let a = 5; // let has block level scope

    const a = 5; // const has block level scope

    // var a = 5; // var has global scope
}
console.log(a);

let y = 10;
function myFunc () {
    let x = 8;
    console.log(x);
    console.log(y);
}
myFunc();
// console.log(x);
console.log(y);

/// // / Hoisting with const let and var in JavaScript \ \\ \\\

console.log(a);
greet();
function greet (){
    console.log("HI, Hello");
}
greet();
var a = 9; //Declarations are hoisted at the top but initializations are not
console.log(a);

/// // / Closures in JavaScript \ \\ \\\



// Arrow Functions Advanced

const sayHello = (name, greet) => console.log(name + " " + greet);

const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
        setTimeout(()=>{
            console.log(`The name is ${this.name}`);
        },2000)
        
    }
}

sayHello("Harry", "Hi, Hello");

console.log(x.name, x.exp);
x.show();