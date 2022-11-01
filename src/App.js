
import './App.css';
import {Homepage} from './Components/Homepage';
import {Products} from './Components/Products';
import {NavigationBar} from './Components/NavigationBar';
import {Cart} from './Components/Cart';
import { Route, Routes } from 'react-router-dom';
import {Login}  from './Components/Login';
import {Signup}  from './Components/Signup';

function App() {


  return (
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
  );
}

export default App;
