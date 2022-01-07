import React, { useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListPokemon } from "../components/ListPokemon";
import PaginationPokedex from '../components/Pagination';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../provider';
import { LinearProgress } from '@material-ui/core';
import {getPokemonList} from '../helpers/useHttpGetRequest'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default () => {
  const classes = useStyles();
  const [state, setState] = useContext(AppContext)
  const {count, isLoading, filteredPokemons} = getPokemonList(state.page ? state.page : 1)

  useEffect(() => {
    console.log(state.page)
  },[state])

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          {isLoading && "Cargando..."}
          {isLoading && <LinearProgress color="primary" />}
          <PaginationPokedex count={count}></PaginationPokedex>
          <ListPokemon filteredPokemons={filteredPokemons}></ListPokemon>
        </Container>
      </main>
    </React.Fragment>
  );
}