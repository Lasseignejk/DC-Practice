const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieContainer = document.getElementById("movieContainer");

const apiCall = async () => {
	const keyword = searchInput.value;
	const data = await fetch(
		`http://www.omdbapi.com/?s=${keyword}&apikey=709546ab&s`
	);
	const json = await data.json();
	console.log(json.Search);

	const searchData = json.Search;
	searchData.forEach((movie) => {
		const title = document.createElement("h1");
		const poster = document.createElement("img");

		title.innerHTML = movie.Title;
		poster.src = movie.Poster;
		poster.classList.add("moviePoster");

		movieContainer.append(title, poster);
	});
};

searchButton.addEventListener("click", apiCall);
