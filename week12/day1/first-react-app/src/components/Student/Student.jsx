import React from "react";

const Student = ({ student }) => {
	return (
		<div>
			<p>{student.name}</p>
			<p>{student.occupation}</p>
		</div>
	);
};

export default Student;
