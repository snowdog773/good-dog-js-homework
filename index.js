// 0. Include this script file into an html document (or run with node)

// 1. Create a constant named "x" with a number value of your choosing:

const X = 5;

// 2. Declare a variable named "y" (hint: no value)

let y = null;

// 3. Assign a number value of your choosing to "y":

y = 5;

// 4. Create an object and store it in a constant named "dog" with the following keys and values:

const DOG = {
		name : "Rex",
		age	: 4,
		trick : "The Roll Over",
		goodBoy : true,
};

// 5. Complete a function which adds two inputs together:

function add(a, b) {
	return a + b;
}

// 6. Complete a function which compares if the first input is less than the second input

function isLessThan(a, b) {
    if ( a < b )
        return true;
    else
        return false;
}

// 7. Call the "add" function, pass in "x" & "y", and store its return value into a new variable named "z":

let z = add(X, y);


// 8. Complete the following code to send data to the browser console.
//		(hint: template strings!)
/*
		- replace z with the value in the variable z
		- replace x with the value in the variable x
		- replace y with the value in the variable y
​
*/
console.log(`The number ${z} is the sum of ${X} and ${y}.`);

// 9. Send to the console the following message:

console.log(`Our dog ${DOG.name} is ${DOG.age} years old. He can do ${DOG.trick}`);

// 	Use a template string and insert the values from our
// 	"dog" object where needed.


// 10. Complete the following function:
function displayIsGood() {
	if (DOG.goodBoy === true)
		console.log(`Yes, ${DOG.name} is a good boy!`);
	else
		console.log(`No, sadly ${DOG.name} is evil :(`);
}

