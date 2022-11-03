import React from "react";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import joj from "../Image/Logo.PNG";
import cartItems from "./Data/ismet3.json"

export class Cart extends React.Component {

    
  

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
            <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">Shopping cart</h2>
                </div>

                  
              <div className="px-1 d-flex justify-content-between">
                <div className="d-flex flex-column mx-1">
                    {cartItems.map((item) => 
                    
                    <div className="p-3 mb-2 w-100 modal-body border border-dark rounded">
                    <table>
                
                        <tbody>
                        <tr> 
        
                            <td width={120} height={120}><img className="d-flex justify-content-start" src={joj} width={120} height={120}/></td>

                            <td width={200} className="col-md-5">
                                <h4 className="text-start">{item.name}</h4>
                                <h6 className="text-start">{item.description}</h6>
                                    <div className="d-flex justify-content-start text-start">
                                        <i className="bi bi-info-circle"> Regler och villkor gäller.</i>
                                    </div>
                                    

                            </td>

                            <td>
                                <div className="px-5">
                                    <select className="form-select-sm">
                                    <option selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    </select>
                                </div>
                            </td>

                            <td>
                                <div className="d-flex justify-content-center">
                                <button className="btn btn-primary">Details</button>
                                <button className="btn btn-danger align-content-center">Delete</button>
                                
                                </div>
                                <div className="d-flex justify-content-end pt-4">
                                <h5 className="text-end">{item.price}:-</h5>
                                </div>
                            </td>
                            
                        </tr>
                        </tbody>
                    </table>
                 </div>
                    )}
                    
                </div>
              

              
            

                <div className="d-flex mx-auto my-auto w-25 border border-dark rounded">
                    
                    {/*<div className="d-flex flex-column my-auto mx-auto py-2">*/}

                    <div className="d-flex flex-column px-2 py-2">
                        <h4 className="d-flex justify-content-start pb-2">
                            Varukörg
                        </h4>
                    
                        <div>
                            <h5 className="d-flex justify-content-between">
                                <span className="justify-content-start">Cost</span>
                                <span className="justify-content-end">300:- </span>
                            </h5>
                        </div>
                        <div>
                            <h5 className="d-flex justify-content-between">
                                <span className="justify-content-start">Delivery</span>
                                <span className="justify-content-end">35:- </span>
                            </h5>
                        </div>
                        <div>
                            <h5 className="d-flex justify-content-between border-top">
                                <span className="justify-content-start">Total</span>
                                <span className="justify-content-end">325:- </span>
                            </h5>
                        </div>
                       
                        <div className="d-grid gap-2 col-8 mx-auto py-auto">
                            <button onClick={() => alert("Checkout!")} className="btn btn-success">
                                 Go to checkout
                            </button>
                        </div>
                        
                        <div className="d-grid gap-2 col-8 mx-auto px-auto py-2">
                            <button onClick={() => alert("Checkout!")} className="btn btn-danger">
                                Clear cart
                            </button>
                        </div>
                            
                          

                       
                           
                    </div>

                </div>
                </div>
            </div>
               



        );
            
    }
}