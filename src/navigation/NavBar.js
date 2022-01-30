import { NavLink } from "react-router-dom";
//import Home from "../components/Home";


function NavBar(){

    return(
        <div>
      
          <NavLink 
          exact
          to="/"
          >
              Home
          </NavLink>

          <NavLink 
          exact
          to="/about"
          >
             About
          </NavLink>


          <NavLink 
          exact
          to="/people"
          >
             People
          </NavLink>


          <NavLink 
          exact
          to="/addperson"
          >
             AddPerson
          </NavLink>



    
       </div>
    );
}

export default NavBar