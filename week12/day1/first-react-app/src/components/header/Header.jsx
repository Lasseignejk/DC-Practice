import "./Header.css";

export const Header = (props) => {
	return (
		<div className="headerBody">
			<h2>Header</h2>
			<p>This is a header component</p>
			<p>{props.student2}</p>
			this is Apps counter {props.counter}
		</div>
	);
};
