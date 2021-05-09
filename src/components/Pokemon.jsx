import React, { useState, useEffect } from "react";

function MostrarPokemon({ avatar, name }) {
  return (
    <div>
      <figure>
        <img src={avatar} alt="" />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const url = "https://pokeapi.co/api/v2/pokemon/";

  //   const getPokemons = async (url) => {
  //     let res = await fetch(url),
  //       json = await res.json();
  //     json.results.forEach(async (el) => {
  //       let res = await fetch(el.url), json = await res.json()

  //           let pokemon = {
  //             id: json.id,
  //             name: json.name,
  //             avatar: json.sprites.front_default,
  //           };
  //           setPokemons((pokemons) => [...pokemons, pokemon]);
  //         });
  //     });
  //   };
  // }, []);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);

  return (
    <div>
      {pokemons.map((el) => (
        <MostrarPokemon key={el.id} name={el.name} avatar={el.avatar} />
      ))}
    </div>
  );
}

// function RenderingCountries({ name, flag, subregion }) {
//   return (
//     <div>
//       <figure>
//         <img src={flag} alt="" style={{ width: "100px" }} />
//         <figcaption>{name}</figcaption>
//       </figure>
//       <nav>{subregion}</nav>
//     </div>
//   );
// }

// export default function Countries() {
//   const [countries, setCountries] = useState([]);

//   let url = "https://restcountries.eu/rest/v2/region/asia";

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         json.forEach((el) => {
//           let country = {
//             name: el.name,
//             flag: el.flag,
//             subregion: el.subregion,
//           };
//           setCountries((countries) => [...countries, country]);
//         });
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Paises</h2>
//       {countries.map((el, index) => (
//         <RenderingCountries
//           key={index}
//           name={el.name}
//           flag={el.flag}
//           subregion={el.subregion}
//         />
//       ))}
//     </div>
//   );
// }
