const str = "A man, a plan, a canal. Panama";
// one liner
// const isPalindrome = (str) => str === str.split("").reverse().join("");
// isPalindrome(str);

// let string = "abbc";

// split breaks a string into an array, reverse reverses an array, join joins it back together

// no(){
//  if(yes) return
//  else
//    no()
// }

// using recursion
// function reverseString(str) {
// 	if (str === "")
// 		// This is the terminal case that will end the recursion
// 		return "";
// 	else return reverseString(str.substr(1)) + str.charAt(0);
// }

// // using no built-in methods
// function reverseString(str) {
// 	let newString = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		newString += str[i];
// 	}
// 	return newString === str;
// }
// reverseString("hello");
