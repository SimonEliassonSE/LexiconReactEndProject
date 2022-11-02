
import './App.css';
import {Homepage} from './Components/Homepage';
import {Products} from './Components/Products';
import {NavigationBar} from './Components/NavigationBar';
import {Cart} from './Components/Cart';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="App">
     <NavigationBar></NavigationBar>
      <Routes>

        <Route index path='/'  element={ <Homepage/> } />
        <Route path='/Products' element={ <Products/> }/>
        <Route path='/Cart'  element={ <Cart/> } />
        
      
      </Routes>
    </div>
    
  );
}

export default App;
