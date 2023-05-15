import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/homepage">Home</Link>
				</li>
				<li>
					<Link to="/account">Account</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
