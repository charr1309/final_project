// import './App.css';
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./MainNav.css";
import "./TopNav.css";
import logo from "./logo.png";
import Login from "./Login";
import { routes } from "./views/Index";
import "./Login.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div>
        <TopNav />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <img src={ logo } alt="logo" />
      </div>
      <div>
        <MainNav />
      </div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact path={route.path}>
              {<route.Component />} {/*just calling a function accept use angle brackets*/}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
