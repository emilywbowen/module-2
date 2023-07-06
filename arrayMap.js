const numArr = [2, 5, 100]

const doubleNumbers = numArr.map(function(num){
    return num * 2
})

const stringNumber = numArr.map(function (num){
    return num.toString()

})

console.log(doubleNumbers)
console.log(stringNumber)

const nameArray = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capitalizeNames = nameArray.map(function(name){
    // const name.toUpperCase()
    const lower = name.toLowerCase()
    return name.charAt(0).toUpperCase()+lower.slice(1)
})

console.log(capitalizeNames)

const peopleArr = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const userName = peopleArr.map(function(user){
    return user.name

})

console.log(userName)