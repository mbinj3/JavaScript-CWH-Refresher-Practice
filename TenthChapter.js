// Fetch API
// used to get data over the network
// always returns a promise
// GET request

// Getting a response is a two stage process
// 1 

let p = fetch("https://goweather.herokuapp.com/weather/Pak");
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((response)=>{
    console.log(response);
})

