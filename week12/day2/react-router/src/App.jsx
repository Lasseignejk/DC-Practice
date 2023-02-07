import "./App.css";
import Account from "./components/Account/Account";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/account" element={<Account />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
