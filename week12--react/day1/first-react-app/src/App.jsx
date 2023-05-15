import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Student from "./components/Student/Student";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const studentData = [
		{ name: "Tyler", occupation: "ui/ux designer" },
		{ name: "tony", occupation: "developer" },
	];
	const studentName = "Jaye";
	const student2 = "Hunter";

	return (
		<div className="App">
			<h1>App.js</h1>
			<h3>Counter is: {counter}</h3>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
			{studentData.map((student) => (
				<Student student={student} />
			))}
			<Header student2={student2} counter={counter} />
			<Footer studentName={studentName} counter={counter} />
		</div>
	);
}

export default App;
