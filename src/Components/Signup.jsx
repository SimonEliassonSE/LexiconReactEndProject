import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { useState, useContext } from "react";
import Axios from "axios";
import {UserAuthenticator, CurrentlyLoggedin} from "../index"
import { Navigate } from "react-router-dom";

// export class Signup extends React.Component {

function Signup() 
{
  const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthenticator);
  const {currentlyLoggedIn, setcurrentlyLoggedIn} = useContext(CurrentlyLoggedin);

  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [enteredPasswordRepeat, setenteredPasswordRepeat] = useState("");

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  console.log(enteredUserName);

  const passwordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };
  console.log(enteredPassword);

  const repeatPasswordChangeHandler = (event) => {
    setenteredPasswordRepeat(event.target.value);
  };
  console.log(enteredPasswordRepeat);

  function validateUserInput (){
    Axios.post(`https://localhost:7117/api/IdentityAPI`, {
      UserName: enteredUserName,
      Password: enteredPassword,
      })
      .then(function (response) {
        console.log(response);
        if(response.status == 400)
        {
          console.log("Wrong password!")
        }

        else if(response.status == 200)
        {
          setIsAuthenticated(true);
          const c = {
            UserName: enteredUserName,
            Password: enteredPassword,
          }
          setcurrentlyLoggedIn([c])
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredPassword === enteredPasswordRepeat)
    {
      validateUserInput();
    }  
     else 
    {
        console.log("The two password's did not match!! Try again")
    }
};
// console.log(isAuthenticated);
console.log(currentlyLoggedIn);
if(isAuthenticated == false)
{
return (
<div id="signup"> 
  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

  <form onSubmit={submitHandler}>
    <div className="form-outline mb-4">
      <input  className="form-control form-control-lg"
                        type="email"
                        name="email-address"
                        id="email-address"
                        value={enteredUserName}
                        onChange={userNameChangeHandler}
                        />
      <label className="form-label" >Your Email</label>
    </div>

    <div className="form-outline mb-4">
      <input  className="form-control form-control-lg"
                        type="password"
                        name="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        />
      <label className="form-label" >Password</label>
    </div>

    <div className="form-outline mb-4">
      <input className="form-control form-control-lg" 
                        type="password"
                        name="Repeat Password"
                        id="RepPassword"
                        value={enteredPasswordRepeat}
                        onChange={repeatPasswordChangeHandler}
                        />
      <label className="form-label" >Repeat your password</label>
    </div>

    <div className="form-check d-flex justify-content-center mb-5">
      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
      <label className="form-check-label" >
      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
      </label>
    </div>

    <div className="d-flex justify-content-center">
      <button type="submit" 
      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
    </div>

    <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="http://localhost:3000/Login"
    className="fw-bold text-body"><u>Login here</u></a></p>
  </form>
</div>

);
}
else if (isAuthenticated == true) {
  return (
    <Navigate to="/"/>
  );
}
}

export default Signup;



