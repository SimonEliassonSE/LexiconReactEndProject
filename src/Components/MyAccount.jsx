import React from "react";
import imageExample from "../Image/Logo.PNG";
import cartItems from "./Data/ismet3.json"
import { Link } from "react-router-dom";

export class MyAccount extends React.Component {

    
  

    constructor(props) {
        super(props)
        
            this.state = {
    
        };

    }
   
       
componentDidMount(){
   
}

render(){
    const{
        
    } = this.state;
       
    const addressPage = () => {

    }
    
        return (
            <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">My account</h2>
                </div>

             
                <div className="px-3 d-flex justify-content-start">You have not added any personal details.
                   
                </div>

                <div className="px-3 d-flex justify-content-start">
                    <a href="#"> Change password</a>
                </div>

                <div className="px-3 d-flex justify-content-start">
                    <a href="#"> Log out </a>
                </div>

                <div className="px-3 d-flex justify-content-start">

                </div>

                <div className="px-1 d-flex justify-content-between">
                    <div className="d-flex flex-column" style={{marginLeft: "12px"}}>
                        <Link className="btn btn-primary my-1" to={`/AddDetails/`}>Add personal details</Link>
                        <Link className="btn btn-primary my-1" to={`/AddBilling/`}>Add billing details</Link>


                    
                </div>


              
            

                <div className="mx-auto my-auto">
                    

                    
                           
                

                </div>
                </div>
            </div>
               



        );
            
    }
}