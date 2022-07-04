import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
