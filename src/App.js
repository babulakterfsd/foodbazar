import About from "./About/About";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Restaurant from "./Restaurant/Restaurant";
import NotFound from "./NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleFood from "./Restaurant/Meals/SingleFood/SingleFood";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/Restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/SingleFood/:idMeal">
            <SingleFood></SingleFood>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
