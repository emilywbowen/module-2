// Challenge 1: Sort Array with Preserved Index for -1 Values
// ou are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

// const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// const arr = [5, 3, 1]
// const arr = [-1, -1, -1, -1]
// const arr = [100, -1, 50, -1, 75]
// arr.sort(function solution(a, b){
//    return (a - b);
// })

// console.log(arr)
// I want to make the function have .sort where a - b.... 
// My solution requires lines 9, 10, 11, and 12 to be uncommented one at a time to work -or- for the array to be updated with new values. IDK if there's a better solution.
// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))



// Challenge 2: Count Vowels
// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const input1 = "Hello, World!";
// output: 3
const input2 = "Counting Vowels"; 
// output: 5

function countVowels(str){
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of str){
        if (vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount
}

// for this solution, I gave separate inputs. the function first sets a counter to 0. Then it looks for the designated characters, which is called "vowels" in the function. Every time it loops over the string, it adds one to to count and then returns the number. To test, I added my own string in the console log.

console.log(countVowels(input1))
console.log(countVowels(input2))
console.log(countVowels("input whatever sentence you'd like here"))