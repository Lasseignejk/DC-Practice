import { useState } from "react";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSmile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@supabase/supabase-js";

const ContactForm = () => {
	const apiKey = import.meta.env.VITE_API_KEY;

	const url = import.meta.env.VITE_URL;

	const supabase = createClient(url, apiKey);

	async function postContactForm(signUpForm) {
		console.log(signUpForm);
		const { data, error } = await supabase
			.from("reactUserData2")
			.insert([signUpForm]);
		console.log(data);
		console.log(error);
	}

	const [signUpForm, setSignUpForm] = useState({});

	const setFormState = (e) => {
		setSignUpForm({
			...signUpForm,
			[e.target.name]: e.target.value,
		});
	};

	const checkZip = (zip) => {
		// const result = /[0-9]+/.test(zip);
		return zip?.match(/^[0-9]*$/);
	};

	const zipAlert = () =>
		toast.error(
			"Please enter a valid zipcode. A valid zipcode has only 5 numbers and no letters.",
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);

	const usernameAlert = () =>
		toast.error(
			"Usernames must be more than six characters and less than 14.",
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);

	const ethnicityAlert = () =>
		toast.error("Please type your ethnicity.", {
			position: toast.POSITION.TOP_CENTER,
		});

	const veteranAlert = () =>
		toast.error("Please select an age group from the drop-down menu.", {
			position: toast.POSITION.TOP_CENTER,
		});

	const authenticateForm = () => {
		// FIRST AND LAST NAME, ADDRESS, CITY, STATE, VETERAN, ETHNICITY ARE REQUIRED
		if (signUpForm?.username?.length < 6 || signUpForm?.username?.length > 14) {
			usernameAlert();
		}

		checkZip(signUpForm?.zip);
		// zip code needs to be exactly 5 numbers and contain no letters or special characters
		if (
			signUpForm?.zip?.length < 5 ||
			signUpForm?.zip?.length > 5 ||
			checkZip(signUpForm?.zip) === null
		) {
			zipAlert();
			// window.alert(
			// 	"Please enter a valid zipcode. A valid zipcode has only 5 numbers and no letters."
			// );
		}

		if (!("veteran" in signUpForm)) {
			veteranAlert();
		}

		if (!("ethnicity" in signUpForm)) {
			ethnicityAlert();
		}

		postContactForm(signUpForm);
	};

	return (
		<div className="bg-[#d44d78] flex justify-center items-center h-screen w-screen">
			<div className="grid place-items-center my-4 drop-shadow-2xl md:max-w-[1000px]">
				<form className="bg-gradient-to-b from-[#0a1131] to-[#272D5D] drop-shadow-2xl px-8 pt-6 pb-8 mb-4 w-4/5">
					<ToastContainer />
					<h1 className="text-white text-3xl text-center mb-2">CONTACT FORM</h1>
					<p className="text-white text-center mb-10 text-sm font-light">
						Fields marked with an asterisk are required.
					</p>
					{/* USERNAME -- REQUIRED */}
					<div className="mb-8 flex border-b-2 border-[#264370] items-center justify-center flex-col md:flex-row md:justify-start md:ml-10">
						<label
							className="block text-[#d44d78] text-lg mb-2 pr-2"
							htmlFor="username">
							<FontAwesomeIcon icon={faSmile} />
						</label>
						<input
							className="w-full py-2 px-3 mr-3 text-center text-sm bg-transparent text-white md:text-lg md:text-start md:py-3 md:px-3"
							id="username"
							type="text"
							placeholder="Enter Your Username"
							name="username"
							onChange={(e) => setFormState(e)}
							value={signUpForm.username ? signUpForm.username : ""}
						/>
					</div>
					{/* FIRST NAME LAST NAME */}
					<div className="mb-4 flex border-b-2 border-[#264370] items-center justify-center md:justify-start md:ml-10">
						<div className="flex items-center flex-col md:flex-row">
							<label
								className="block text-[#d44d78] text-lg md:mb-2 pr-2"
								htmlFor="firstName">
								<FontAwesomeIcon icon={faUser} />
							</label>
							<input
								className="w-full py-2 px-3 mr-3 text-center text-sm bg-transparent text-white md:text-lg md:text-start md:py-3 md:px-3"
								id="firstName"
								type="text"
								placeholder="Enter Your First Name*"
								name="firstName"
								onChange={(e) => setFormState(e)}
								value={signUpForm.firstName ? signUpForm.firstName : ""}
							/>
							<input
								className="w-full py-3 px-3 mr-3 text-center text-sm bg-transparent text-white md:text-lg md:text-start"
								id="lastName"
								type="text"
								placeholder="Enter Your Last Name*"
								name="lastName"
								onChange={(e) => setFormState(e)}
								value={signUpForm.lastName ? signUpForm.lastName : ""}
							/>
						</div>
					</div>
					{/* ADDRESS */}
					<div className="mb-4 flex flex-col border-b-2 border-[#264370] justify-center md:ml-10">
						<div className="flex flex-col items-center md:flex-row">
							<label
								className="block text-[#d44d78] text-lg mb-2 pr-2"
								htmlFor="address">
								<FontAwesomeIcon icon={faHouse} />
							</label>
							<input
								className="w-full py-3 px-3 text-center mr-3 text-sm bg-transparent text-white md:text-lg md:text-start"
								id="address"
								type="text"
								placeholder="Enter Your Street Address*"
								name="address"
								onChange={(e) => setFormState(e)}
								value={signUpForm.address ? signUpForm.address : ""}
							/>
						</div>
						<div className="flex items-center">
							<input
								className="w-full py-3 px-3 mr-3 text-sm bg-transparent text-center text-white md:text-lg"
								id="city"
								type="text"
								placeholder="City*"
								name="city"
								onChange={(e) => setFormState(e)}
								value={signUpForm.city ? signUpForm.city : ""}
							/>

							<input
								className="w-full py-3 px-3 mr-3 text-sm bg-transparent text-center text-white md:text-lg"
								id="state"
								type="text"
								placeholder="State*"
								name="state"
								onChange={(e) => setFormState(e)}
								value={signUpForm.state ? signUpForm.state : ""}
							/>

							<input
								className="w-full py-3 px-3 mr-3 text-sm bg-transparent text-center text-white md:text-lg"
								id="zip"
								type="text"
								placeholder="Zip Code"
								name="zip"
								required
								onChange={(e) => setFormState(e)}
								value={signUpForm.zip ? signUpForm.zip : ""}
							/>
						</div>
					</div>

					{/* AGE GROUP -- REQUIRED */}
					<div className="mb-4 flex flex-col border-b-2 border-[#264370] items-center pb-3 md:flex-row md:ml-10">
						<p className="block text-[#d44d78] text-lg pr-2 font-bold mb-2 md:mb-0">
							What is your age group?
						</p>
						<select
							className="px-3 bg-transparent text-white focus:border-2 focus:border-white"
							name="ageGroup"
							id=""
							value={signUpForm.ageGroup ? signUpForm.ageGroup : ""}
							onChange={(e) => setFormState(e)}>
							<option
								className="bg-transparent text-black"
								name="ageGroup"
								value=""
								selected
								disabled>
								Please choose an option
							</option>
							<option
								className="bg-transparent text-black"
								name="ageGroup"
								value="10-20">
								10-20
							</option>
							<option
								className="bg-transparent text-black"
								name="ageGroup"
								value="21-30">
								21-30
							</option>
							<option
								className="bg-transparent text-black"
								name="ageGroup"
								value="31-40">
								31-40
							</option>
						</select>
					</div>

					{/* VETERAN */}
					<div className="mb-4 flex flex-col border-b-2 border-[#264370] items-center pb-3 md:flex-row md:ml-10">
						<p className="block text-[#d44d78] text-lg pr-2 font-bold mb-2 md:mb-0">
							Are you a veteran?*
						</p>
						<select
							className="px-3 bg-transparent text-white focus:border-2 focus:border-white"
							name="veteran"
							id=""
							value={signUpForm.veteran ? signUpForm.veteran : ""}
							onChange={(e) => setFormState(e)}>
							<option
								className="bg-transparent text-black"
								name="veteran"
								value=""
								selected
								disabled>
								Please choose an option
							</option>
							<option
								className="bg-transparent text-black"
								name="veteran"
								value="Yes">
								Yes
							</option>
							<option
								className="bg-transparent text-black"
								name="veteran"
								value="No">
								No
							</option>
						</select>
					</div>
					{/* ETHNICITY */}
					<div className="mb-4 flex flex-col border-b-2 border-[#264370] items-center md:ml-10 md:flex-row">
						<label
							className="block text-[#d44d78] text-lg mb-2 font-bold md:pr-2"
							htmlFor="ethnicity">
							Ethnicity*
						</label>
						<input
							className="w-full py-3 px-3 text-sm text-center bg-transparent text-white md:text-lg md:text-start md:mr-3"
							id="ethnicity"
							type="text"
							placeholder="Enter Your Ethnicity"
							name="ethnicity"
							onChange={(e) => setFormState(e)}
							value={signUpForm.ethnicity ? signUpForm.ethnicity : ""}
						/>
					</div>

					<div className="flex items-center justify-center">
						<button
							className="text-white font-bold w-40 px-3 py-2 rounded-full bg-[#d44d78] mt-5"
							type="button"
							onClick={() => authenticateForm()}>
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
