

import "bootstrap/dist/css/bootstrap.min.css"

import React from "react";


export class Signup extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    
    email: '',
    password: '',
    name: ''
        };

    }

    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }
  
    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }
  
    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }
  
  
componentDidMount(){

}

onSubmitSignIn = () => {
  fetch('http://localhost:3000/Signup', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    })
  })
    .then(response => response.json())
    .then(user => {
      if (user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
}

render(){
    const{
        
    } =this.state;

    return (


  <div id="signup"> 
<h2 class="text-uppercase text-center mb-5">Create an account</h2>

<form>

<div class="form-outline mb-4">
<input class="form-control form-control-lg"
   type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}  />
<label class="form-label" for="form3Example1cg">Your Name</label>
</div>

<div class="form-outline mb-4">
<input  class="form-control form-control-lg"
  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange} />
<label class="form-label" for="form3Example3cg">Your Email</label>
</div>

<div class="form-outline mb-4">
<input  class="form-control form-control-lg"
 type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}  />
<label class="form-label" for="form3Example4cg">Password</label>
</div>
<div class="form-outline mb-4">
<input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
<label class="form-label" for="form3Example4cdg">Repeat your password</label>
</div>

<div class="form-check d-flex justify-content-center mb-5">
<input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
<label class="form-check-label" for="form2Example3g">
I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
</label>
</div>

<div class="d-flex justify-content-center">
<button type="button"
class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
onClick={this.onSubmitSignIn}>Register</button>
</div>

<p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="http://localhost:3000/Login"
class="fw-bold text-body"><u>Login here</u></a></p>

</form>
</div>


);

  }
}


