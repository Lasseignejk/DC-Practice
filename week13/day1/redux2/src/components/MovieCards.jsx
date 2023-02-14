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
		console.log(json);
		dispatch(searchOneMovie(json));
	};
	return (
		<div className="w-[280px]">
			<Link to={"/search/" + movie.Title} onClick={() => apiCall()}>
				<img
					src={movie.Poster}
					alt=""
					className="object-fit w-[280px] h-[400px] rounded-xl border-4 border-transparent drop-shadow-card hover:scale-105 hover:border-4 hover:border-[#f9f9f9] transition-all duration-300 ease-in-out box-border"
				/>
			</Link>
		</div>
	);
};

export default MovieCards;
