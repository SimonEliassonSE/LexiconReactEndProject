import React from "react";
import myData from "./Data/ismet.json";
import products from "./Data/ismet2.json";
import joj from "../Image/Logo.PNG";
import {Card, Col, Row, Container} from "react-bootstrap";

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

   

    const{
        
    } = this.state;
       
    
        return (
            <div className="container container-md">
                <div className="p-4">
                    <h1 className="display-6">Web Shop</h1>
                </div>

                

                <div className="d-flex justify-content-start">
                    <ul className="list-group list-unstyled list-group-flush">
                        {myData.map((category) => (
                            <li key={category.categoryId}>
                                <a href="http://localhost:3000/Products" className="list-group-item list-group-item-action">
                                    {category.name}
                                </a>
                            </li>
                            
                        )

                        )}
                    </ul>

                    <div className="d-flex justify-content-center">
                            <Container>
                                <Row xs={1} md={3} className="g-6">
                                    {products.map((product) => (
                                        <Col>
                                        <Card key={product.productId} border="dark">
                                            <Card.Img variant="top" src={joj} style={{ width: 200, height: 150 }}></Card.Img>
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                                    <span className="fs-4">{product.name}</span>
                                                    <span className="ms-1 text-muted">{product.price}:-</span>
                                                </Card.Title>
                                                <Card.Text className="d-flex justify-content-start">
                                                    {product.description}
                                                </Card.Text>
                                                <Card.Link href="http://localhost:3000/Products" className="btn btn-primary">Details</Card.Link>
                                                <Card.Link onClick={addProduct} className="btn btn-outline-dark">Add to cart</Card.Link>
                                            </Card.Body>
                                        </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                    </div>
                </div>
            </div>
        );
    }
}
