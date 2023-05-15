import "./App.css";
import { Route, Routes } from "react-router-dom";
import PokemonHomePage from "./components/PokemonHomePage/PokemonHomePage";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import { pokemonData } from "./components/pokemonData";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [pokemon, setPokemon] = useState(pokemonData);
	// selectedPokemon takes the value of setSelectedPokemon, where we call setSelectedPokemon and update the value. The DEFAULT VALUE is an empty object which is set by useState
	const [selectedPokemon, setSelectedPokemon] = useState({});
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<PokemonHomePage
							pokemonData={pokemon}
							// pass the setSelectedPokemon to the homepage as a prop so we can use it there
							setSelectedPokemon={setSelectedPokemon}
						/>
					}
				/>
				<Route
					path="/pokeCard"
					element={<PokemonCard selectedPokemon={selectedPokemon} />}
				/>
			</Routes>
		</>
	);
}

export default App;
