import Home from "./Home";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import NavBar from "./navBar";
import OnlyOneItem from "./onlyOneItem";


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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
