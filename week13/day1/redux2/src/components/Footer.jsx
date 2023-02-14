import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center bg-[#0E0B14] py-6 h-48">
			<img
				src="../../public/disneyLogo.webp"
				alt=""
				className="w-[120px] mb-3"
			/>
			<div className="flex flex-wrap gap-6 px-3 justify-center text-[#f9f9f9] text-[12px]">
				<Link>Privacy Policy</Link>
				<Link>Subscriber Agreement</Link>
				<Link>Your California Privacy Rights</Link>
				<Link>Do Not Sell My Personal Information</Link>
				<Link>Children's Online Privacy Policy</Link>
				<Link>Help</Link>
				<Link>Closed Captioning</Link>
				<Link>Supported Devices</Link>
				<Link>Gift Disney+</Link>
				<Link>About Us</Link>
				<Link>Disney+ Partner Program</Link>
				<Link>Interest-based Ads</Link>
			</div>
			<div className="mt-4">
				<p className="text-[#c5c5c5] text-[12px]">
					&copy;Disney. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
