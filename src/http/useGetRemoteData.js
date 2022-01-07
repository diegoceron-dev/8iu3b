import {useEffect, useState} from "react";
import { useHttpGetRequest } from "./useHttpGetRequest";

const REMOTE_URL = 'https://pokeapi.co/api/v2/pokemon'
  
export const useGetRemoteData = () => {
    const {pokemons , isLoading} = useHttpGetRequest(REMOTE_URL)
    const [filteredPokemons , setFilteredPokemons] = useState([])
  
    useEffect(() => {
        const filteredPokemons = pokemons.map(pokemon => {
            return {
                url: pokemon.url,
                name: pokemon.name
            };
        });
         setFilteredPokemons(filteredPokemons)
    },[pokemons])
  
    return {filteredPokemons , isLoading}
}