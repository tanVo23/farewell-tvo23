import Home from './Home';
import NavBar from '../navigation/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header'
import People from './People';
import AddPerson from './AddPerson';
import Footer from '../navigation/Footer';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
    <NavBar />
    <Header />
    <Switch>
   
    <Route exact path="/about">
      <About />
    </Route>
     <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/people">
      <People />
    </Route>
    <Route exact path="/addperson">
      <AddPerson />
    </Route>
      </Switch>
      </Router>
    
    <Footer />
    </div>
  );
}

export default App;
