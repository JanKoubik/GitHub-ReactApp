import Home from "./Home";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import NavBar from "./navBar";
import OnlyOneItem from "./onlyOneItem";
import Page404 from "./Page404";


function App() {
  return (
    <div className="App">
      <Router>

          <NavBar />

        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/data/:id"}>
            <OnlyOneItem />
          </Route>
          <Route exact path={"*"}>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
