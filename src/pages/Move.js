import { useParams } from "react-router-dom";
import { Card, Container, CssBaseline, Grid, makeStyles, Typography, CardContent, Badge } from "@material-ui/core";
import { getMove } from "../helpers/useHttpGetRequest";
import React from "react";
import PokeBreadcrumbs from "../components/shared/PokeBreadcrumbs";

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

const Move = () => {
  const classes = useStyles();
  let { name } = useParams();
  const { filteredMove, isLoading } = getMove(name)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardBreadcumbs} maxWidth="md">
          <PokeBreadcrumbs items={[{ name: 'home', url: '/' }]}></PokeBreadcrumbs>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className={classes.card} >
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    Name: {filteredMove.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    Acurrency: {filteredMove.accuracy}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.titlePokemon}>
                    Power: {filteredMove.power}
                  </Typography>
                  {
                    filteredMove.effects.map((element, index) => (
                      <div key={index}>
                        <Badge color="primary" variant="dot">
                          <Typography className={classes.titlePokemon}>effect: {element.effect}</Typography>
                        </Badge>
                        <Badge color="secondary" variant="dot">
                          <Typography className={classes.titlePokemon}>short effect: {element.short_effect}</Typography>
                        </Badge>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Move;
