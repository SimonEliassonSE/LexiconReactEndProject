import '../App.css';
import { Link } from 'react-router-dom';
import Auth from '../Context/Auth';
import { useContext } from 'react';
import { logout } from '../services/AuthApi';



export const NavigationBar = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

const handleLogout = () =>{
   logout();
   setIsAuthenticated(false);
}



 

return(
    <nav className="navbar navbar-expand-lg bg-light">

      <img src={require('../Image/Logo.PNG')} alt="logo" width="60" height="50" />

        <ul className="navbar-nav">

          <li className="nav-item- m-1">
          <Link className="btn btn-light btn_outline-primary" to = "/">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Products">
            <i className="fa fa-shopping-bag"></i> Products 
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Cart">
            <i className="fa fa-shopping-cart"></i> Cart
          </Link>
          {(!isAuthenticated && (
            <>
          <Link className="btn btn-light btn_outline-primary" to = "/Login">
            <i className="fa fa-user"></i> Login
          </Link>
       
          <Link className="btn btn-light btn_outline-primary" to = "/Signup">
            <i className="fa fa-user-plus"></i> Signup
          </Link>
          </>
          )) || (
            <>
               
          <Link className="btn btn-light btn_outline-primary" to = "/MyAccount">
            <i className="fa fa-user"></i> My account
          </Link>
          <button className="btn btn-light btn_outline-primary" onClick={handleLogout}>
          <i className="fa fa-"></i> Logout
        </button>
        </>
          )}
          </li>
         </ul>     
      </nav>
    )
        }