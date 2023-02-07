import { useLocation } from "react-router-dom";

function Account() {
	const location = useLocation();
	return (
		<div className="Account">
			<h1>Account</h1>
			<h2>I am currently reading this book: {location?.state?.name}</h2>
		</div>
	);
}

export default Account;
