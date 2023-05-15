import React from "react";
import { Link } from "react-router-dom";

const PokemonInfo = ({ pokemon, setSelectedPokemon }) => {
	let monName = pokemon?.name;
	const firstLetter = (monName) => {
		let newName = monName?.charAt(0).toUpperCase() + monName?.slice(1);
		return newName;
	};
	return (
		<div className="pokeNameContainer">
			<Link
				to="/pokeCard"
				onClick={() => setSelectedPokemon(pokemon.url)}
				className="pokeName">
				<h3>{firstLetter(monName)}</h3>
			</Link>
		</div>
	);
};

export default PokemonInfo;
