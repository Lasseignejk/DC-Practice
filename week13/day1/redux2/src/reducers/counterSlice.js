import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		multiply: (state, action) => {
			state.value *= action.payload;
		},
		divide: (state, action) => {
			state.value /= action.payload;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { increment, decrement, multiply, reset, divide } =
	counterSlice.actions;

export default counterSlice.reducer;
