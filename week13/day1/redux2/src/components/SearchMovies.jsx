import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMovie, searchMovie } from "../reducers/movieSlice";
import MovieCards from "./MovieCards";

const SearchMovies = () => {
	// const [movieToAdd, setMovieToAdd] = useState("");
	const movies = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	const [movieToSearch, setMovieToSearch] = useState("");

	const apiCall = async () => {
		const url = import.meta.env.VITE_URL_SEARCH_ALL + movieToSearch;
		const rawData = await fetch(url);
		const json = await rawData.json();

		console.log(json.Search);
		// dispatch is storing the movie we searched for in state. using the useSelector above,
		dispatch(searchMovie(json.Search));
	};

	return (
		<div className="flex-col">
			<div className="bg-slate-600 flex justify-between items-center">
				<input
					className="w-full h-24 bg-slate-600 text-5xl text-white pl-6"
					type="text"
					onChange={(e) => setMovieToSearch(e.target.value)}
				/>
				<button
					className="w-[200px] text-2xl text-white"
					onClick={() => apiCall()}>
					Search Movies
				</button>
			</div>
			<div className="flex gap-5 flex-wrap justify-center my-5">
				{movies?.length !== 0 ? (
					movies?.map((movie) => <MovieCards movie={movie} />)
				) : (
					<p>Search for a movie!</p>
				)}
			</div>
			{/* {movies.map((movie) => (
				<p>{movie?.Title}</p>
			))} */}
			{/* old stuff */}
			{/* {movies.length !== 0 ? (
				movies.map((movie) => <p>{movie?.name}</p>)
			) : (
				<p>Search for a movie!</p>
			)} */}
			{/* <button onClick={() => dispatch(addMovie({ name: movieToAdd }))}>
				Add Movie
			</button> */}
			{/* {movies.length !== 0 ? (
				movies.map((movie) => <p>{movie?.Title}</p>)
			) : (
				<p>Search for a movie!</p>
			)} */}
		</div>
	);
};

export default SearchMovies;
