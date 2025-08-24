import TopNav from "./TopNav.jsx";
import MainNav from "./MainNav.jsx";
import "./MainNav.css";
import "./TopNav.css";
import logo from "./logo.png";
import Login from "./Login.jsx";
import { routes } from "./views/Index.jsx";
import "./Login.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/mr-postcard-website">
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
            >
            </Route>
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;