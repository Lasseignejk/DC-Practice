import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilm,
	faHouse,
	faMagnifyingGlass,
	faPlus,
	faStar,
	faTelevision,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="flex h-20 justify-between px-5 py-5 bg-[#050609] text-[#F9F9F9] items-center text-sm sticky top-0 z-20">
			<div className="flex gap-12 items-center">
				<img
					src="../../public/disneyLogo.webp"
					className="w-[120px] cursor-pointer"
					alt=""
				/>
				<Link to="/" className="font-bold">
					<FontAwesomeIcon icon={faHouse} className="text-[13px] mr-3" />{" "}
					<span className="linkUnderline">HOME</span>
				</Link>
				<Link to="/search" className="font-bold">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="text-[13px] mr-3"
					/>
					<span className="linkUnderline">SEARCH</span>
				</Link>
				<Link to="#" className="font-bold">
					<FontAwesomeIcon icon={faPlus} className="text-[13px] mr-3" />
					<span className="linkUnderline">WATCHLIST</span>
				</Link>
				<Link to="#" className="font-bold">
					<FontAwesomeIcon icon={faStar} className="text-[13px] mr-3" />
					<span className="linkUnderline">ORIGINALS</span>
				</Link>
				<Link to="#" className="font-bold">
					<FontAwesomeIcon icon={faFilm} className="text-[13px] mr-3" />
					<span className="linkUnderline">MOVIES</span>
				</Link>
				<Link to="#" className="font-bold">
					<FontAwesomeIcon icon={faTelevision} className="text-[13px] mr-3" />
					<span className="linkUnderline">SERIES</span>
				</Link>
			</div>
			<div className="flex items-center cursor-pointer">
				<p className="text-[1rem] mr-3">Jaye</p>
				<img
					src="../../public/profilePic.png"
					alt=""
					className="w-[50px] h-[50px]"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
