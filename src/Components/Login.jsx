import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useState, useContext } from "react";
import { UserAuthenticator, CurrentlyLoggedin, UserArray } from "../index";
import Axios from "axios";
import { Navigate } from "react-router-dom";

function Login() 
{
  const {userList } = useContext(UserArray)
  const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthenticator);
  const {currentlyLoggedIn, setcurrentlyLoggedIn} = useContext(CurrentlyLoggedin);

  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  console.log(enteredUserName);

  const passwordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };
  console.log(enteredPassword);

  function validateUserInput (){
    Axios.post(`https://localhost:7117/api/PasswordHandlerAPI`, {
        userName: enteredUserName,
        password: enteredPassword,
      })
      .then(function (response) {
        console.log(response);
        if(response.data == "Failed")
        {
          console.log("Wrong password!")
        }

        else if(response.data == "Success")
        {
          setIsAuthenticated(true);      
          setcurrentlyLoggedIn([enteredUserName, enteredPassword])    
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const submitHandler = (event) => {
    event.preventDefault()
    userList.forEach((el) => {
      console.log(el) 
      if(el.email == enteredUserName)
      {
        console.log("Match found, validating input!")
        validateUserInput();
        // const activeUser = {
        //   LoggedinUsername: enteredUserName,
        //   LoggedinPassword: enteredPassword
        // }
        // setcurrentlyLoggedIn([enteredUserName, enteredPassword])
        // console.log(currentlyLoggedIn)
      }     
      else {
        console.log("No match found!")
      }
    });
      
};
// console.log(isAuthenticated);
console.log(currentlyLoggedIn);
  if(isAuthenticated == false)
  {
  return (    
    <div id="Login">
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={enteredUserName}
            onChange={userNameChangeHandler}
            className="form-control form-control-lg"
          />
          <label className="form-label" htmlFor="email">Your Email</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            className="form-control form-control-lg"
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
}else if (isAuthenticated == true)
{
  return(
  <Navigate to="/"/>
  // window.history.replaceState(null, "New Page Title", "http://localhost:3000/")
  )
};
};



export default Login;
