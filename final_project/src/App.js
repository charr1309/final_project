// import './App.css';
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./MainNav.css";
import "./TopNav.css";
import headerImage from "./headerImage.png";
import logo from "./logo.png";
import Login from "./Login";
import "./Login.css";
function App() {
  return (
    <div className='container'>
      <div>
        <TopNav />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <img src={logo} />
      </div>
      <div>
        <MainNav />
      </div>
      <div>
        <img src={headerImage} />
      </div>
    </div>
  );
}

export default App;
