import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./MainNav.css";
import "./TopNav.css";
import logo from "./logo.png";
import Login from "./Login";
import { routes } from "./views/Index";
import "./Login.css";
import { Routes, Route } from "react-router-dom";

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
        <img src={logo} alt="logo" />
      </div>
      <div>
        <MainNav />
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index}
            path={route.path} 
            element={<route.Component />} 
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;