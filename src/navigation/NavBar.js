import {NavLink} from "react-router-dom";
import Home from "../components/Home";
function NavBar(){

    return(
        <div>
      <NavLink exact to="/">
          < Home/>

      </NavLink> 
       </div>
    );
}

export default NavBar