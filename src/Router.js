import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import { Container } from "@material-ui/core";

import Navbar from "./components/shared/Navbar";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Move from "./pages/Move"
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import Footer from "./components/shared/Footer"

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
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>
          <Route path="/move/:name">
            <Move />
          </Route>
          <Route path="/terms-conditions">
            <TermsAndConditions />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
