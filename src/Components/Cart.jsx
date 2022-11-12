import React from "react";
import { useState, useContext, useEffect } from "react";
import { CustomerCart, CustomerCartTotalCost, CustomerData, CustomerCreditcardData, UserAuthenticator } from "../index";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import Axios from "axios";
// import imageExample from "../Image/Logo.PNG";
// import cartItems from "./Data/ismet3.json"


// export class Cart extends React.Component {

function Cart()
{        
    const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthenticator);
    const {customerData, setCustomerData} = useContext(CustomerData);
    const {customerCreditcardData, setCustomerCreditcardData} = useContext(CustomerCreditcardData);

    const {customerCart, setCustomerCart} = useContext(CustomerCart);
    const {customerCartTotalCost, setCustomerCartTotalCost} = useContext(CustomerCartTotalCost)

    const [ postReciptData, setPostReciptData] = useState();    
    const [ postReciptId, setPostReciptId] = useState(null);

    console.log(customerCart);
    
    function createReciptData()
    {  
        console.log("Totalcost: ",customerCartTotalCost, "CustomerId: ",customerData[0].customerId);

        // function postNewRecipt (){
            Axios.post(`https://localhost:7117/api/ReceiptAPI`, {
              TotalCost: customerCartTotalCost,
              CustomerId: customerData[0].customerId,
              })
              .then(function (response) {
                console.log(response);
                if(response.status == 400)
                {
                  console.log("Data post failed!")
                }
        
                else if(response.status == 200)
                {
                 console.log("Data was successfully posted!")
                 setPostReciptId(response.data)
                 const newReciptId = response.data;
                 createReciptItems(newReciptId);
                }
        
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        //   postNewRecipt();
    // }

    function createReciptItems(newReciptId){
        customerCart.forEach(element => {
            let name = element.name;
            let convertPrice = element.price;
            let price = '' + convertPrice;
            let description = element.description;
            let img = element.description;
            let brand = element.brand;
            let convertId = newReciptId;
            let receiptId = '' + convertId;

            // console.log("Name: ",name , typeof(name));
            // console.log("Price: ",price, typeof(price));
            // console.log("Description: ",description , typeof(description));
            // console.log("IMG: ",img , typeof(img));
            // console.log("Brand: ",brand , typeof(brand));
            // console.log("ReceiptID: ",receiptId , typeof(receiptId));
            // console.log("------------------------------")

        Axios.post(`https://localhost:7117/api/ReceiptItemAPI`, {
            Name: name, 
            Price: price,
            Description: description,
            IMG: img,
            Brand: brand,
            ReceiptId: receiptId,

            })
            .then(function (response) {
              console.log(response);
              if(response.status == 400)
              {
                console.log("Data post failed!")
              }
      
              else if(response.status == 200)
              {
               console.log("Data was successfully posted!")
            //    setPostReciptId(response.data)
              }
      
            })
            .catch(function (error) {
              console.log(error);
            });
        });
        // setPostReciptId(null);
        setCustomerCart([]);
        setCustomerCartTotalCost(0);
        alert("Your order went through!, you will find your receipt in MyAccount")
    }
 
    function postDataForRecipte()
    {
        if(isAuthenticated != true)
        {
            alert("You are not loggedin, please loggin or register loggin")
        }

        else if(isAuthenticated == true && customerData.length == 0)
        {
            alert("Please add customerdata in MyAccount befor checking out!")
        }

        else if(isAuthenticated == true && customerData.length != 0 && customerCreditcardData.length == 0)
        {
            alert("Please add creditcarddata in MyAccount befor checking out!")
        }

        else if(isAuthenticated == true && customerData.length != 0 && customerCreditcardData.length != 0)
        {
            createReciptData();  
        }
    }

    useEffect(() =>{
        console.log('useEffect ran!')
    });

    function deleteCartItems()
    {
        console.log(customerCart);
        setCustomerCart([]);
        setCustomerCartTotalCost(0);
        console.log(customerCart);        
        alert("Cart is cleared!");
        console.log(customerCart.length)
    }

    console.log(customerCart);

    if(customerCart.length == 0)
    {
        return (
            <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">Shopping cart</h2>
                </div>

                <div className="px-1 d-flex justify-content-between">
                    <div className="d-flex flex-column mx-1">
                        <h5>Your cart is currently empty</h5>
                        <h5>Try adding something</h5>
                    </div>
            
                <div className="mx-auto my-auto">
                    
                    {/*<div className="d-flex flex-column my-auto mx-auto py-2">*/}

                    <div style={{width: "350px", padding: "15px", backgroundColor: "black"}} className="rounded">
                        <div className="p-1 rounded" style={{backgroundColor: "white"}}>

                            <h4 className="p-3 text-left">
                                Varukorg
                            </h4>
                        
                            <h5 className="d-flex justify-content-between px-3">
                                <span className="justify-content-start">Cost</span>
                                <span className="justify-content-end">{customerCartTotalCost}:- </span>
                            </h5>
                        
                            {/* <h5 className="d-flex justify-content-between px-3 pb-1">
                                <span className="justify-content-start">Delivery</span>
                                <span className="justify-content-end">35:- </span>
                            </h5> */}

                            <h5 className="d-flex justify-content-between border-top px-3 pb-4 pt-2">
                                <span className="justify-content-start">Total</span>
                                <span className="justify-content-end">{customerCartTotalCost}:- </span>
                            </h5>
                    

                            {/* If not logged in, give error errorMessage
                            if logged in but no customer or creditcard data give error and navigate to MyAccount to add */}
                            <div className="d-grid gap-2 col-8 mx-auto py-auto">
                                <button onClick={postDataForRecipte} className="btn btn-success">
                                    Go to checkout
                                </button>
                            </div>
                        
                            <div className="d-grid gap-2 col-8 mx-auto px-auto py-2">
                                <button onClick={deleteCartItems}  className="btn btn-danger">
                                    Clear cart
                                </button>
                                {/* deleteCartItems */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );                
    }

    else if (customerCart.length != 0)
    {
        return (
            <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">Shopping cart</h2>
                </div>

                <div className="px-1 d-flex justify-content-between">
                    <div className="d-flex flex-column mx-1">
                        {customerCart.map((item, index) =>                         
                        <div key={index} className="p-3 mb-2 w-100 modal-body border border-dark rounded">
                            <table>                        
                                <tbody>
                                    <tr> 
                                    
                                        <td width={120} height={120}>
                                            <img className="d-flex justify-content-start" src={`..${item.img}`} width={120} height={120}/>
                                        </td>

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
            
                <div className="mx-auto my-auto">
                    
                    {/*<div className="d-flex flex-column my-auto mx-auto py-2">*/}

                    <div style={{width: "350px", padding: "15px", backgroundColor: "black"}} className="rounded">
                        <div className="p-1 rounded" style={{backgroundColor: "white"}}>

                            <h4 className="p-3 text-left">
                                Varukorg
                            </h4>
                        
                            <h5 className="d-flex justify-content-between px-3">
                                <span className="justify-content-start">Cost</span>
                                <span className="justify-content-end">{customerCartTotalCost}:-</span>
                            </h5>
                        
                            {/* <h5 className="d-flex justify-content-between px-3 pb-1">
                                <span className="justify-content-start">Delivery</span>
                                <span className="justify-content-end">35:- </span>
                            </h5> */}

                            <h5 className="d-flex justify-content-between border-top px-3 pb-4 pt-2">
                                <span className="justify-content-start">Total</span>
                                <span className="justify-content-end">{customerCartTotalCost}:- </span>
                            </h5>
                    
                            <div className="d-grid gap-2 col-8 mx-auto py-auto">
                                <button onClick={postDataForRecipte} className="btn btn-success">
                                    Go to checkout
                                </button>
                            </div>
                        
                            <div className="d-grid gap-2 col-8 mx-auto px-auto py-2">
                                <button onClick={deleteCartItems}  className="btn btn-danger">
                                    Clear cart
                                </button>
                                {/* deleteCartItems */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );                
    }
  
}

export default Cart;
