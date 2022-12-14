import React from "react";
import myData from "./Data/ismet.json";
import products from "./Data/ismet2.json";
import joj from "../Image/Logo.PNG";
import {Card, Col, Row} from "react-bootstrap"

export class Homepage extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    
        };

    }
   
       
componentDidMount(){
   
}



render(){

    const addProduct = () => {
        alert("Product added.")
    }

    const sortProducts = () => {
        if(products.id % 3 == 1){
            return(
                products.map((product) => (
                    <h2>{product.id}</h2>
                ))
            )
        } else(
            <h4>Stimt gar ned</h4>
        )
    }

    const{
        
    } = this.state;
       
    
        return (
            <div className="container container-md">
                <div className="p-4">
                    <h1 className="display-6">Web Shop</h1>
                </div>

                <div className="d-flex justify-content-center">
                           <div className="container">
                                {products.map((product) => (
                                    <Row>
                                        <Col key={product.productId}>
                                        <Card border="dark">
                                            <Card.Img variant="top" src={joj} style={{ width: 200, height: 150 }}></Card.Img>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                                    <span className="fs-2">{product.name}</span>
                                                    <span className="ms-2 text-muted">{product.price}:-</span>
                                                </Card.Title>
                                                <Card.Text className="d-flex justify-content-start">
                                                    {product.description}
                                                </Card.Text>
                                                <Card.Link href="http://localhost:3000/Products" className="btn btn-primary">Details</Card.Link>
                                                <Card.Link onClick={addProduct} className="btn btn-outline-dark">Add to cart</Card.Link>
                                            </Card.Body>
                                        </Card>
                                        </Col>
                                    </Row>
                                   
                                )
                                    )
                                }
                                <div className="row">
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                       
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                </div>
                               
                            </div>
                    </div>
                    
                   
                                   
                                 
                                    
                                
                            
                    

                
                        

                

            </div>


        );
            
    }
}
