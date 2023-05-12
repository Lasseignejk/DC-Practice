const scrabbleTiles = {
	a: 1,
	b: 3,
	c: 3,
	d: 2,
	e: 1,
	f: 4,
	g: 2,
	h: 4,
	i: 1,
	j: 8,
	k: 5,
	l: 1,
	m: 3,
	n: 1,
	o: 1,
	p: 3,
	q: 10,
	r: 1,
	s: 1,
	t: 1,
	u: 1,
	v: 4,
	w: 4,
	x: 8,
	y: 4,
	z: 10,
};

const tiles = "actss"
const word = "cat"

const scrabbleFunction = (tiles, word) => {

	// [x] make the tiles into an object, where each letter is a key and the value is the number of times it appears
	let totalPoints = 0;
	let tileObj = {};
	for (const letter of tiles) {
		if (letter in tileObj) {
			tileObj[letter] += 1;
		} else {
			tileObj[letter] = 1;
		}
	}
	// loop through the word
  // check each letter against the tilesObj.
	for (const letter of word) {
		if (letter in tileObj) {
			// check scrabbleTiles and get the value for that letter
			// add that value to totalPoints
			totalPoints += scrabbleTiles[letter];
			// subract one from the tileObj for that key
			tileObj[letter] -= 1;
		}
	}
	return totalPoints;
}

console.log(scrabbleFunction(tiles, "cat"),5)
console.log(scrabbleFunction(tiles, "_tmoa"),2)
console.log(scrabbleFunction(tiles, "sass"),4)