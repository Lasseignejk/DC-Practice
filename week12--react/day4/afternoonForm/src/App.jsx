import { useState } from "react";
import ContactForm from "./component/ContactForm";
import { Route, Routes } from "react-router-dom";
import Contact2 from "./component/Contact2";

function App() {
	return (
		<Routes>
			<Route path="/" element={<ContactForm />} />
			<Route path="/contact2" element={<Contact2 />} />
		</Routes>
	);
}

export default App;
