import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import { Container } from "@material-ui/core";

import Navbar from "./components/shared/Navbar";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Movement from "./pages/Movement"
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar>
      </Navbar>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemon/:id">
            <Movement />
          </Route>
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>
          <Route path="/terms-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>

    </BrowserRouter>
  );
};

export default Router;
