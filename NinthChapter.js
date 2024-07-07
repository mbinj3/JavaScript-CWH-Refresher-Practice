// Synchronous Programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your fav color?");
console.log("My name is " + a + ", my age is " + b + " and my fav color is " + c);

// Asyncronous Programming
console.log("start");
setTimeout(function(){
    console.log("Middle");
},2000)
console.log("end");

// Callback functions and error handling in callback functions
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Script loaded with src ", src);
        callback(null, src);
    }
    // error handling
    script.onerror = function(){
        console.log("Error while loading script with src ", src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
    }else{
    console.log("Hello World " + src);
    }
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);


// Promises in JavaScript (used for parallel execution)

// Promise of code execution, promise is resolved if the code is executed, promise is rejected if the code is failed 

// resolve and reject in promise, two callbacks provided by JavaScript

// resolve(value) if the promise is fulfilled
// reject(error) if the promise is not fulfilled

// properties
// state and result

let promise = new Promise(function(resolve, reject){
    console.log("Hello");
    resolve(56);
})
console.log(promise);

// .then() and .catch() in promises

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am a promise and I am resolved");
        resolve(true);
    },2000);
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected");
        reject(new Error("I am an error"));
    },2000);
})

p1.then((value)=>{
    console.log(value);
});

p2.catch((error)=>{
    console.log(error);
});

p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})

p2.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})

p1.then((value)=>{
    console.log(value);
},((error)=>{
    console.log(error);
}));

p2.then((value)=>{
    console.log(value);
},((error)=>{
    console.log(error);
}))

// Promise Chaining
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise resolved");
        resolve(56);
    },2000);
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 2 resolved");
        },4000);
    });
    return p2
}).then((value)=>{
    console.log(value);
    console.log("We are done");
})

// Attahing multiple handlers to a promise

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Promise resolved");
        resolve(56);
    },2000);
})

p1.then((value)=>{
    console.log(" Congratulations promise resolved with value ", value);
});

p1.then((value)=>{
    console.log("Hurray");
})

// Pending The Promise API


// async await in JavaScript

// function can be made async by using async keyword
// async function always returns a promise

// await
// works only inside async functions
// makes JavaScript wait until promise settles and returns its value

async function harry(){

    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("25 Deg");
        },2000);
    });

    let bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg");
        },5000);
    });

    console.log("Fetching delhi weather please wait");
    let delhiW = await delhiWeather;
    console.log("Delhi weather fetched");

    console.log("Fetching banglore weather please wait");
    let bangloreW = await bangloreWeather;
    console.log("Banglore weather fetched");

    return [delhiW, bangloreW];
    
}

const cherry = async () =>{
    console.log("Hey, I am cherry and I am waiting")
}

console.log("Welcome to weather control room");

const cwh = async () => {

    let a = await harry();
    let b = await cherry();
    
};

cwh();


// try and catch
// error handling using try and catch

setTimeout(()=>{
    console.log("Hacking... Wifi ... please wait");
},1000);

try{
    console.log(Rahul);
}
catch(error){
    console.log("Error occured due to ", error);
}

setTimeout(()=>{
    console.log("Hacking... Rahul's ... Faceebook id");
},2000);

setTimeout(()=>{
    console.log("Fething... Username and password ... please wait");
},3000);

setTimeout(()=>{
    console.log("Username and password of... Rahul ... Fetched ... Successfuly");
},4000);


// The Error Object and Custom Errors

try{
    // harry;
    throw new Error("Harry is not good"); //method to throw custom error
    // throw new ReferenceError("Harry is not good"); //method to throw custom error
}
catch(error){
    console.log(error); //shows full error
    console.log(error.name); //name of error
    console.log(error.message); //message of error
    console.log(error.stack);
}

// try, catch and finally

try{
    // console.log("Hey");
    harry;
}
catch(error){
    console.log(error);
}
finally{
    console.log("Harry is a good boy");
}