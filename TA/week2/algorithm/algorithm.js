// fizzbuzz without if/else
// from joe

function ternaryBuzz() {
	for (let i = 1; i < 100; i++) {
		const isFizz = i % 3 === 0;
		const isBuzz = i % 5 === 0;
		console.log(isFizz ? (isBuzz ? "FizzBuzz" : "Fizz") : isBuzz ? "Buzz" : i);
	}
}
