import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	multiply,
	divide,
	reset,
} from "../reducers/counterSlice";

const Counter = () => {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Creatin' a Counter</h1>
			<h2>{counter}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(multiply(2))}>x2</button>
			<button onClick={() => dispatch(divide(2))}>/ 2</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
};

export default Counter;
