//defining an array 

let arr = [1 ,2, "tejas", true , null]; //collection of different data types


//array object
const arr2 = new Array(1 , 2 , 3, 4, 5); 

//array methods

arr.push(6);
console.log(arr) //add element int he array
arr.pop() //removes the last element of the array
console.log(arr)

arr.unshift(7)
console.log(arr) //adds the element to the start of the array // heavy if arrays is big
arr.shift(); //removes the first element of the array

console.log(arr)
const newArr = arr.join(); // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr);
console.log(newArr);

arr.slice(1, 3); // Returns a copy of a section of an array. For both start and end
arr.splice(1, 3)//Removes elements from an array //orginal array




