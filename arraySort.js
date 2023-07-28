const numArr = [1, 3, 5, 2, 90, 20]

// numArr.sort(function(a, b){
//     return a - b
// })

// numArr.sort(function(a, b){
//     return b - a
// })

// console.log(numArr)

const wordArray = ["dog", "wolf", "by", "family", "eaten"]

// const sort = wordArray.sort(function(a, b){
//     return a.length - b.length;
// })
// sorts by number of letters in ascending order.

// wordArray.sort()
//sorts alphabetically, use "reverse" instead of "sort" gives reverse alphabetical order

console.log(wordArray)

const peopleArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

let byAge = peopleArr.sort((r1, r2)=> (r1.age > r2.age) ? 1: (r1.age<r2.age) ?-1: 0)

console.log(byAge)