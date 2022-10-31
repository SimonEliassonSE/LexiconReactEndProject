import '../App.css';
import { Link } from 'react-router-dom';



export const NavigationBar = () => {


return(
    <nav className="navbar navbar-expand-lg bg-light">

      <img src={require('../Image/Logo.PNG')} alt="logo" width="60" height="50" />

        <ul className="navbar-nav">

          <li className="nav-item- m-1">
          <Link className="btn btn-light btn_outline-primary" to = "/">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Products">
            <i class="fa fa-shopping-bag"></i> Products 
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Cart">
            <i class="fa fa-shopping-cart"></i> Cart
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Login">
            <i class="fa fa-user"></i> Login
          </Link>
          <Link className="btn btn-light btn_outline-primary" to = "/Signup">
            <i class="fa fa-user-plus"></i> Signup
          </Link>
          </li>

         </ul>

     
      </nav>
    )
        }