//defining a string
let name = "tejas"
repoCount = 50
let name2 = new String("tejasparate")

console.log(`Hello my name is ${name2} and my repo count is ${repoCount}`) //modern way to access string variables

let name3 = new String("naman") // using String constructor it becomes an object  so every letter can be accessed like an array
console.log(name3[0]);
//mulitple methods can also be used on this  for eg:
console.log(name3.toUpperCase());//converts to uppercase
console.log(name3.length); //length of the string
console.log(name3.charAt(3));
console.log(name3.indexOf("m"));
console.log(name3.substring(1,3))//ignores negative index
console.log(name3.slice(1,3))// accept -ve as well as   +ve index

let newString = "   tejas   "
console.log(newString.trim())//removes whitespace from both ends of the string

console.log(name3.replace('a' , 'u'))

console.log(name3.split(" "))


