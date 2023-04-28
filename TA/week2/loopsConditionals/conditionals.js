function heightWeightAge(height, weight, age) {
	console.log(`Your height is ${height}.`);
	let newAge = age * 525949.2;
	console.log(`Your age is ${newAge} seconds.`);
	let newWeight = parseInt(weight * 0.45359237);
	console.log(`Your weight is approx ${newWeight} kilos.`);
}

heightWeightAge("6ft", 165, 20);
