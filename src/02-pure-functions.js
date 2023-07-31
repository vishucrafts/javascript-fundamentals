var a = 1;


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * Some complicated code
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

a = 2;

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * Some complicated code
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


function add(b) {
	return a + b;
}

console.log(add(2)); // 3


// ************************************************************
// THIS IS A PURE FUNCTION

function pureAdd(a, b) {
	return a + b;
}

// first execution : CPU temp = 21, speed = fast
// second execution : CPU temp = 23, speed = slow

/**
 * 1. Take all inputs explicitly
 * 2. Don't touch anything out of scope
 * 3. No side effects(network, DOM, console, etc)
 * 4. Return a value or a function that operates on step 1 (otherwise it's a procedure)
 * 5. Deterministic (for a given input, will always return the same output)
 * 6. No mutation of parameters
 * 7. No new Date() or Math.random() (they change over time)
 */

/**
 * Example for point 7
 */

function randomAge(age) {
	return Math.random() * age;
}

console.log(randomAge(21)); // 16.73202490394007
console.log(randomAge(21)); // 9.14210488137081

/**
 * Example for point 6
 */
const arr = [1, 2, 3];

function addOne(arr) {
	arr.push(1); // mutation
	return arr;
}

addOne(arr); // [1, 2, 3, 1]
addOne(arr); // [1, 2, 3, 1, 1]

// The good practice, don't mutate the original array
function addOnePure(arr) {
	return arr.concat([1]);
}

addOnePure(arr); // [1, 2, 3, 1]
addOnePure(arr); // [1, 2, 3, 1]

