import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import ToDoApp from "./containers/ToDoApp/ToDoApp";
import BurgerApp from "./containers/BurgerApp/BurgerApp";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/todo" exact component={ToDoApp}/>
        <Route path="/burger" exact component={BurgerApp}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
