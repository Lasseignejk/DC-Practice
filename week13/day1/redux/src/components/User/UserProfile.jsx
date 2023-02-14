import React from "react";
import UserSettings from "./UserSettings";

const UserProfile = ({ userSite }) => {
	return (
		<>
			{userSite.map((userS) => {
				return (
					<div>
						<h3>Current User Site is {userS.name}</h3>
						<h3>Location {userS.hqAddress}</h3>
						<h3>Water Transfer Rate: {userS.waterTransferRate}</h3>
					</div>
				);
			})}
			<div>
				<UserSettings />
			</div>
		</>
	);
};

export default UserProfile;
