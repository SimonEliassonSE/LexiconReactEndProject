
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
  
<div class="form-outline mb-4">
<input type="email" id="form3Example3cg" class="form-control form-control-lg" />
<label class="form-label" for="form3Example3cg">Your Email</label>
</div>

<div class="form-outline mb-4">
<input type="password" id="form3Example4cg" class="form-control form-control-lg" />
<label class="form-label" for="form3Example4cg">Password</label>
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




