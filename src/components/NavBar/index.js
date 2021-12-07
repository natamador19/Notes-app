import { Link,useMatch } from "react-router-dom";
import {MdHome,MdLogin,MdDashboard, MdAddCircle, MdListAlt} from "react-icons/md";
import {useSelector} from 'react-redux';

const NavBar=()=>{

    const navStylesClass = {
    dashboard: useMatch({ path: "/", end: true }) ? "active" : "",
    list: useMatch({ path: "/list", end: true }) ? "active" : "",
    new: useMatch({ path: "/newNote", end: true }) ? "active" : ""
  }
    const menu = (
       
        <ul className="d-flex justify-content-around "> 
            <li className="mx-4 my-2 list-unstyled"  ><Link className="text-light text-decoration-none" to="/dashboard"><MdDashboard/></Link></li>
            <li className="mx-4 my-2 list-unstyled"><Link  className="text-light text-decoration-none" to="/list"><MdListAlt/>Notas</Link></li>
            <li className="mx-4 my-2 list-unstyled"><Link  className="text-light text-decoration-none" to="/newNote"><MdAddCircle/> Nuevo</Link></li>
        </ul>
    );
    return(
        <nav className="navbar navbar-light w-100 text-light d-flex position-absolute bottom-0 bg-success bg-gradient">
            {menu}
        </nav>
    );
}

export default NavBar;
