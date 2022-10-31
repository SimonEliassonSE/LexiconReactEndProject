
import "bootstrap/dist/css/bootstrap.min.css"


import React from "react";


export class Login extends React.Component {

    
  

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
      
       
   <div id="Login">  
   <form >
   
       <h3 >Sign In</h3>
       
       <div>
         <label>Email address</label>
         <input
           type="email"
           className="form-control mt-1"
           placeholder="Enter email"
         />
         </div>

       <div >
         <label>Password</label>
         <input
           type="password"
           className="form-control mt-1"
           placeholder="Enter password"
         />

       </div>
          
       
       <div >
         <button type="submit" className="btn btn-primary">
           Submit
         </button>
       </div>

    

    
     <div class="text-center">
  <p>Not a member? <a href="http://localhost:3000/Signup">Register</a></p>
  </div>

  

</form>
   
 </div>
        );
            
    }
}




