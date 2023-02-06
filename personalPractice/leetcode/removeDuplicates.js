// Remove duplicates from an array

// const array = [1, 2, 3, 4, 5, 3, 4];

// const removeDuplicates = (array) => {
// 	let numbers = [];
// 	array.forEach((num) => {
// 		if (!numbers.includes(num)) {
// 			numbers.push(num);
// 		}
// 	});
// 	console.log(numbers);
// };

// removeDuplicates(array);

// Translate a phrase into Pig Latin
// input: Learning JavaScript is so much fun
// output: earningLay avaScriptJay siay osay uchmay unfay

string = "Learning JavaScript is so much fun";
const intoPigLatin = (string) => {
	let pigLatin = [];
	array = string.split(" ");
	array.forEach((word) => {
		let firstLetter = word.slice(0, 1);
		word = word.substring(1);
		let newWord = word + firstLetter + "ay";
		pigLatin.push(newWord);
	});
	console.log(pigLatin.join(" "));
};

intoPigLatin(string);

// Medium
// Given two strings a and b check if the strings are both the same length, and if they have repeating characters that they are in the same position
