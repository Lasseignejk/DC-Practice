import { useState } from "react";

const SignUp = () => {
	const [signUpForm, setSignUpForm] = useState({});

	const setFormState = (e) => {
		setSignUpForm({
			...signUpForm,
			[e.target.name]: e.target.value,
		});
	};

	const sendForm = async () => {
		const sendFormData = await fetch("www.signupforurl.com", {
			method: "POST",
			body: signUpForm,
		});
	};

	const authenticateForm = () => {
		// username needs to be at least 6 characters long and shorter than 14 characters
		if (signUpForm?.username?.length < 6 || signUpForm.username.length > 14) {
			window.alert(
				"Username needs to be at least 6 characters and shorter than 14"
			);
		}
		// password 1 special character, at least 3 numbers, at least 6 characters
		if (signUpForm?.password?.length < 6) {
			window.alert("Password needs to be at least 6 characters");
		}
		// email needs ONE @ symbol, check if it's a valid email
		if (!signUpForm?.email?.includes("@")) {
			window.alert("Please enter a valid email");
		}
	};

	return (
		<div className="w-full max-w-xs">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username">
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Username"
						name="username"
						onChange={(e) => setFormState(e)}
						value={signUpForm.username}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="joe@dc.com"
						name="email"
						onChange={(e) => setFormState(e)}
						value={signUpForm.email}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						name="password"
						onChange={(e) => setFormState(e)}
						value={signUpForm.password}
					/>
					<p className="text-red-500 text-xs italic">
						Please choose a password.
					</p>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={() => authenticateForm()}>
						Sign In
					</button>
					<a
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#">
						Forgot Password?
					</a>
				</div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2020 Acme Corp. All rights reserved.
			</p>
		</div>
	);
};

export default SignUp;
