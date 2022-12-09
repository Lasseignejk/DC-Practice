// create 5 elements per pokemon
// so in your loop, you should have 5 createElements 
// name: h1   hp: h2  moves: h3   picture: img

const listOfPokemon = [
    {
      name: "Gengar",
      hp: 220,
      move1: "ShadowBall",
      move2: "Curse",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      gengarBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    },
    {
      name: "MilTank",
      hp: 300,
      move1: "Rollout",
      move2: "BodySlam",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
      miltankBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/241.png",
    },
    {
      name: "Garchomp",
      hp: 200,
      move1: "HyperBeam",
      move2: "Eathquake",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
      garchompBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png",
    },
    {
      name: "Swampert",
      hp: 190,
      move1: "hydropump",
      move2: "mudshot",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
      swampertBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/260.png",
    },
    {
      name: "Phanpy",
      hp: 120,
      move1: "playrough",
      move2: "tackle",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
      phanpyBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/231.png",
    },
  ];

const pokemonCard = document.querySelector(".pokemonCard")


for (const pokemon of listOfPokemon) {
    const oneCard = document.createElement("div")
    // oneCard.classList = pokemon.name + "-" + "card";
    oneCard.classList = pokemon.name + "-card";
    oneCard.classList += " oneCard";

    const moves = document.createElement("div")
    moves.setAttribute("class", "moves")

    const picDiv = document.createElement("div")
    picDiv.setAttribute("class", "picDiv")

    const name = document.createElement("h1");
    name.innerText = pokemon["name"];
    name.setAttribute("class", "name");

    const hp = document.createElement("h2");
    hp.innerText = pokemon["hp"];
    hp.setAttribute("class", "hp");

    const move1 = document.createElement("h3");
    move1.innerText = pokemon["move1"];
    move1.setAttribute("class", "move1")

    const move2 = document.createElement("h3");
    move2.innerText = pokemon["move2"];
    move2.setAttribute("class", "move2")

    const frontPicture = document.createElement("img");
    frontPicture.setAttribute("src", pokemon["picture"])
    frontPicture.setAttribute("class", "picture")

    const backPicture = document.createElement("img");
    backPicture.setAttribute("src", pokemon[pokemon.name.toLowerCase() + "Back"])
    backPicture.setAttribute("class", "picture")
    // picture.addEventListener("click", () => {
        
    // })

    oneCard.append(name, hp, moves, picDiv)
    picDiv.append(frontPicture, backPicture)
    moves.append(move1, move2)
    pokemonCard.append(oneCard)
}


const test = document.querySelector(".test")

const frontPicture = document.createElement("img");
frontPicture.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png");
frontPicture.setAttribute("class", "picture");

const backPicture = document.createElement("img");
backPicture.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/231.png");
backPicture.setAttribute("class", "backPicture")

frontPicture.addEventListener("click", () => {
    test.append(backPicture)
})

backPicture.addEventListener("click", () => {
    test.append(frontPicture)
})


test.append(frontPicture)

// [key*=Back])