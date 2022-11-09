import React, {useState} from "react";
import myData from "./Data/ismet.json";
import axios from "axios";
import { useEffect } from "react";
import {Card, Col, Row, Container} from "react-bootstrap";


export const Products = () => {



const [products, setProducts] = useState([]);

const [productDetails, setProductDetails] = useState([]);



const getProducts = async () => {
  const { data } = await axios.get(`https://localhost:7117/api/ProductAPI/`);
  setProducts(data);
  console.log(data);
};

useEffect(() => {
  getProducts();
}, []);




const addProduct = () => {
  alert("Success!")
}




   
       
    
        return (
            <div>
<div class="input-group  align-items-center justify-content-center  m-5">
  <div id="search-autocomplete" class="form-outline">
    <input type="search" id="form1" class="form-control" placeholder="Search" />
   
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fa fa-search"></i>
  </button>
</div>
                <h1>Product</h1>
         
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

                                           <Card.Img variant="top" src={`..${product.img}`}  style={{ width: 200, height: 150 }}></Card.Img>
                                           <Card.Body>
                                               <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                                   <span className="fs-4">{product.name}</span>
                                                   <span className="ms-1 text-muted">{product.price}:-</span>
                                               </Card.Title>
                                               <Card.Link  className="btn btn-primary"
                                                 data-bs-toggle="modal"
                                                 data-bs-target="#exampleModel"
                                                 onClick={() => alert("iekW")}
                                               >Details</Card.Link>
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


           <div id="exampleModel" class="modal" tabindex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">ProductSaldo</th>
                        <th scope="col">Image</th>
                        <th scope="col">Brand</th>
                       
                      </tr>
                    </thead>
                    <tbody>
     
                        {products.map((product) => (
                          <tr key={product.productId}>

                              <td>{product.productId}</td>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>{product.description}</td>
                             <td>{product.productSaldo}</td>
                             <td><img src={product.img} style={{ width:50, height: 50 }}/></td>
                             <td>{product.brand}</td>

                            </tr>
                        ))}
                       
                      
                          
                 
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>




           </div>
        );
            
    
                        }