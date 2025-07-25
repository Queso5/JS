let score = "33"

// console.log(typeof score)


let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))


let value = "22abc"
// console.log(Number(value))
//returns Nan(not a number) because cannot convert string to a number

let value2 = null
// console.log(Number(value2)) //returns 0 because null is converted to 0

let value3 = true
// console.log(Number(value3)) //returns 1 because true is converted to 1 and false is convrted to 0

//1 -> tur  ; 0 -> false 
// " " -> false
// "xyz " -> true



//convert  integer to string 
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)


//primiteive dataypes   (stored in stack memory so original value is not changed  , copy is created )
// 7 types
//String , Number , Boolean , Null , Undefined , Symbol , BIgInt

//Non-primiitive data types (stored in heap memory so original value is changed ,  reference is created)
//Array , objects , functions


