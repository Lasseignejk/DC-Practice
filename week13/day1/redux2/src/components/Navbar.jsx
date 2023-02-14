import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-between px-5 py-5 bg-[#1b1a1a] text-[#dad8d8]">
			<img
				src="../../public/en_dplus_lg_r_2x_54572343.webp"
				className="w-[100px]"
				alt=""
			/>
			<div className="flex gap-10">
				<Link to="/search">Search</Link>
				<Link to="/">Counter</Link>
			</div>
		</nav>
	);
};

export default Navbar;
