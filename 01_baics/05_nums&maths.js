// js explicitly defines the type of a variable based on the assinged value
const score = 100; // number

//an object in js can be defined using data types like string, number, boolean, etc.

const balance = new Number(1000); //object

console.log(balance); 

//can use different methods on the object
console.log(balance.toString().length); //converts to string + string methods 

console.log(balance.toFixed(2)); //formats number to 2 decimal places


console.log(balance.toLocaleString()); //add commas to the bumber bydefault based on US locale  
//'en-IN' for indian locale

//Math methods
console.log(Math);
console.log(Math.abs(-10)); // converts to positive number (absolute value)

console.log(Math.round(4.5)); //rounds to nearest integer

// round has 2 methods ceil value and floor value 
//.ceil() chooses the next highest integer
// .floor() chooses the  lowest integer 
//sqrt 
//power
//min , max 

//Math.random() // generates randon number between 0 to 1
//console.log(Math.floor(Math.random() * 100)); // generates random number between 0 to 100