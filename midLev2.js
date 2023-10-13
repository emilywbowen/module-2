// Challenge 1 - Sorting an Array: Successful

// const numbers = [4, 2, 7, 1, 9, 5];

// numbers.sort(function(a, b){
    // return a - b 
// })
// a is the lowest number, b is the next number. It will return to the next number and iterate until the highest number is sorted. To do decreasing order, I would do b - a instead of a - b. I took the array named "numbers" and told it to sort.
// console.log(numbers)

// Challenge 2 - Mapping an Array

const strings = ['hello', 'world', 'javascript'];

const toUpperCase = strings.map((string) => string.charAt(0).toUpperCase() + string.slice(1));

console.log(toUpperCase)

// I created an array called "strings". Then I constructed "toUpperCase", where the strings are taken at the first character, (0), and turned into an uppercase letter then joined with "slice" from the second character, (1), until the end of the string. I console logged "toUpperCase". I struggled with this because I kept console logging "strings" instead.



// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
   return numbers.filter(number => number % 2 === 0);

}

const numbers = [1, 2, 3, 4, 5, 6, 9 , 10, 14];
const evenNumbers = filterEvenNumbers(numbers);

// const evenNumbers = [];

console.log(evenNumbers);  // Output: [2, 4, 6]