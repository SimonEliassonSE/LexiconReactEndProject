import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useEffect, useState, useContext } from "react";
import Auth from "../Context/Auth";
import { login } from "../services/AuthApi";


const Login = ({history}) => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = ({currenTarget}) => {
    const { name, value } = currenTarget;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit =async event => {
    event.preventDefault();

    try{
      const response = await login(user);
      setIsAuthenticated(response);
      history.replace('./Homepage')
      console.log(response);
    }catch ({response}){
      console.log(response);
    }
 
  }

useEffect(()=>{
  if(isAuthenticated){
    history.replace('./Homepage');
  }
 
}, [history, isAuthenticated]);


  return (
    <div id="Login">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="email">Your Email</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="password">Password</label>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      
      </form>
      <div className="text-center">
          <p>
            Not a member? <a href="http://localhost:3000/Signup">Register</a>
          </p>
          </div>
    </div>
  );
};

export default Login;
