import { Link } from "react-router-dom";
import {MdHome,MdLogin} from "react-icons/md";
import {useSelector} from 'react-redux';

const NavBar=()=>{
    const {islogged}=useSelector(({security})=>security);
    const menu = isLogged?(
        <ul>
            <li><Link to="/home"><MdHome/></Link></li>
            <li><Link to="/new">NEW</Link></li>
        </ul>
    ):(
        <ul>
            <li><Link to="/"><MdHome/> Splash</Link></li>
            <li><Link to="/login"><MdLogin/> Login</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
        </ul>
    );
    return(
        <nav>
            {menu}
        </nav>
    );
}

export default NavBar;
