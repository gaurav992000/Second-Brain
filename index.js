// Check if a number is Positive, Negative or Zero
function checkNumber(num) {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}
console.log(checkNumber(-3)); // Negative




//// Factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]



//5. Find ASCII value of a character
function asciiValue(char) {
    return char.charCodeAt(0);
}
console.log(asciiValue('A')); // 65

//Check if string starts with another string
function startsWith(str, prefix) {
    return str.startsWith(prefix);
}
console.log(startsWith("hello world", "hello")); // true




//Display Current Date and Time
console.log(new Date());

//. Current URL (for browser)
console.log(window.location.href); // works in browser

// Split Array into Chunks
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]


//Compare Elements of Two Arrays
function compareArrays(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(compareArrays([1, 2, 3], [2, 3, 4])); // [2, 3]

    
//Create a 2D Array

function create2D(rows, cols, fill = 0) {
    return Array.from({ length: rows }, () => Array(cols).fill(fill));
}
console.log(create2D(2, 3)); // [[0,0,0],[0,0,0]]


//Merge Two Arrays and Remove Duplicates

function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1,2,3], [3,4,5])); // [1,2,3,4,5]
