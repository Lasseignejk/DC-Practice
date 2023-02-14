import React from "react";
import UserProfile from "./UserProfile";

const UserDashboard = ({ userSite }) => {
	return (
		<div>
			<h1>UserDashboard</h1>
			<UserProfile userSite={userSite} />
		</div>
	);
};

export default UserDashboard;
