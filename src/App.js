import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import ToDo from "./containers/ToDo/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/todo" exact component={ToDo}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
