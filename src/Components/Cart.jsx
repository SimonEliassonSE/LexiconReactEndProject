import React from "react";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import joj from "../Image/Logo.PNG";
import cart from "./Data/ismet3.json"

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
            <div className="container container-sm pb-5">
                <div className="p-4">
                    <h1 className="display-4 d-flex justify-content-start">Shopping cart</h1>
                </div>

                  
              
              <div class="w-75 modal-body border border-dark rounded">
                  <table>
               
                    <tbody>
                      <tr> 
     
                        <td width={120} height={120}><img className="d-flex justify-content-start" src={joj} width={120} height={120}/></td>

                        <td width={200} className="col-md-5">
                            <h4 className="text-start">Braun Steelseries 7</h4>
                            <h4 className="text-start">A rakare</h4>
                            <h4 className="text-start">300:-</h4>
                                <div className="d-flex justify-content-start text-start">
                                    <i className="bi bi-info-circle"> Regler och villkor gäller.</i>
                                </div>
                        </td>

                        <td>
                            <div style={{ paddingTop: '22%' }} className="px-5">
                                <select className="form-select-sm">
                                <option selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex justify-content-center" style={{ paddingTop: '20%' }}>
                            <button className="btn btn-primary">Details</button>
                            <button className="btn btn-danger align-content-center">Delete</button>
                            </div>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
              </div>

              
            

                <div className="d-flex w-50 p-5 border border-dark rounded">
                    
                    <Container>
                      <Row>  
                        <h4 className="d-flex justify-content-start">Cost: 300:-</h4>
                    </Row>
                        <Row>  
                        <h4 className="d-flex justify-content-start">Delivery: 35:-</h4>
                        </Row>
                        <Row>
                                <h4 className="pb-4 d-flex justify-content-start border-top border-dark">Total cost: 335:-</h4>
                        </Row>
                       
                                <div className="d-grid gap-2 col-10 mx-auto p-2">
                                    <button onClick={() => alert("Checkout!")} className="btn btn-success btn-lg">
                                        Go to checkout
                                    </button>
                                </div>
                                <div className="d-grid gap-2 col-10 mx-auto p-2">
                                    <button onClick={() => alert("Checkout!")} className="btn btn-danger btn-lg">
                                        Clear cart
                                    </button>
                                </div>
                            
                          

                       
                           
                    </Container>

                </div>

               

            </div>

              

        );
            
    }
}