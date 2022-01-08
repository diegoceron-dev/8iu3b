import { Link, useParams } from "react-router-dom";
import { Badge, Card, CardContent, CardMedia, Container, CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { getPokemon } from "../helpers/useHttpGetRequest";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  titlePokemon: {
    textTransform: "uppercase"
  },
  titleMovement: {
    textTransform: "uppercase",
    fontSize: "8px"
  },
}));

export default function Pokemon() {
  const classes = useStyles();
  let { name } = useParams();
  const { filteredPokemon, isLoading } = getPokemon(name)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/* Detail */}
            <Grid item xs={4} sm={12} md={4}>
              <Card className={classes.card} >
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    {filteredPokemon.name}
                  </Typography>
                  <img src={filteredPokemon.image} width={'256px'} alt="Cargando..." />

                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    Tipos
                  </Typography>
                  {
                    filteredPokemon.types.map((element, index) => (
                      <div key={index}>
                        <Badge color="primary" variant="dot">
                          <Typography className={classes.titlePokemon}> {element.type.name}</Typography>
                        </Badge>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </Grid>
            {/* Movement */}
            <Grid item xs={8} sm={12} md={8}>
              <Card className={classes.card} >
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    Movimientos
                  </Typography>
                  <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                      {
                        filteredPokemon.moves.map((element, index) => (
                          <Grid item key={index} xs={12} sm={3} md={2}>
                            <Card className={classes.card}>
                              <CardContent className={classes.cardContent}>
                                <Badge color="secondary" variant="dot">
                                  <Typography className={classes.titleMovement}>
                                    <Link to={`/move/${element.move.name}`}>
                                      {element.move.name}
                                    </Link>
                                  </Typography>
                                </Badge>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Container>
                </CardContent>
              </Card>

            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};