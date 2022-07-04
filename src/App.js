import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import ToDoApp from "./containers/ToDoApp/ToDoApp";
import BurgerApp from "./containers/BurgerApp/BurgerApp";
import NumbersApp from "./containers/NumbersApp/NumbersApp";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/todo" exact component={ToDoApp}/>
        <Route path="/burger" exact component={BurgerApp}/>
        <Route path="/numbers" exact component={NumbersApp}/>
        <Route render={() => <h1 className="text-white p-5">Page is not found !</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
