import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserAuthenticator, CurrentlyLoggedin, UserArray } from "../index";
import Auth from "../Context/Auth";
import { login } from "../services/AuthApi";
import Axios from "axios";


function Login() 
{
  const {userList, setUserList} = useContext(UserArray)
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

  // const handleSubmit =async event => {
  //   event.preventDefault();    

  //   useEffect(() => {
  //     const getCategorys = async () => {
  //       await Axios.post("https://localhost:7117/api/CategoryAPI/categories")
  //         .then((res) => {
  //           setCategoryList(res.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };
  //     getCategorys();
  //   }, []);
  //   console.log(CategoryList);
 
  // }

  const submitHandler = async (event) => {
    event.preventDefault();
// Check if the entered username exist in users array 

    userList.forEach((el) => {
      console.log(el) 
      if(el.email == enteredUserName)
      {
         Axios.post(`https://localhost:7117/api/PasswordHandlerAPI`, {
          userName: enteredUserName,
          password: enteredPassword,
        },
        console.log(enteredUserName, enteredPassword))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }     
    });


      // await Axios
      // .post(`https://localhost:7117/api/PasswordHandlerAPI`, {
      //   // UserName: enteredUserName,
      //   Password: enteredPassword      
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // console.log(enteredPassword)
      // if(userStatus === null){
      //   setUserStatus(1)
      // }

      // else {
      //   let counter = userStatus;
      //   ++counter;
      //   setUserStatus(counter);
      //   // console.log(userStatus);
      // }


    // else 
    // {
    //   console.log("Wrong Username")
    // }

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const [user, setUser] = useState({
  //   email: "",
  //   password: ""
  // })

  // const loginVerification = {}

  // We need to post the password to MVC and encrypt it ande check if it exists, if it dose the backend should return true, here we can use are UserAuthenticator to set true or false. 

  // const handleChange = ({currenTarget}) => {
  //   const { name, value } = currenTarget;

  //   setUser({ ...user, [name]: value });
  // }

  // const handleSubmit =async event => {
  //   event.preventDefault();

  //   try{
  //     const response = await login(user);
  //     setIsAuthenticated(response);
  //     history.replace('./Homepage')
  //     console.log(response);
  //   }catch ({response}){
  //     console.log(response);
  //   }
 
  // }

// useEffect(()=>{
//   if(isAuthenticated){
//     history.replace('./Homepage');
//   }
 
// }, [history, isAuthenticated]);
};
const checkLogin = isAuthenticated
const checkLogin2 = currentlyLoggedIn
console.log(checkLogin, currentlyLoggedIn);

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
};


export default Login;
