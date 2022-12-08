// create an image
// create a header with your name
// create a paragraph with info about you

// select
const jayesDiv = document.querySelector(".mainContainer")

// create and modify
const jayeHeader = document.createElement("h1");
jayeHeader.innerText = "Jaye Lasseigne";

const dogDiv = document.createElement("div");
dogDiv.setAttribute('class', 'doggyDiv')

const jayeButton = document.createElement("button");
jayeButton.innerText = "Click me!"
jayeButton.addEventListener("click", () => console.log("I have been clicked"))

const foodDiv = document.createElement("div");
foodDiv.setAttribute('class', 'foodyDiv')

const jayeImage = document.createElement("img");
jayeImage.src = 'puppy.jpg';
jayeImage.setAttribute('class', 'imgEdit');

const jayePara = document.createElement("p");
jayePara.innerText = "Made this paragraph using only JavaScript! Super cool!";

const foodHeader = document.createElement("h2");
foodHeader.innerText = "Japanese Food"


const dogPicArray = ["https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", "https://images.unsplash.com/photo-1561297108-a47d55d96a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1541914626313-73371f4e3917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"]
const foodPicArray = ["https://images.unsplash.com/photo-1602273660127-a0000560a4c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", "https://images.unsplash.com/photo-1602030029545-52959ef2927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1579398937948-598009379315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1603191916160-9c67af67c930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"]


//append
jayesDiv.append(jayeHeader, jayeImage, jayePara, jayeButton, dogDiv, foodHeader, foodDiv)



for (const dog of dogPicArray) {
    const dogpic = document.createElement("img");
    dogpic.setAttribute('src', dog)
    dogpic.classList.add('imgEdit')
    dogDiv.append(dogpic)
    // jayesDiv.append(dogpic)
}

for (const food of foodPicArray) {
    const foodpic = document.createElement("img");
    foodpic.setAttribute('src', food)
    foodpic.classList.add('imgEdit')
    foodDiv.append(foodpic)
}