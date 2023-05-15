import { Link } from "react-router-dom";

function Homepage({ user }) {
	const bookInfo = { name: "Art of War" };
	return (
		<div>
			<h1>Homepage</h1>
			<h1>Welcome, {user} </h1>
			<Link to="/account" state={bookInfo}>
				Go to account with book info
			</Link>
		</div>
	);
}

export default Homepage;
