import React from "react";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const PokemonHomePage = ({ pokemonData, setSelectedPokemon }) => {
	return (
		<div className="pokeContainer">
			{pokemonData.map((pokemon) => (
				<PokemonInfo
					pokemon={pokemon}
					setSelectedPokemon={setSelectedPokemon}
				/>
			))}
		</div>
	);
};

export default PokemonHomePage;
