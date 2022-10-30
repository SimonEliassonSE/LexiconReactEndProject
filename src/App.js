
import './App.css';
import {Homepage} from './Components/Homepage';
import {Products} from './Components/Products';
import {Cart} from './Components/Cart';
import { Route,Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <nav className="navbar navbar-expand-lg bg-light">
   <img src={require('./Image/Logo.PNG')} alt="logo" width="60" height="50" />
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

  
  </li>

</ul>

      </nav>
      <Routes>
        <Route index path='/'  element={ <Homepage/> } />
        <Route path='/Products' element={ <Products/> }/>
        <Route path='/Cart'  element={ <Cart/> } />
      
       

        
      </Routes>
    
    </div>
  );
}

export default App;
