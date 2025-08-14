import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./MainNav.css";
import "./TopNav.css";
import logo from "./logo.png";
import Login from "./Login";
import { routes } from "./views/Index";
import "./Login.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div>
          <TopNav />
        </div>
        <div>
          <Login />
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <MainNav />
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route 
              key={index}
              exact 
              path={route.path}
            >
              <route.Component />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;