import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchMovie, reset } from "../reducers/movieSlice";
import MovieCards from "./MovieCards";

const SearchMovies = () => {
	// const [movieToAdd, setMovieToAdd] = useState("");
	const movies = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	const [movieToSearch, setMovieToSearch] = useState("");

	useEffect(() => {
		dispatch(reset());
	}, []);

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
			<div className="bg-[#3B3D47] flex justify-between items-center sticky top-20 z-20">
				<input
					className="w-full h-28 bg-[#3b3d47] text-5xl text-white pl-14 font-bold focus:outline-none"
					type="text"
					autoFocus
					placeholder="Search by title"
					onChange={(e) => setMovieToSearch(e.target.value)}
				/>
				<button
					className="w-[200px] text-2xl text-white"
					onClick={() => apiCall()}>
					Search Movies
				</button>
			</div>
			<div className="flex gap-5 flex-wrap justify-center my-5">
				{/* {movies?.length !== 0 ? (
					movies?.map((movie) => <MovieCards movie={movie} />)
				) : (
					<p>Search for a movie!</p>
				)} */}
				{movies?.map((movie) => (
					<MovieCards movie={movie} />
				))}
			</div>
			{/* h-[calc(100%-17rem)] */}
		</div>
	);
};

export default SearchMovies;
