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
			return [action.payload];
		},
		reset: (state, action) => {
			return initialState;
		},
	},
});

export const { addMovie, searchMovie, searchOneMovie, reset } =
	movieSlice.actions;

export default movieSlice.reducer;
