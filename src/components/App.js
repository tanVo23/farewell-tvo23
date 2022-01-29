import Home from './Home';
import NavBar from '../navigation/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../navigation/Header'


function App() {
  return (
    <div className="App">
      
      <Router>
    <NavBar />
    <Header />
    <Switch>
    <Route path="/">
      <Home />
    </Route>
      </Switch>
      </Router>
    
    <Footer />
    </div>
  );
}

export default App;
