import {useEffect, useReducer, useState} from "react";
import {loadingReducer} from "../components/shared/LoadingReducer";
import axios from "axios";

const initialState = {
    isLoading: true
};

const API_URL = 'https://pokeapi.co/api/v2/'
  
const generatePokemonUrl = (page) => {
    console.log(page)
    if(page == 1)
        return `${API_URL}pokemon`;
    else
        return `${API_URL}pokemon?offset=${page * 20}&limit=20`;
}

export const getPokemonList = (page) => {  
    const [filteredPokemons , setFilteredPokemons] = useState([])
    const [count , setCount] = useState([])
    const [state, dispatch] = useReducer(loadingReducer, initialState);
    
    useEffect(() => {
        dispatch({type:'LOADING'})
        axios
        .get(generatePokemonUrl(page))
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

export const getPokemon = (pokemon) => {
    const [filteredPokemon , setFilteredPokemon] = useState({name: "", image: "", moves: [], types: []})
    const [state, dispatch] = useReducer(loadingReducer, initialState);
    
    useEffect(() => {
        dispatch({type:'LOADING'})
        axios
        .get(`${API_URL}pokemon/${pokemon}`)
        .then((res) => {
            dispatch({type:'FINISHED'})
            console.log(res.data)
            setFilteredPokemon({
                name: res.data.name, 
                image: res.data.sprites.other.home.front_default, 
                moves: res.data.moves,
                types: res.data.types
            })
        })
        .catch((err) => console.error)
    },[pokemon])
  
    return {filteredPokemon , isLoading: state.isLoading}
}

export const getMove = (move) => {
    const [filteredMove , setFilteredMove] = useState({name: "", accuracy: 0, power: 0, effects: []})
    const [state, dispatch] = useReducer(loadingReducer, initialState);
    
    useEffect(() => {
        dispatch({type:'LOADING'})
        axios
        .get(`${API_URL}move/${move}`)
        .then((res) => {
            dispatch({type:'FINISHED'})
            console.log(res.data)
            setFilteredMove({
                name: res.data.name,
                accuracy: res.data.accuracy,
                power: res.data.power,
                effects: res.data.effect_entries
            })
        })
        .catch((err) => console.error)
    },[move])
  
    return {filteredMove , isLoading: state.isLoading}
}
