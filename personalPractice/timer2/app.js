const timer = document.querySelector(".timer");

// grab
const hourUp = document.querySelector(".hourUp");
const hoursSection = document.querySelector(".hoursSection");
const hourDown = document.querySelector(".hourDown");

const minuteUp = document.querySelector(".minuteUp");
const minutesSection = document.querySelector(".minutesSection");
const minuteDown = document.querySelector(".minuteDown");

const secondUp = document.querySelector(".secondUp");
const secondsSection = document.querySelector(".secondsSection");
const secondDown = document.querySelector(".secondDown");

const startbtn = document.querySelector(".startbtn");
const resetbtn = document.querySelector(".resetbtn");

// create
let hoursCounter = 0;
let minutesCounter = 0;
let secondsCounter = 0;
// modify
hoursSection.innerHTML = hoursCounter.toString().padStart(2, 0);
minutesSection.innerHTML = minutesCounter.toString().padStart(2, 0);
secondsSection.innerHTML = secondsCounter.toString().padStart(2, 0);

// append

const checkTime = () => {
	hourDown.disabled = true;
	minuteDown.disabled = true;
	secondDown.disabled = true;
};

// event listeners
hourUp.addEventListener("click", () => {
	hoursCounter++;
	hoursSection.innerHTML = hoursCounter.toString().padStart(2, 0);
	if (hoursCounter == 5) {
		hourUp.disabled = true;
	}
	hourDown.disabled = false;
});

hourDown.addEventListener("click", () => {
	hoursCounter--;
	hoursSection.innerHTML = hoursCounter.toString().padStart(2, 0);
	if (hoursCounter == 0) {
		hourDown.disabled = true;
	}
	hourUp.disabled = false;
});

minuteUp.addEventListener("click", () => {
	minutesCounter += 15;
	minutesSection.innerHTML = minutesCounter.toString().padStart(2, 0);
	if (minutesCounter == 45) {
		minuteUp.disabled = true;
	}
	minuteDown.disabled = false;
});

minuteDown.addEventListener("click", () => {
	minutesCounter -= 15;
	minutesSection.innerHTML = minutesCounter.toString().padStart(2, 0);
	if (minutesCounter == 0) {
		minuteDown.disabled = true;
	}
	minuteUp.disabled = false;
});

secondUp.addEventListener("click", () => {
	secondsCounter += 10;
	secondsSection.innerHTML = secondsCounter.toString().padStart(2, 0);
	if (secondsCounter == 50) {
		secondUp.disabled = true;
	}
	secondDown.disabled = false;
});

secondDown.addEventListener("click", () => {
	secondsCounter -= 10;
	secondsSection.innerHTML = secondsCounter.toString().padStart(2, 0);
	if (secondsCounter == 0) {
		secondDown.disabled = true;
	}
	secondUp.disabled = false;
});

interval = null;
let remainingSeconds = 0;

startbtn.addEventListener("click", () => {
	if (interval == null) {
		start();
	} else {
		stop();
	}
});

resetbtn.addEventListener("click", () => {
	stop();
	hoursSection.innerHTML = hoursCounter.toString().padStart(2, 0);
	minutesSection.innerHTML = minutesCounter.toString().padStart(2, 0);
	secondsSection.innerHTML = secondsCounter.toString().padStart(2, 0);

	remainingSeconds = hoursCounter * 3600 + minutesCounter * 60 + secondsCounter;
	updateTime();
});

const updateTime = () => {
	const hours = Math.floor(remainingSeconds / 3600);
	const minutes = Math.floor(remainingSeconds / 60);
	const seconds = remainingSeconds % 60;
	hours.textContent = hours.toString().padStart(2, 0);
	minutes.textContent = minutes.toString().padStart(2, 0);
	seconds.textContent = seconds.toString().padStart(2, 0);
};

const start = () => {
	if (remainingSeconds == 0) return;
	interval = setInterval(() => {
		remainingSeconds--;
		updateTime();

		if (remainingSeconds == 0) {
			stop();
		}
	}, 1000);

	updateTime();
};

const stop = () => {
	clearInterval(interval);
	interval = null;
	updateControls();
};

const updateControls = () => {
	if (interval == null) {
		startbtn.innerHTML = `<span class="material-icons">play_arrow</span>`;
	} else {
		startbtn.innerHTML = `<span class="material-icons">pause</span>`;
	}
};

checkTime();
