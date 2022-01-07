
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonListByPage = (page) => {
    let url = ''

    if(page == 1)
      url = `${API_URL}`;
    else
      url = `${API_URL}?offset=${page * 20}&limit=20`;
    console.log(url)
    axios
    .get(url)
    .then((res) => res.data.results)
    .catch((err) => console.error);
}