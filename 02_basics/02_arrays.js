const marvel_heroes = ["ironman ", "thor", "spiderman"] 
const dc_heroes = ["batman", "superman", "flash"]

//marvel_heroes.push(dc_heroes); // pushes dc_heroes  as a whole array element in marvel heroes
//instead use concat

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);


//also can use spread operator

all_new_heroes = [...dc_heroes, ...marvel_heroes] //concat limits to 2 , spread operator can be used to combine multiple array
console.log(all_new_heroes)


//check if info is array 
console.log(Array.isArray(all_heroes))


//convert into array
console.log(Array.from("tejas"))

console.log(Array.from({name: "tejas"}))