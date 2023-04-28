// Write a function that takes two numbers as arguments and returns their sum.
const sumTwoNums = (num1, num2) => {
	return num1 + num2;
};

sumTwoNums(1, 2);

// Write a function that takes a string as an argument and returns the length of the string.
const stringLength = (string) => {
	return string.length;
};

stringLength("cat");

// Write a function that takes an array of numbers as an argument and returns the largest number in the array.
const largestNumber = (arr) => {
	let maximum = 0;
	for (const num of arr) {
		if (num > maximum) {
			maximum = num;
		}
	}
	return maximum;
};
largestNumber([1, 2, 3, 4, 5, 6]);

// Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.
const capitalStrings = (arr) => {
	answer = [];
	for (const string of arr) {
		answer.push(string.toUpperCase());
	}
	return answer;
};

capitalStrings(["apple", "banana", "cherry"]);

// Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.
const evenOdd = (num) => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};
evenOdd(14);

// Write a function that takes two arrays as arguments and returns a new array that contains all the elements from both arrays, in the order they appear.
const combineArrays = (arr1, arr2) => {
	console.log(arr1 + arr2);
};
combineArrays([1, 2, 3], [4, 5, 6]);

// Write a function that takes a string as an argument and returns a new string with all the vowels removed.
function removeVowels(str) {
	console.log(str.replace(/[aeiou]/gi, ""));
}

removeVowels("banana");

// Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.

// Write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.

// Write a function that takes a number as an argument and returns the factorial of that number (i.e., the product of all the numbers from 1 to that number).
