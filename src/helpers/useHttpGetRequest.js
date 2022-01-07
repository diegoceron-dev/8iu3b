import {useEffect, useReducer, useState} from "react";
import {loadingReducer} from "../components/shared/LoadingReducer";
import axios from "axios";

const initialState = {
    isLoading: true
};

const API_URL = 'https://pokeapi.co/api/v2/pokemon'
  
const generateUrl = (page) => {
    console.log(page)
    if(page == 1)
        return `${API_URL}`;
    else
        return `${API_URL}?offset=${page * 20}&limit=20`;
}

export const getPokemonList = (page) => {  
    const [filteredPokemons , setFilteredPokemons] = useState([])
    const [count , setCount] = useState([])
    const [state, dispatch] = useReducer(loadingReducer, initialState);
    
    useEffect(() => {
        dispatch({type:'LOADING'})
        axios
        .get(generateUrl(page))
        .then((res) => {
            dispatch({type:'FINISHED'})
            console.log(res.data.results)
            setFilteredPokemons(res.data.results)
            setCount(res.data.count)
        })
        .catch((err) => console.error)
    },[page])
  
    return {count, filteredPokemons , isLoading: state.isLoading}
}
