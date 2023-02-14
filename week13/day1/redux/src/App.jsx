import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./components/Home/HomePage";

function App() {
	const [userSite, setUserSite] = useState([
		{
			name: "Midland",
			hqAddress: "145 No One Lives Here Street",
			waterTransferRate: "2.4",
		},
		{
			name: "Dever",
			hqAddress: "145 secret avn",
			waterTransferRate: "4.6",
		},
	]);
	return (
		<div className="App">
			<HomePage userSite={userSite} />
		</div>
	);
}

export default App;
