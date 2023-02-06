// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
// data types must be in the order you declare them in
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][];

employee = [
	[1, "Brad"],
	[2, "John"],
	[3, "Jill"],
];

// Unions -- I want this variable to be either a string OR a number
let pid: string | number = 22;

// Enum -- allow a developer to define a set of named constants.
enum Direction1 {
	Up,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

// Returns 0
console.log(Direction1.Up);

// Objects
// const user: {
// 	id: number;
// 	name: string;
// } = {
// 	id: 1,
// 	name: "John",
// };

// ^ Looks messy, so instead we can use a 'type'
type User = {
	id: number;
	name: string;
};

const user: User = {
	id: 1,
	name: "John",
};

// Type Assertion -- override the type you declare the variable to be
let cid: any = 1;
// method 1: <>
// let customerId = <string>cid
// method 2: as
let customerId = cid as number;

// Functions
// x and y should be numbers, but the return should also be a number. that's what the third number is stating, the one after the parenthesis
function addNum(x: number, y: number): number {
	return x + y;
}

// void
// void is used when there is no data. for example, if a function does not return any value then you can specify void as the return type
function log(message: string | number): void {
	console.log(message);
}

// Interfaces
// Add a ? to mark a property as optional.
// You can also set a property to readonly, which means you can't update it later. If someone accesses user1 and tries to set the id to 5, it'll throw an error because it is a readonly property.
interface UserInterface {
	readonly id: number;
	name: string;
	age?: number;
}

const user1: UserInterface = {
	id: 1,
	name: "John",
};

// Types can be used with unions and primitives. Interfaces cannot.
// type Point = number | string   OK!
// interface Point number | string  NOPE!

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

// Classes
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

// can attach private or protected to variables like 'readonly' up above. if you try to access a variable and change it outside of the class, it'll throw an error

// Extending a class; making a subclass
class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics -- reusable code? 'T' is a generic, like a placeholder. We don't really want to define types in the parameters, but we do want to in the arrays we pass in.
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

strArray.push("hello");
