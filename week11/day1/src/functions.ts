const sayHello = () => {
	console.log("hello");
};

// hover over the function. on the far right, it says 'void.' That's because we aren't returning anything. JS functions by default return 'void,' nothing.
// const convertToUppercase = () => {
// 	console.log("Hello");
// };

// // hover over upperCasedValue. It says 'void.' That's because convertToUppercase returns nothing.
// const upperCasedValue = convertToUppercase();

// This is how to explicitly tell ts what data type the function should be. string, in this case.
// const convertToUppercase = (): string => {
// 	return "hello";
// };

// const upperCasedValue = convertToUppercase();

// But functions also usually have arguments/parameters.
// const convertToUppercase = (wordToUpperCase: string): string => {
// 	console.log(wordToUpperCase);
// 	return "hello";
// };

// const upperCasedValue = convertToUppercase("Hello");

// We can make parameters optional the same way as in the objects example in typescript.ts by using a ?

// const convertToUppercase = (wordToUpperCase: string): string => {
// 	return wordToUpperCase.toUpperCase();
// };

// const upperCasedValue = convertToUppercase("Hello");
// console.log(upperCasedValue);

// using | is a union. This should return a number or a string. Similar to || in regular JS
// const chooseRandomNumber = (number?: number): number | string => {
// 	if (number) return number;
// 	const randomNumber = Math.random();
// 	const stringedNumber = randomNumber.toString();
// 	return stringedNumber;
// };

// console.log(chooseRandomNumber());

// 'type' should only be used for very simple data structures
// interfaces can have the same name
interface FarmAnimal {
	name: string;
}

interface FarmAnimal {
	species: string;
}

const pig: FarmAnimal = {
	name: "Oinker",
	species: "pig",
};

// type Name = {
// 	name: string;
// };

// type Age = {
// 	name: string;
// };

// type Person = Name & Age;

interface Person {
	name: string;
	age: string;
}

const groupOfStudents: Person[] = [];
groupOfStudents.push({ name: "Adam", age: "22" });
console.log(groupOfStudents[0]);

interface BusinessLocations {
	address: string;
	zipcode: string | number;
}

interface UserData {
	id: string | number;
	index: number;
	guid: string;
	isActive: boolean;
	balance: string;
	picture: string;
	latitude: number;
	businessLocations: BusinessLocations[];
}

// this gives us a response
// const userData: Response = await fetch("www.url.com");
// // this gives us json
// const json : UserData = await userData.json();
