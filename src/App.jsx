import TopNav from "./TopNav.jsx";
import MainNav from "./MainNav.jsx";
import "./MainNav.css";
import "./TopNav.css";
import Login from "./Login.jsx";
import { routes } from "./views/Index.jsx";
import "./Login.css";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <div>
          <TopNav />
        </div>
        <div>
          <Login />
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
    </HashRouter>
  );
}

export default App;