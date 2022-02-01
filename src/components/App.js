import Home from './Home';
import NavBar from '../navigation/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header'
//import People from './People';
import AddPerson from './AddPerson';
import Footer from '../navigation/Footer';
import About from './About';
import { useEffect, useState } from 'react';
import PeopleContainer from '../containers/PeopleContainer';



function App() {

  const [people, setPeople] = useState([])


useEffect(() => {
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then((data) => {
    setPeople(data)
  })
  .catch(error => console.log(error))
}, []);

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
      <PeopleContainer people={people} />
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
