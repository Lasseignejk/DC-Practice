import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchOneMovie } from "../reducers/movieSlice";

const MovieCards = ({ movie }) => {
	const dispatch = useDispatch();
	const apiCall = async () => {
		const url = import.meta.env.VITE_URL_SEARCH_ONE + movie.Title;
		const rawData = await fetch(url);
		const json = await rawData.json();

		// dispatch is storing the movie we searched for in state. using the useSelector above,
		dispatch(searchOneMovie(json));
	};
	return (
		<div className="w-[280px]">
			<Link to={"/search/" + movie.Title} onClick={() => apiCall()}>
				<img
					src={movie.Poster}
					alt=""
					className="object-fit w-[280px] h-[400px] rounded-md drop-shadow-card"
				/>
			</Link>
		</div>
	);
};

export default MovieCards;
