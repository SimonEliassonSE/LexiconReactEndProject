import React, { useContext } from 'react';
import { Context } from './Context';
import { Link } from "react-router-dom";

const Logout = ()  => {
  const { user, logout } = useContext(Context);

  return (
    
    <div>
    <br/>
      <h1>Logout confirmed {user.name}!</h1>
      <Link to="/"><button onClick={logout}>Loggin again</button></Link>  
      </div> 
        
  
  );
}

export default Logout;