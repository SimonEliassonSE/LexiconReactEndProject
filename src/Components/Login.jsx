import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useState, useContext } from "react";
import { UserAuthenticator, CurrentlyLoggedin, UserArray, CustomerData, CustomerCreditcardData, CustomerArray, CreditcardArray } from "../index";
import Axios from "axios";
import { Navigate } from "react-router-dom";

// We need to check if current loggedin user hase CustomerData & CreditCardData, if theye do we need to add it to are CustomerData Array and CustomerCreditcardData Array.
// We will have to import 4 context, customerArray (contains customerdata from backend), creditcardArray (contains creditcarddata from backend) and the 2 empty arrays

function Login() 
{
  const {userList } = useContext(UserArray)
  const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthenticator);
  const {currentlyLoggedIn, setcurrentlyLoggedIn} = useContext(CurrentlyLoggedin);
  const {customerList, setCustomerList} = useContext(CustomerArray);
  const {creditcardList, setCreditcardList} = useContext(CreditcardArray);
  const {customerData, setCustomerData} = useContext(CustomerData)
  const {customerCreditcardData, setCustomerCreditcardData} = useContext(CustomerCreditcardData)


  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [tempCreditcard, setTempCreditcard] = useState([]);

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  // console.log(enteredUserName);

  const passwordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };
  // console.log(enteredPassword);

  let tempCustomerId = "";

  // Checks if the current user has customer data or not, if user has customer data we add it to customerData (temp array)
  function findCustomerData() {    
    customerList.forEach((el) => {
      console.log(el) 
      if(el.email == enteredUserName)
      {
        console.log("customer data set to match!")
        setCustomerData([el]); 
        tempCustomerId = el;      
      }     
      // else {
      //   console.log(el.email)
      // }
    });   
  }

  async function findCustomerCreditcardData() {    
    await creditcardList.forEach((el) => {
      console.log(el) 
        if(el.customerId == tempCustomerId.customerId)
        {
          console.log("customer data set to match!")
          setCustomerCreditcardData([...customerCreditcardData, el])              
        }
    });      
  }

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
          // if the userName & password exist in backend we set isAuthenticated to true, we add the password and username to curerentlyLoggedin and use this -->
          // info to get customer & creditcard data if the user has any (recently created users wont have any customer or creditcard data!)
          setIsAuthenticated(true);
          const c = {
            UserName: enteredUserName,
            Password: enteredPassword,
          }      
          setcurrentlyLoggedIn([c]);
          findCustomerData(); 
          findCustomerCreditcardData(); // This function dose only add 1 creditcard, 1 user can have several creditcards. If finished in time fix this. 
        }

      })
      .catch(function (error) {
        console.log(error);
      });   
  }

  const submitHandler = (event) => {
    event.preventDefault()
    userList.forEach((el) => {
      // console.log(el) 
      if(el.email == enteredUserName)
      {
        console.log("Match found, validating input!")
        validateUserInput();
      }     
      // else {
      //   console.log("No match found!")
      // }
    });      
};

// if(customerData.length != 0)
// {
//   creditcardList.forEach((el) => {
//     console.log(el) 
//       if(el.customerId == tempCustomerId.customerId)
//       {
//         console.log("customer data set to match!")
//         setTempCreditcard([...tempCreditcard, el]);
//         // setCustomerCreditcardData([el]);        
//       }
//   });      
// }

console.log("creidcardList", creditcardList);
console.log("customerData List In submit",customerData);
console.log("customerCreditcardData List In submit ",customerCreditcardData);   
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
