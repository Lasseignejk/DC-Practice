import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
	reset,
} from "../../reducers/counterSlice";
import { changeUserName } from "../../reducers/userSlice";

const UserSettings = () => {
	const counter = useSelector((state) => state.counter.value);
	const userLoggedIn = useSelector((state) => state.user.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>User Settings</h1>
			<h2> The counter is at: {counter}</h2>
			<button onClick={() => dispatch(increment())}>increase</button>
			<button onClick={() => dispatch(decrement())}>decrease</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>
				increment by 2
			</button>
			<button onClick={() => dispatch(reset())}>reset</button>
			<h2>User that is logged in is: {userLoggedIn.name}</h2>
			<button onClick={() => dispatch(changeUserName())}>
				Change to Veronica
			</button>
		</div>
	);
};

export default UserSettings;
