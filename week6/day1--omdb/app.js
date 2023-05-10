const searchMovies = async () => {
	const movieCardContainer = document.querySelector(".movieCardContainer");
	movieCardContainer.innerHTML = "";
	const inputField = document
		.querySelector(".searchField")
		.value.replace(/\s/g, "+");
	const inputField2 = document.querySelector(".searchField").value;
	console.log(inputField2);

	const userInputText = document.querySelector(".userInputText");
	userInputText.innerText = `You searched for: ${inputField2}`;
	const movieURL = ``;

	const rawData = await fetch(movieURL);
	const json = await rawData.json();

	json.Search.forEach(async (movie) => {
		const movieCard = document.createElement("div");
		//img
		const moviePosterDiv = document.createElement("div");
		moviePosterDiv.classList.add("moviePosterDiv");
		const moviePoster = document.createElement("img");
		//h3
		//   const movieTitle = document.createElement("h3");

		// p
		const movieDescription = document.createElement("p");
		// p
		const movieInfo = document.createElement("p");

		const imdbID = movie.imdbID;
		const individualMovieData = ``;
		const fetchIndividualMovie = await fetch(individualMovieData);
		const individualJson = await fetchIndividualMovie.json();
		console.log(individualJson);
		const individualMovieLink = document.createElement("a");
		//   individualMovieLink.href = `https://www.imdb.com/title/${imdbID}/`;
		individualMovieLink.innerHTML = individualJson.Title;
		individualMovieLink.classList.add("movieTitle");
		// modify
		movieCard.classList = "movieCard";
		moviePoster.classList = "moviePoster";
		moviePoster.src = individualJson.Poster;
		//   movieTitle.innerText = individualJson.Title;
		movieDescription.innerText = individualJson.Plot;
		movieInfo.innerText = `${individualJson.Year}  |  ${individualJson.Rated}  |  ${individualJson.Runtime}`;

		// string interpolation

		// append
		moviePosterDiv.append(moviePoster);
		movieCard.append(
			moviePosterDiv,
			individualMovieLink,
			movieDescription,
			movieInfo
		);
		movieCardContainer.append(movieCard);
	});
};

const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", searchMovies);

const searchField = document.querySelector(".searchField");
searchField.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		searchMovies();
	}
});
