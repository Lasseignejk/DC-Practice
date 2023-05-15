// implicit type. I didn't specify that it is a string, but you can assume it is because i wrote "Joe" afterwards.
let firstName = "Joe";
let age = 22;
let address = { street: "123 main" };

// Now we get an error. It says that firstName has to be a string because that's how we originally assigned it. In regular JS, we can totally change the data types, but not in TS.
// firstName = 22;

const height = "7ft";
// height.
// If you type in 'height.', then intelliscense will bring up all the built-in methods that work on strings because that's what you told it that height was. Very useful!

// explicit type
let teacher: string = "Joe";
let cool: boolean = false;
const skills: string[] = ["Cooking", "Coding", "Judging"];
// skills.push(9);
// error! 9 is a number, but you told TS that this array is only for strings.
const numbers: number[] = [1, 2, 3, 4, 5];
// interface
// interface names use 'Pascal casing,' where the first letter is capitalized.
interface Student {
	name: string;
	city: string;
	zipcode?: string;
}
// Once we tie Maruo and the interface Student together, it'll tell us we need the attributes name and city.
const Maruo: Student = {
	name: "Maruo",
	city: "Atlanta",
};
// Let's add an optional value to the interface. To do that, we put a ? after the key, like in zipcode above.
const Corey: Student = {
	name: "Corey",
	city: "Atlanta",
	zipcode: "33333",
};
// If you type in 'Corey.', intelisence will pull up all the keys that are available.
// console.log(Corey.city)
