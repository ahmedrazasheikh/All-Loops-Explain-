const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for (const iterator of alphabet) {
    console.log(iterator)
} 
const myHonda = {
    color: "Red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
for (const key in myHonda) {
 console.log(myHonda[key])
 console.log(key)
}

const cars = ["Saab", "Volvo", "BMW"];
cars.forEach((value)=>console.log(value))

const clothing = ['shoes', 'shirts', 'socks', 'sweaters' , 'Ahmed Raza '];
clothing.map((value)=>{
console.log(value)
})

const numbers = [1, 2, 3, 4, 5];
for (const iterator of numbers) {
    console.log(iterator)
}
// Object.keys()
// Object.values()
// Object.entries()
let genders = Object.entries(myHonda);
// console.log(genders)
genders.forEach(element => {
    element.map((value)=>{
console.log(value)
if (typeof value    === "object") {
    console.log(value.cylinders)
    console.log(value.size)
}
    })
});

// Here I am using String Method

const scores = [5, 6, 7];
const scores2 = ["Skills", "Time", "Money "]
const nameofmine = "Ahmed Raza Jafri"
const nameofClient  = {
    name :"Ahmed Raza ",
    class : "First Year"
}
console.log(scores.at(-2))
console.log(scores.at(-1))
console.log(nameofmine.at(-1));
console.log(nameofClient)

// Concat 
const firstname = "Ahmed  "
const lastName =  "Raza "
const fullName =     firstname.concat(lastName)
const fullStack =     scores.concat(scores2)
console.log(fullName);  
console.log(fullStack);  