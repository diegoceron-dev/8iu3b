import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PaginationPokedex from "../components/Pagination";
import { getPokemonListByPage } from "./backup";


const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  // const [count, setCount] = useState(1)

  useEffect(() => {
  }, []);

  // const changePage = (page) => {
  //   console.log(page)
  // }

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      {/* <PaginationPokedex count={count} changePage={changePage}/> */}
    </div>
  );
};

export default Home;