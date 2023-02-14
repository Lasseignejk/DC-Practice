import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.push(...action.payload);
		},
		searchMovie: (state, action) => {
			return action.payload;
		},
		searchOneMovie: (state, action) => {
			return action.payload;
		},
	},
});

export const { addMovie, searchMovie, searchOneMovie } = movieSlice.actions;

export default movieSlice.reducer;
