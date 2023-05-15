import "./Footer.css";

export const Footer = (props) => {
	return (
		<div className="footerBody">
			<h2>Footer</h2>
			<p>{props.studentName}</p>
		</div>
	);
};
