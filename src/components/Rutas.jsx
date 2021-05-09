import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AcercaDe from "./AcercaDe";
import Pokemon from "./Pokemon";
import NavLinks from "./NavLinks";

const Rutas = () => {
  return (
    <div>
      <Router>
        <NavLinks />
        <Switch>
          <Route exact path="/">
            Principal
          </Route>
          <Route exact path="/pokemons" component={Pokemon} />
          <Route exact path="/acercade">
            <AcercaDe />
          </Route>

          <Route path="*">Error 404, not found - No existe, no insista</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
