const numArr = [3, 6, 8, 2]

const fiveAndGreater = numArr.filter(function(num){
    if (num > 4){
        return num
    }
})

const evenOnly = numArr.filter(num => num % 2 === 0)

// console.log(fiveAndGreater)
console.log(evenOnly)