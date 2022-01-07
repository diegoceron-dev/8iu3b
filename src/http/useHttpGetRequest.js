import {useEffect, useReducer, useState} from "react";
import {loadingReducer} from "../components/shared/LoadingReducer";
import axios from "axios";

const initialState = {
    isLoading: true
};
  
export const useHttpGetRequest = (URL) => {  
    const [pokemons , setPokemons] = useState([])
    const [state, dispatch] = useReducer(loadingReducer, initialState);
    
    useEffect(() => {
        dispatch({type:'LOADING'})
        axios
        .get(URL)
        .then((res) => {
            dispatch({type:'FINISHED'})
            setPokemons(res.data.results)
        })
        .catch((err) => console.error)
    },[])
  
    return {pokemons , isLoading: state.isLoading}
  
}