import React from "react";
// import myData from "./Data/ismet.json";
import { CustomerCart, CustomerCartTotalCost, CategoryArray, ProductArray, CategoryArraySorter } from "../index";
import {Card, Col, Row, Container} from "react-bootstrap";
import { useState, useContext } from "react";


// export class Products extends React.Component {
function Products ()
{ 
    const {categoryArraySorter, setCategoryArraySorter} = useContext(CategoryArraySorter)
    const {CategoryList, setCategoryList} = useContext(CategoryArray)
    const {ProductList, setProductList} = useContext(ProductArray)
    const {customerCart, setCustomerCart} = useContext(CustomerCart);  
    const {customerCartTotalCost, setCustomerCartTotalCost} = useContext(CustomerCartTotalCost)

    const [displayProductArray, setDisplayProductArray] = useState(ProductList);
    const [displaySingelProduct, setDisplaySingelProduct] = useState();
    const [tempArray, setTempArray] = useState([]);
    
    if(displayProductArray.length == 0)
    {
      setDisplayProductArray(ProductList);
    }

    // console.log("DisplayProductArray ",displayProductArray);
    // console.log("This is cart", customerCart);
    // console.log( customerCartTotalCost);

    
function showDetails(product)
{
  console.log(product);

  setDisplaySingelProduct([product]);
  console.log("displayProductArray: ", displaySingelProduct); 
}

function addProductToCart(product)
{
  console.log(product);
  setCustomerCart([...customerCart, product]);
  const productPrice = parseInt(product.price);
  const currentPrice = parseInt(customerCartTotalCost);
  setCustomerCartTotalCost(productPrice + currentPrice);

}

function showAllProducts()
{
  console.log("Show all products");
  setDisplayProductArray(ProductList);
}

function sortArray(category)
{
  if(category.name == "Keyboard")
  {
    const tempP = [];
    ProductList.forEach(element => {   
      if(element.categoryID == category.categoryId)
      {
        // setTempArray(...tempArray, element);
        tempP.push(element);
        console.log(element);  
      }
    });
    setDisplayProductArray(tempP);
    
    // console.log(displayProductArray);
  }

  
  else if(category.name == "Computer Mouse")
  {
    const tempP = [];
    ProductList.forEach(element => {   
      if(element.categoryID == category.categoryId)
      {
        tempP.push(element);
        console.log(element);  
      }
    });
    setDisplayProductArray(tempP);
  }  

  else if(category.name == "Headphone")
  {
    const tempP = [];
    ProductList.forEach(element => {   
      if(element.categoryID == category.categoryId)
      {
        tempP.push(element);
        console.log(element);  
      }
    });
    setDisplayProductArray(tempP);
  }  

  else if(category.name == "Headphonestand")
  {
    const tempP = [];
    ProductList.forEach(element => {   
      if(element.categoryID == category.categoryId)
      {
        tempP.push(element);
        console.log(element);  
      }
    });
    setDisplayProductArray(tempP);
  }  
  
  console.log(category);
}

// console.log(CategoryList);
// console.log(ProductList);
    
    return (
        <div className="mt-4">
          {/* <div className="input-group  align-items-center justify-content-center  m-5">
            <div id="search-autocomplete" className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder="Search" />            
            </div>
          <button type="button" className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>          
        </div> */}
            {/* <h1>Product</h1> */}
      
            <div className="container container-md">
            {/* <div className="p-4">
                <h1 className="display-6">Web Shop</h1>
            </div> */}

            

            <div className="d-flex justify-content-start">
                <ul className="list-group list-unstyled list-group-flush">
                  <li> <a onClick={showAllProducts} className="list-group-item list-group-item-action">All products</a></li>
                    {CategoryList.map((category) => (
                        <li key={category.categoryId}>
                          {/* li should contain onClick={() => showDetails(product)} and a function to search for al products with category id  */}
                            <a className="list-group-item list-group-item-action" onClick={() => sortArray(category)}> 
                                {category.name}
                            </a>
                        </li>
                        
                        
                    )

                    )}
                </ul>

                <div className="d-flex justify-content-center">
                        <Container>
                            <Row xs={1} md={3} className="g-6">
                                {displayProductArray.map((product) => (
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
                                              onClick={() => showDetails(product)}
                                              // onClick={() => this.detailsClick(product)}
                                            >Details</Card.Link>
                                            {/* onClick={addProduct} */}
                                            <Card.Link onClick={() => addProductToCart(product)} className="btn btn-outline-dark">Add to cart</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                </div>
            </div>
        </div>


        <div id="exampleModel" className="modal" tabIndex="-1">
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
                  <tr>
                    
                  </tr>
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


export default Products;