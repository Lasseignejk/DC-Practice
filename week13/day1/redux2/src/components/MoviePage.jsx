import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MoviePage = () => {
	const movies = useSelector((state) => state.movies);
	const { movieTitle } = useParams();
	return (
		<div>
			<h2>This is the page for the movie: {movieTitle}</h2>
			<h3>{movies?.Actors}</h3>
		</div>
	);
};

export default MoviePage;
