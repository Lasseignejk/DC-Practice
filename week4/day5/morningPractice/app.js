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

const flipPokemon = (picture, e, pokemon, newPokeName) => {
  //if the pokemon has the word back in the classname, change it's picture to the front pic and give it a front classname
  if (e.className.includes("back")) {
    picture.src = pokemon.picture;
    picture.classList = "front";
  } else {
    // else switch it to the back pic and give it the back name
    picture.src = pokemon[newPokeName];
    picture.classList = "back";
  }
}


for (const pokemon of listOfPokemon) {
    const oneCard = document.createElement("div")
    // oneCard.classList = pokemon.name + "-" + "card";
    oneCard.classList = pokemon.name + "-card";
    oneCard.classList += " oneCard";

    const moves = document.createElement("div")
    moves.setAttribute("class", "moves")

    const name = document.createElement("h1");
    name.innerText = pokemon["name"];
    name.setAttribute("class", "name");
    
    const newPokeName = pokemon.name.toLowerCase() + "Back";

    const hp = document.createElement("h2");
    hp.innerText = pokemon["hp"];
    hp.setAttribute("class", "hp");

    const move1 = document.createElement("h3");
    move1.innerText = pokemon["move1"];
    move1.setAttribute("class", "move1")

    const move2 = document.createElement("h3");
    move2.innerText = pokemon["move2"];
    move2.setAttribute("class", "move2")

    const picture = document.createElement("img");
    picture.src = pokemon.picture;
    picture.classList = "front"

    oneCard.append(name, hp, moves, picture)
    moves.append(move1, move2)
    pokemonCard.append(oneCard)

    picture.addEventListener("click", (e) => {
      flipPokemon(picture, e.target, pokemon, newPokeName)
    })
  
}
