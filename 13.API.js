//TODO: Fetch api properly
const paratxt = document.getElementById("paradata");
const search_bton = document.getElementById("search_bton");
const getalldata = async () => {
  const pokemon_name = document.getElementById("Pokemonname").value;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  );
  if (!response.ok) {
    throw new Error("Could not get data");
  }
  const data = await response.json();
  console.log(data);
  const pokemonSprite = data.sprites.front_default;
  const imgElement = document.getElementById("PokemonSprite");
  imgElement.src = pokemonSprite;
  imgElement.style.display = "block";
};
//FIXME: Set data in screen;
const getdata = () => {
  
}
//TODO: A request header and response header
/*
let URL = "https://cat-fact.herokuapp.com/facts";
const getweatherdata = () => {
  let weatherURL = fetch(URL, {
    //response header
    method: "GET",
    headers: {
      Authorization: "Bearer your_token",
    },
  });

  const ran = Math.floor(Math.random() * 5);

  weatherURL.then((response) => {
    console.log(response);
    return response.json().then((response) => {
        console.log(response);
    });
  });
  
};
console.log(getweatherdata());
*/

/*
// Post request

// TODO:Post request
let createtodofunc = async (todo) => {
  let reqheader = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }
  let url2 = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
    reqheader
  );
  let response = await url2.json();
  return response;
};
const mainfunc = async () => {
  let todo ={
      title: "ved",
      body: "patel",
      UserID: 30,
    }
  let req = await createtodofunc(todo);
  console.log(req);
}
mainfunc()
*/
