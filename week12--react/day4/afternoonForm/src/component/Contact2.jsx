import { useState } from "react";
import "./Contact2.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@supabase/supabase-js";

const Contact2 = () => {
	const [contactForm, setContactForm] = useState({});
	const [verification, setVerification] = useState(false);

	const changeVerification = (e) => {
		setVerification(e.target.checked);
	};

	const setFormState = (e) => {
		setContactForm({
			...contactForm,
			[e.target.name]: e.target.value,
		});
	};

	const setPhone = (num1, num2, num3) => {
		const wholePhoneNum = num1 + num2 + num3;
		setContactForm({
			...contactForm,
			phone: wholePhoneNum,
		});
	};

	const phoneAuthenticate = () => {
		setPhone(contactForm.phone1, contactForm.phone2, contactForm.phone3);
		authenticateForm2();
	};
	// const checkPhone = (phone) => {
	// 	return phone?.match(/^[0-9]*$/);
	// };

	const authenticateForm2 = () => {
		if (!("phone" in contactForm)) {
			phoneAlert();
			return;
		}
		if (!("messageSubject" in contactForm)) {
			messageSubjectAlert();
			return;
		}
		if (!("message" in contactForm)) {
			messageAlert();
			return;
		}
		// if verification not checked, return an error
		if (verification === false) {
			verificationAlert();
		}

		// postContactForm(contactForm);
	};

	const phoneAlert = () =>
		toast.error("Please enter in a valid phone number.", {
			position: toast.POSITION.TOP_CENTER,
		});

	const messageSubjectAlert = () =>
		toast.error("Please choose a subject from the drop-down menu.", {
			position: toast.POSITION.TOP_CENTER,
		});

	const messageAlert = () =>
		toast.error("Please type your message.", {
			position: toast.POSITION.TOP_CENTER,
		});
	const verificationAlert = () => {
		toast.error("Please prove you are not a robot.", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	return (
		<div className="w-screen h-screen">
			<ToastContainer />
			<div className="w-[700px] ml-24 mt-24">
				<form className="w-full">
					<h1 className="text-4xl text-white mb-12 font-bold">Contact form</h1>
					<div className="mb-6 flex">
						<div className="w-[150px]">
							<label htmlFor="name" className="text-white">
								Your Name
							</label>
						</div>
						<div className="flex w-2/3">
							<input
								type="text"
								className="pl-2 py-1 mr-4 w-full"
								placeholder="First Name"
								id="name"
								name="firstName"
								onChange={(e) => setFormState(e)}
								value={contactForm.firstName ? contactForm.firstName : ""}
							/>
							<input
								type="text"
								className="pl-2 py-1 w-full"
								placeholder="Last Name"
								id="name"
								name="lastName"
								onChange={(e) => setFormState(e)}
								value={contactForm.lastName ? contactForm.lastName : ""}
							/>
						</div>
					</div>
					{/* EMAIL */}
					<div className="mb-6 flex">
						<div className="w-[150px]">
							<label htmlFor="email" className="text-white">
								Your Email
							</label>
						</div>
						<div className="w-2/3">
							<input
								type="email"
								className="pl-2 py-1 mr-4 w-full"
								placeholder="e.g. hello@contact.net"
								id="email"
								name="email"
								onChange={(e) => setFormState(e)}
								value={contactForm.email ? contactForm.email : ""}
							/>
						</div>
					</div>
					{/* PHONE NUMBER */}
					<div className="mb-6 flex">
						<div className="w-[150px]">
							<label htmlFor="phone" className="text-white">
								Phone <span className="text-xl">*</span>
							</label>
						</div>
						<div className="flex w-2/3">
							<input
								type="text"
								className="pl-2 py-1 mr-4 w-full"
								placeholder="###"
								id="phone"
								name="phone1"
								onChange={(e) => setFormState(e)}
								value={contactForm.phone1 ? contactForm.phone1 : ""}
							/>

							<input
								type="text"
								className="pl-2 py-1 mr-4 w-full"
								placeholder="###"
								id="phone"
								name="phone2"
								onChange={(e) => setFormState(e)}
								value={contactForm.phone2 ? contactForm.phone2 : ""}
							/>
							<input
								type="text"
								className="pl-2 py-1 w-full"
								placeholder="####"
								id="phone"
								name="phone3"
								onChange={(e) => setFormState(e)}
								value={contactForm.phone3 ? contactForm.phone3 : ""}
							/>
						</div>
					</div>
					{/* MESSAGE SUBJECT -- DROPDOWN */}
					<div className="mb-6 flex">
						<div className="w-[150px]">
							<label htmlFor="" className="text-white">
								Message Subject <span className="text-xl">*</span>
							</label>
						</div>
						<div className="flex w-2/3">
							<select
								name="messageSubject"
								id=""
								value={
									contactForm.messageSubject ? contactForm.messageSubject : ""
								}
								onChange={(e) => setFormState(e)}
								className="w-2/3 px-2 py-1 hover:cursor-pointer">
								<option value="Other" name="messageSubject">
									Other
								</option>
								<option value="About our services" name="messageSubject">
									About our services
								</option>
								<option value="Careers" name="messageSubject">
									Careers
								</option>
							</select>
						</div>
					</div>
					{/* MESSAGE -- TEXTAREA */}
					<div className="mb-6 flex">
						<div className="w-[150px]">
							<label htmlFor="" className="text-white">
								Message <span className="text-xl">*</span>
							</label>
						</div>
						<div className="flex w-2/3">
							<textarea
								name="message"
								id=""
								cols="30"
								rows="5"
								className="w-full"
								onChange={(e) => setFormState(e)}>
								{contactForm.message ? contactForm.message : ""}
							</textarea>
						</div>
					</div>
					{/* VERIFICATION */}
					<div className="mb-6 flex border-b-2 border-white pb-6">
						<div className="w-[150px]">
							<label htmlFor="" className="text-white">
								Verification <span className="text-xl">*</span>
							</label>
						</div>
						<div className="flex w-2/3">
							<div className="w-[250px] bg-white h-[50px] flex items-center justify-between">
								<div className="flex pl-2 items-center">
									<input
										type="checkbox"
										name="verification"
										className="w-6 h-6 hover:cursor-pointer"
										onClick={(e) => changeVerification(e)}
									/>
									<p className="text-[12px] pl-2">I'm not a robot</p>
								</div>
								<div>
									<img
										src="../src/assets/RecaptchaLogo.svg.png"
										alt=""
										className="captcha"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* SUBMIT BUTTON */}
					<div>
						<button
							className="font-bold text-white border-2 border-white px-7 py-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#1cafed]"
							onClick={() => phoneAuthenticate()}
							type="button">
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact2;
