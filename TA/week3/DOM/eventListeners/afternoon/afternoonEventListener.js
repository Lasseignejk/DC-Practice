// 1. Create a button that displays an alert when clicked:
const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", () => alert("Button Clicked"));

// 2. Create an input field that logs the input value when submitted:
const input = document.querySelector("#inputfield");
const logButton = document.querySelector("#logButton");

logButton.addEventListener("click", () => console.log(input.value));

// 3. Create an image that changes when clicked:
const image = document.querySelector("#image");

image.addEventListener("click", () => {
	console.log(image.src);
	if (image.src.endsWith("image1.png")) {
		image.src = "image2.png";
	} else {
		image.src = "image1.png";
	}
});

// 4. Create a div that changes color when the mouse hovers over it:
const colorDiv = document.querySelector("#colorDiv");

colorDiv.addEventListener("mouseover", () => {
	colorDiv.style.backgroundColor = "cornflowerblue";
});

colorDiv.addEventListener("mouseout", () => {
	colorDiv.style.backgroundColor = "transparent";
});

// 5. Create a checkbox that toggles the visibility of a paragraph:
const checkbox = document.querySelector("#checkbox");
const hideMe = document.querySelector("#hideMe");

checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		hideMe.style.display = "none";
	} else {
		hideMe.style.display = "block";
	}
});
