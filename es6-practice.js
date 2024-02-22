// let and const - correct

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// Task 1 - Correct
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => {
//         return carrots.length;
//     })
// };


// Task 2 - Correct

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }

// Task 3 - correct

// function doMathSum(a, b) {
//     return a + b
// }

// const produceProduct = (a, b) => {
//     return a * b
// }
// // Hi


// Task 4 - NOT COMPLETE - MUST FINISH!

// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"lastName should default to "Doe"age should default to 100

const firstName = "Jane"
const lastName = "Doe"
const age = 100

function printString (){
    let firstName = "Kat";
    let lastName = "Stark";
    let age = 40;

return printString
}

console.log('Hi ${firstName} ${lastName}, how does it feel to be ${age}?');
