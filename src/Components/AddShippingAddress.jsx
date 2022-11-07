import React from "react";
import { Link } from "react-router-dom";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import imageExample from "../Image/Logo.PNG";
import cartItems from "./Data/ismet3.json"

export class AddShippingAddress extends React.Component {

    
  

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
        
        
            return (
                    <div className="container container-md">
                        <div className="p-3">
                            <h2 className="d-flex justify-content-start">Add shipping address</h2>
                        </div>

                        <div className="px-1 mx-3" style={{backgroundColor: "gray", width: "30%"}}>
                            <div className="d-flex mx-1 py-2">
                                <form className="px-3 py-2">
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>First name</label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Last name</label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Phone number</label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Address</label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label style={{float: "left", paddingLeft: "5px"}}>ZIP</label>

                                            <input type="text" className="form-control"></input>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label style={{float: "left", paddingLeft: "5px"}}>Residence</label>
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group pb-4">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Country</label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <button className="btn btn-success">Submit</button>
                                </form>


                                <Link className="btn btn-primary my-1" to={`/MyAccount/`}>Return to account</Link>


                        </div>
                    
                        
                        </div>
                    </div>
            );
                
        }
    }