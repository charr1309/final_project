// import './App.css';
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./MainNav.css";
import "./TopNav.css";
// const Index = require('./views/Index.js');
// import Index from './views';
import logo from "./logo.png";
import Login from "./Login";
import Home from "./views/Home";
import Contact from "./views/Contact";
import BusinessCards from "./views/BusinessCards";
import Calender from "./views/Calender";
import FullColor from "./views/FullColor";
import Holiday from "./views/Holiday";
import Mailing from "./views/Mailing";
import Newsletter from "./views/Newsletter";
import RealEstate from "./views/RealEstate";
import SiteNewsletter from "./views/SiteNewsletter";
import Sports from "./views/Sports";
import Websites from "./views/Websites";
import About from "./views/About.js";
import "./Login.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
      <Switch>
        <Route exact path ="/" render={() => <Home />} />
        <Route exact path ="/Contact" render={() => <Contact />} />
        <Route exact path ="/BusinessCards" render={() => <BusinessCards />} />
        <Route exact path ="/Calender" render={() => <Calender />} />
        <Route exact path ="/FullColor" render={() => <FullColor />} />
        <Route exact path ="/Holiday" render={() => <Holiday />} />
        <Route exact path ="/Mailing" render={() => <Mailing />} />
        <Route exact path ="/Newsletter" render={() => <Newsletter />} />
        <Route exact path ="/RealEstate" render={() => <RealEstate />} />
        <Route exact path ="/SiteNewsletter" render={() => <SiteNewsletter />} />
        <Route exact path ="/Sports" render={() => <Sports />} />
        <Route exact path ="/Websites" render={() => <Websites />} />
        <Route exact path ="/About" render={() => <About />} />



      </Switch>
      
    </div>
  );
}

export default App;
