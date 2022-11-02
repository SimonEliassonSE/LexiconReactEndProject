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
            <div className="container container-sm">
                <div className="p-4">
                    <h1 className="display-6">Shopping cart</h1>
                </div>

                <div className="d-flex justify-content-start square border border-dark">
                    
                    <Container>
                        

                      
                    <h3 className="d-flex justify-content-start">Varukorg (1 vara)</h3>
                            
                        <Row>
                            <Col>
                        <img src={joj} width={50} height={50} className="d-flex justify-content-start" />
                        <p className="d-flex justify-content-center">r3gf</p>

                        </Col>



                        </Row>
                        
                        
                       
                        


                    </Container>

                    <Container>
                    <Col xs={3} className="square border border-dark me-4">
                            <p className="d-flex justify-content-between align-items-baseline mb-4">
                                <span className="fs-4">Cost</span>
                                <span className="ms-1 text-muted">999:-</span>
                            </p>
                            </Col>
                    </Container>
                    {/*
                    <div className="d-flex justify-content-end">
                    <Container className="square border border-dark">
                        <Row>
                        <p className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-4">Cost</span>
                        <span className="ms-1 text-muted">999:-</span>
                        </p>
                        </Row>
                        <Row>
                        <p className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-4">Frakt</span>
                        <span className="ms-1 text-muted">35:-</span>
                        </p>
                        </Row>
                        <Row>
                        <p className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-4">Total cost</span>
                        <span className="ms-1 text-muted">1 034:-</span>
                        </p>
                        </Row>
                        
                    
                    </Container>
                </div>
        */}
                </div>

               



                {/* 
                        <Container className="square border border-primary">
                            <Card>
                            <Card.Img variant="top" src={joj} style={{ width: 200, height: 150 }}></Card.Img>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                                    <span className="fs-1">erg </span>
                                                    <span className="ms-1 text-muted">333:-</span>
                                                </Card.Title>
                                                <Card.Text className="d-flex justify-content-start">
                                                   frfwf
                                                </Card.Text>
                                                <Card.Link href="http://localhost:3000/Products" className="btn btn-primary">Details</Card.Link>
                                                <Card.Link className="btn btn-outline-dark">Add to cart</Card.Link>
                                            </Card.Body>
                            </Card>
                        </Container>

        */}

            </div>

              

        );
            
    }
}