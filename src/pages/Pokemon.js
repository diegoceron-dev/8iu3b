import { useParams } from "react-router-dom";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Pokemon() {
  const classes = useStyles();

  let { name } = useParams();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {name}
        </Container>
      </main>
    </React.Fragment>
  );
};