import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<h1>Pokemon</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
