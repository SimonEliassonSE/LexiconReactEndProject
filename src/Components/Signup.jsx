

import "bootstrap/dist/css/bootstrap.min.css"

import React from "react";


export class Signup extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    
        };

    }
   
       
componentDidMount(){
   
}

render(){
    const{
        
    } =this.state;
       
    
        return (
               
    <div id="signup">

  
    <h3>Sign Up</h3>


    <form >
  
        
        <div>
          <label>Full Name</label>
          <input
            type="Name"
            className="form-control mt-1"
            placeholder="Enter FullName"
          />
        </div>

        <div >
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
          </div>


        <div>
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="confirm password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

      

    </form>
    
  </div>
        );
            
    }
}


