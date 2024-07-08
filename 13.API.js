const search_bton = document.getElementById("search_bton");
const parasid = document.getElementById("parasid");
const getapidata = async () => {
  const pokimonname = document.getElementById("pokimonname").value;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokimonname}`
  );
  if (!response.ok) {
    throw new error("could not get data");
  }
  const polemon = await response.json();
  console.log(polemon);
  const pokemonSprite = polemon.sprites.front_default;
  const imgElement = document.getElementById("PokemonSprite");
  imgElement.src = pokemonSprite;
  imgElement.style.display = "block";
  parasid.innerHTML = `Name of the Pokimon ${polemon.name}.\n ${polemon.name}'s height is ${polemon.height}.`;
  
  
};
// //TODO: A request header and response header
// /*
// let URL = "https://cat-fact.herokuapp.com/facts";
// const getweatherdata = () => {
//   let weatherURL = fetch(URL, {
//     //response header
//     method: "GET",
//     headers: {
//       Authorization: "Bearer your_token",
//     },
//   });

//   const ran = Math.floor(Math.random() * 5);

//   weatherURL.then((response) => {
//     console.log(response);
//     return response.json().then((response) => {
//         console.log(response);
//     });
//   });

// };
// console.log(getweatherdata());
// */

// /*
// // Post request

// // TODO:Post request
// let createtodofunc = async (todo) => {
//   let reqheader = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   }
//   let url2 = await fetch(
//     "https://jsonplaceholder.typicode.com/todos",
//     reqheader
//   );
//   let response = await url2.json();
//   return response;
// };
// const mainfunc = async () => {
//   let todo ={
//       title: "ved",
//       body: "patel",
//       UserID: 30,
//     }
//   let req = await createtodofunc(todo);
//   console.log(req);
// }
// mainfunc()
// */
