import "./App.css";
import "./App2.css";
import { useState } from "react";
import { employeeData } from "../employeeData";
import { EmployeeContainer } from "./components/EmployeeContainer/EmployeeContainer";

function App() {
	const [employees, setEmployee] = useState(employeeData);

	const filterEmployeeFromList = (personToRemove) => {
		const filteredList = employees.filter(
			(employee) => employee.first_name !== personToRemove.first_name
		);
		setEmployee(filteredList);
	};

	return (
		<div className="App">
			<h1 className="title">Dashboard</h1>
			<EmployeeContainer
				employeeData={employees}
				filterEmployeeFromList={filterEmployeeFromList}
			/>
		</div>
	);
}

export default App;
