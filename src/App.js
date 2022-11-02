
import './App.css';
import {Homepage} from './Components/Homepage';
import {Products} from './Components/Products';
import {NavigationBar} from './Components/NavigationBar';
import {Cart} from './Components/Cart';
import { Route, Routes } from 'react-router-dom';
import Login  from './Components/Login';
import {Signup}  from './Components/Signup';
import { useState } from 'react';
import {hasAuthenticated} from './services/AuthApi';
import Auth from './Context/Auth';
import AuthenticatedRoute from './Components/AuthenticatedRoute';

function App() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());


  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
    <div className="App">
     <NavigationBar></NavigationBar>
      <Routes>

        <Route index path='/'  element={ <Homepage/> } />
        <Route path='/Products' element={ <Products/> }/>
        <Route path='/Cart'  element={ <Cart/> } />
        <Route path='/Login'  element={ <Login/> } />
        <Route path='/Signup'  element={ <Signup/> } />
      
      
      </Routes>
      <div className='footer'>Ismet Catovic</div>
    </div>
    </Auth.Provider>
  );
}

export default App;
