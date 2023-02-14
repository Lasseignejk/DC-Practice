import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import movieReducer from "./reducers/movieSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		movies: movieReducer,
	},
});
