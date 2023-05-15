import React from "react";
import "./EmployeeCard.css";

export default function EmployeeCard({ employee, filterEmployeeFromList }) {
	return (
		<div className="card">
			<img src={employee.profile_picture} alt="" />
			<h2>
				{employee.first_name} {employee.last_name}
			</h2>
			<h3>{employee.sector}</h3>
			<p>
				<a href="#">{employee.email}</a>
			</p>
			<button onClick={() => filterEmployeeFromList(employee)}>
				Remove Employee
			</button>
		</div>
	);
}
