import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListPokemon } from "../components/ListPokemon";
import PaginationPokedex from '../components/Pagination';
import { useContext } from 'react';
import { AppContext } from '../provider';
import { LinearProgress, Typography } from '@material-ui/core';
import { getPokemonList } from '../helpers/useHttpGetRequest'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  titlePokemon: {
    textTransform: "uppercase",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardBreadcumbs: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
}));

export default () => {
  const classes = useStyles();
  const [state, setState] = useContext(AppContext)
  const { count, isLoading, filteredPokemons } = getPokemonList(state.page ? state.page : 1)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardBreadcumbs} maxWidth="md">
          <Typography className={classes.titlePokemon} color="textPrimary">
            Home
          </Typography>
        </Container>
        <Container className={classes.cardGrid} maxWidth="xl">
          {isLoading && "Cargando..."}
          {isLoading && <LinearProgress color="primary" />}
          <Container maxWidth="sm">
            <PaginationPokedex count={count}></PaginationPokedex>
          </Container>
          <ListPokemon filteredPokemons={filteredPokemons}></ListPokemon>
          {isLoading && "Cargando..."}
          {isLoading && <LinearProgress color="primary" />}
          <Container maxWidth="sm">
            <PaginationPokedex count={count}></PaginationPokedex>
          </Container>
        </Container>
      </main>
    </React.Fragment>
  );
}