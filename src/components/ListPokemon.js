import { Card, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import whoPokemon from '../assets/who-pokemon.png'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  titlePokemon: {
    textTransform: "uppercase"
  },
}));

export const ListPokemon = (props) => {

  const classes = useStyles();

  return <>
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.filteredPokemons.map((pokemon, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card className={classes.card} href={`/pokemon/${pokemon.name}`}>
              <CardMedia
                className={classes.cardMedia}
                image={whoPokemon}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                  <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
}