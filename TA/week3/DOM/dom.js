const filler = document.getElementById("filler").innerText;
console.log(filler);

const filler2 = document.getElementsByClassName("filler2")[0].innerText;
console.log(filler2);

const filler3 = document.querySelector(".filler2").innerText;
console.log(filler3);

const studentContainer = document.querySelector(".students");
const dustin = document.createElement("p");
dustin.innerText = "Dustin";
studentContainer.append(dustin);
