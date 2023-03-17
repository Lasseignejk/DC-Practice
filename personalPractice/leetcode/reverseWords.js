// string = "AlgoExpert is the best!"
// "best! the is AlgoExpert"
// locate the words in the string. how can you find all of the words in the string?
// loop through, left and right counter. left counter starts at index 0, right counter starts at 0.

function reverseWordsInString(string) {
	let answer = [];
	let left = 0;
	// regex for whitespace
	let regex = /\s/g;
	if (string == "") {
		return "";
	} else if (!string.includes(" ")) {
		return string;
	} else {
		for (let index = 0; index < string.length; index++) {
			let right = string[index];
			if (right.match(regex)) {
				let stringSlice = string.slice(left, index + 1);
				answer.unshift(stringSlice);
				left = index;
			}
		}
		console.log(answer.join(""));
	}
}

reverseWordsInString("cat");

// function reverseWordsInString(string) {
// 	let answer = [];
// 	let left = 0;
// 	// regex for whitespace
// 	let regex = /\s/g;
// 	if (!string.includes(" ")) {
// 		console.log(string);
// 	}

// 	// if (string == "") {
// 	// 	return "";
// 	// } else if (!string.includes(" ")) {
// 	// 	return string;
// 	// } else {
// 	// 	for (let index = 0; index < string.length; index++) {
// 	// 		let right = string[index];
// 	// 		if (right.match(regex)) {
// 	// 			let stringSlice = string.slice(left, index + 1);
// 	// 			answer.unshift(stringSlice);
// 	// 			left = index;
// 	// 		}
// 	// 	}
// 	// 	console.log(answer.join(""));
// 	// }
// }

// reverseWordsInString("");
