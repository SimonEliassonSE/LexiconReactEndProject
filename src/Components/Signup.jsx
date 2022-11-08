

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
<h2 className="text-uppercase text-center mb-5">Create an account</h2>

<form>


{/* 
---> we dont need Name to create a User, we only need Email (UserName) & Password!
<div className="form-outline mb-4">
<input className="form-control form-control-lg"
   type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}  />
<label className="form-label" >Your Name</label>
</div> */}

<div className="form-outline mb-4">
<input  className="form-control form-control-lg"
  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange} />
<label className="form-label" >Your Email</label>
</div>

<div className="form-outline mb-4">
<input  className="form-control form-control-lg"
 type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}  />
<label className="form-label" >Password</label>
</div>
{/* 
for="form3Example1cg"
for="form3Example3cg"
for="form3Example4cg" 
for="form3Example4cdg"
for="form2Example3g"*/}
<div className="form-outline mb-4">
<input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
<label className="form-label" >Repeat your password</label>
</div>


<div className="form-check d-flex justify-content-center mb-5">
<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
<label className="form-check-label" >
I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
</label>
</div>

<div className="d-flex justify-content-center">
<button type="button"
className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
onClick={this.onSubmitSignIn}>Register</button>
</div>

<p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="http://localhost:3000/Login"
className="fw-bold text-body"><u>Login here</u></a></p>

</form>
</div>


);

  }
}


