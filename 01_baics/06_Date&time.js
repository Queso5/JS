//Dates

let myDate = new Date();
console.log(myDate.toString()); //converts date to string
console.log(myDate.toDateString()); //converts date to date string
console.log(myDate.toLocaleString('en-IN')); //converts date to locale string based on system locale

console.log(typeof(myDate));

//date as a object
let date = new Date(2025, 0  , 1) // January is 0
console.log(date.toString());

let newDate2 = new Date();
console.log(newDate2.getMonth()); //returns months 
console.log(newDate2.getFullYear()); //return year
console.log(newDate2.getDay());