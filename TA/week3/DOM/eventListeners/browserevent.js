const button = document.querySelector(".button");

const addUser = (username) => {
	const body = document.querySelector("body");
	const userName = document.createElement("p");
	userName.innerText = `${username}`;

	body.append(userName);
};

button.addEventListener("click", () => addUser("Kim"));
