console.log("connected");
async function getPokemon() {
	const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
	const json = await pokemon.json();
	console.log(json.results);
	const body = document.querySelector("body");
	for (const poke of json.results) {
		const name = document.createElement("h1");
		name.innerHTML = poke.name;
		body.append(name);
		const onePoke = await fetch(poke.url);
		const pokeJson = await onePoke.json();
		console.log(pokeJson);
	}
}
getPokemon();
