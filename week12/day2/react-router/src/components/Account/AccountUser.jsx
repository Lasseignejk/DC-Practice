import React from "react";
import { useParams, Link } from "react-router-dom";

const AccountUser = () => {
	const { id } = useParams();
	const bookInfo = { name: "goblet of fire" };
	return (
		<div>
			<h1>This is account for param: {id}</h1>
			<Link to="/account" state={bookInfo}>
				Go to account with book info
			</Link>
		</div>
	);
};

export default AccountUser;
