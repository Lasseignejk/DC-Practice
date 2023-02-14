import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchMovies from "./components/SearchMovies";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import MoviePage from "./components/MoviePage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Navbar />

				<Routes>
					<Route path="/" element={<Counter />} />
					<Route path="/search">
						<Route index element={<SearchMovies />} />
						<Route path=":movieTitle" element={<MoviePage />} />
					</Route>
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
