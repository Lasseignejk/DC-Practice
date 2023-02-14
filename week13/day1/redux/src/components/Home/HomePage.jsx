import React from "react";
import UserDashboard from "../User/UserDashboard";

const HomePage = ({ userSite }) => {
	return (
		<div>
			<h1>Homepage</h1>
			<UserDashboard userSite={userSite} />
		</div>
	);
};

export default HomePage;
