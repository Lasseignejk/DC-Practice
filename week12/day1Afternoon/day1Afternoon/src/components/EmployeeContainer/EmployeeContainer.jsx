import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeContainer.css";

export const EmployeeContainer = ({ employeeData, filterEmployeeFromList }) => {
	return (
		<div className="container">
			{employeeData.map((employee) => (
				<EmployeeCard
					employee={employee}
					filterEmployeeFromList={filterEmployeeFromList}
				/>
			))}
		</div>
	);
};

export default EmployeeContainer;
