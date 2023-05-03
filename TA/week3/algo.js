string = "aabbccccaa b";

// const howManyLetters = (string) => {
// 	hashmap = {};
// 	for (const letter of string) {
// 		if (letter == " ") {
// 			continue;
// 		} else if (!hashmap[letter]) {
// 			hashmap[letter] = 1;
// 		} else {
// 			hashmap[letter]++;
// 		}
// 	}
// 	console.log(hashmap);
// };

// const howManyLetters = (string) => {
// 	hashmap = {};
// 	for (const letter of string) {
// 		if (letter == " ") {
// 			continue;
// 		} else if (letter in hashmap) {
// 			hashmap[letter]++;
// 		} else {
// 			hashmap[letter] = 1;
// 		}
// 	}
// 	console.log(hashmap);
// };

function findLetters3(string) {
	const hashmap = {};
	for (const letter of string) {
		if (letter in hashmap) {
			hashmap[letter]++;
		} else {
			hashmap[letter] = 1;
		}
	}
	console.log(hashmap);
}

findLetters3(string);
