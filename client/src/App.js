import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Jokes_Favorit from "./Components/Jokes_Favorit/Jokes_Favorit";
import NewJokes from "./Components/NewJokes/NewJokes";

function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <hr></hr>
      <Switch>
        <Route path="/new_jokes">
          <NewJokes />
        </Route>
        <Route path="/jokes_favorit">
          <Jokes_Favorit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
