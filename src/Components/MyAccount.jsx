import axios from "axios";
import { Row } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CustomerCreditcardData, CustomerData, UserAuthenticator, CurrentlyLoggedin, CustomerArray, CustomerArrayGotUpdated, CustomerCreditcardArrayGotUpdated, CreditcardArray,  ReceiptArray,
    ReceiptItemsArray, TempReceiptList } from "../index";

export const MyAccount = () => {
    

    const { customerData, setCustomerData } = useContext(CustomerData);
    const { customerCreditcardData, setCustomerCreditcardData } = useContext(CustomerCreditcardData);
    const { isAuthenticated } = useContext(UserAuthenticator);
    const { currentlyLoggedIn } = useContext(CurrentlyLoggedin);
    const { customerList, setCustomerList } = useContext(CustomerArray);
    const { arrayUpdate, setArrayUpdate } = useContext(CustomerArrayGotUpdated);
    const {creditcardArrayUpdate, setCreditcardArrayUpdate} = useContext(CustomerCreditcardArrayGotUpdated);
    const { creditcardList, setCreditcardList } = useContext(CreditcardArray);
    const { receiptItemsArray, setReceiptItemsArray } = useContext(ReceiptItemsArray);
    const { receiptArray, setReceiptArray } = useContext(ReceiptArray);
    const { tempReceiptList, setTempReceiptList } = useContext(TempReceiptList)

    // use regulare useState hooks to make the recipt info. Only needed here in my account 
    // Only need 2 display receiptItemsArray & receiptArray where customerId customerData.customerId

    // Contains Receipts that are connected to customerData.customerId
    const [userReceipt, setUserReceipt] = useState("");
    // Contains ReceiptItems that are connected to userReceipt
    const [userReceiptItems, setUserReceiptItems] = useState("");
    
    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    const [address, setAddress] = useState("");

    const [zipCode, setZipCode] = useState("");

    const [city, setCity] = useState("");

    const [country, setCountry] = useState("");

    const [creditNumber, setCreditNumber] = useState("");

    const [ccv, setCcv] = useState("");
    
    const [bank, setBank] = useState("");

    // const [email, setEmail] = useState("");
    const creditNumberChangeHandler = (event) => {
        setCreditNumber(event.target.value);
        };
    const ccvChangeHandler = (event) => {
        setCcv(event.target.value);
        };
    const bankChangeHandler = (event) => {
        setBank(event.target.value);
        };

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
        };
  
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
        };

    const phoneNumberChangeHandler = (event) => {
        setPhoneNumber(event.target.value);
        };
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
        };
    const zipCodeChangeHandler = (event) => {
        setZipCode(event.target.value);
        };
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
        };

    const countryChangeHandler = (event) => {
        setCountry(event.target.value);
        };


// currentlyloggedIn gets set in login or signup. we only want 2 get the email so that we can find a customer with this email (if theye exist that is)
let getUserId = "";
function loopThroughUser ()
{
    currentlyLoggedIn.forEach((el) => {
            console.log("UserId Found! ",el.UserName) 

            getUserId = el.UserName;
             }); 
}  
console.log(getUserId);

// We want to fetch the userId if customerArray is empty 
if(customerData.length == 0)
    { 
        loopThroughUser();
        console.log(getUserId);
    }

    // If user has no customer data, this is used to post input data to backend
    function postCustomerData (){
        axios.post(`https://localhost:7117/api/CustomerAPI`, {
            UserId: getUserId,
            FirstName: firstName,
            LastName: lastName,
            Phonenumber: phoneNumber,
            Address: address,
            Zipcode: zipCode,
            City: city, 
            Country: country,          

          })
          .then(function (response) {
            console.log(response);
            if(response.status == 400)
            {
              console.log("Wrong password!")
            }
    
            else if(response.status == 200)
            {
                console.log("Data was sent!")
                if(arrayUpdate == true)
                {
                    setArrayUpdate(false);
                }
                else 
                {
                    setArrayUpdate(true);
                }

            }
    
          })
          .catch(function (error) {
            console.log(error);
          });   
      }   

   

    // conected to our form, if button is pressed and al requierd fields are filled in data will be sent to backend to create a new customer.  
    const submitHandler = (event) => {
        event.preventDefault()       
        postCustomerData()
    };

    // This code will lurk and check if a there is any customers with the same email as currently logged in, if there is the code will add that customer to customerData
    if(customerData.length === 0)
    {
        customerList.forEach((el) => {
            if(el.email == getUserId)
            {
                setCustomerData([el])
                console.log("Was added to customerData ",el);
            }

            else 
            {
                console.log("No customer match found!")
            }
        })       
    }

       

// We need getCustomerId to create a new creditcard!

let getCustomerId = "";
function loopThroughCustomer ()
{
    customerData.forEach((el) => {
            console.log("CustomerId Found! ",el.customerId)
            getCustomerId = el.customerId;
             }); 
}   

if(customerData != 0 && customerCreditcardData == 0)
    {
        loopThroughCustomer();
        console.log(getCustomerId);
    }

    function postCustomerCreditcardData (){
        axios.post(`https://localhost:7117/api/CreditcardAPI`, {

            CreditNumber: creditNumber,
            CCV: ccv,
            Bank: bank, 
            CustomerId: getCustomerId,

          })
          .then(function (response) {
            console.log(response);
            if(response.status == 400)
            {
              console.log("Wrong password!")
            }
    
            else if(response.status == 200)
            {
                console.log("CreditcardData was sent!")
                if(creditcardArrayUpdate == true)
                {
                    setCreditcardArrayUpdate(false);
                }
                else 
                {
                    setCreditcardArrayUpdate(true);
                }

            }
    
          })
          .catch(function (error) {
            console.log(error);
          });   
      }   

   const submitCreditcardHandler = (event) => {
    event.preventDefault()       
    postCustomerCreditcardData()
};

    if(customerCreditcardData.length === 0)
    {
        creditcardList.forEach((el) => {
            if(el.customerId == getCustomerId)
            {                
                setCustomerCreditcardData([el])
                console.log("Was added to customerCreditcardData ",el);
            }

            else 
            {
                console.log("No creditcard match found!")
            }
        })       
    }

    function getReceipt()
    {
        if(receiptArray.length != 0 && customerData.length != 0)
        {
            receiptArray.forEach((r) => {
                if(r.customerId == customerData[0].customerId)
                {
                    console.log("getReceipt: ",r);
                    // setTempReceiptList([...tempReceiptList, r])
                    // setUserReceipt([...userReceipt, r])
                    // receiptItemsArray.forEach((rI) => {
                    //     if(rI.receiptId == r.receiptId)
                    //     {
                    //         console.log("getReceiptitem: ",rI);
                    //     }

                    // })
                }
                    // console.log("getReceipt: ",element);
            })
            // const tempCID = '' + customerData.customerId;
            // console.log(customerData.customerId);
            // console.log(customerData[0].customerId);           
            // console.log(tempCID);
        }
    }
    getReceipt();
// console.log(tempReceiptList);
    



    // console.log(userReceipt);
console.log("cD" ,customerData, "cCD" , customerCreditcardData,"currentlyLoggedIn" , currentlyLoggedIn, creditcardList)
console.log("receiptArray: ", receiptArray)
console.log("receiptItemsArray: ", receiptItemsArray);

if(isAuthenticated == true)
{
    if(customerData.length == 0 && customerCreditcardData == 0)
    {
        return (
                <div className="container container-sm">
                    <div className="p-3">
                        <h2 className="d-flex justify-content-start">My account</h2>
                    </div>
                    <div className="px-3 d-flex justify-content-start">You have not added any personal details.                  
                    </div>
                    <div className="px-1 mx-3 rounded" style={{backgroundColor: "gray", width: "45%"}}>
                            <div className="mx-1 py-2">
                                <form className="px-3 py-2" onSubmit={submitHandler}>
                                    <p className="display-6">FORM</p>
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>First name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="firstName"
                                            value={firstName}
                                            onChange={firstNameChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Last name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="lastName"
                                            value={lastName}
                                            onChange={lastNameChangeHandler}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Phone number</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={phoneNumberChangeHandler}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Address</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="address"
                                            value={address}
                                            onChange={addressChangeHandler}
                                            required

                                        />
                                    </div>


                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>ZIP</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="zipCode"
                                            value={zipCode}
                                            onChange={zipCodeChangeHandler}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>City</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="city"
                                            value={city}
                                            onChange={cityChangeHandler}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Country</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="country"
                                            value={country}
                                            onChange={countryChangeHandler}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                                </form>
                        </div>                        
                        </div>     
                    </div>           
            );
        }

        else if(customerData.length != 0 && customerCreditcardData.length == 0)
        {
            return(
                <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">My account</h2>
                </div>
                <div className="d-flex justify-content-start px-3 py-1">  

                       {customerData.map((customer) => (
                        <div className="card" key={customer.customerId}>
                                                    <h5 className="d-flex justify-content-start">My customer details</h5>
                            <div className="card-body form-group">
                                <label >First name</label>
                                <input className="form-control" value={customer.firstName} readOnly/>
                                <label className="form-label">Last name</label>
                                <input className="form-control" value={customer.lastName} readOnly/>
                                <label className="form-label">Email</label>
                                <input className="form-control" value={customer.email} readOnly/>
                                <label className="form-label">Phonenumber</label>
                                <input className="form-control" value={customer.phoneNumber} readOnly/>
                                <label className="form-label">City</label>
                                <input className="form-control" value={customer.city} readOnly/>
                                <label className="form-label">Country</label>
                                <input className="form-control" value={customer.country} readOnly/>
                                <label className="form-label">Zipcode</label>
                                <input className="form-control" value={customer.zipCode} readOnly/>
                                <label className="form-label">Adress</label>
                                <input className="form-control" value={customer.address} readOnly/>
                            </div>                            
                        </div>
                       ))}

                    </div>
                    <div className="px-1 mx-3 rounded" style={{backgroundColor: "gray", width: "20%"}}>
                            <div className="d-flex mx-1 py-2">
                                <form className="px-3 py-2" onSubmit={submitCreditcardHandler}>                             
                                    <p className="display-6">FORM</p>
                                    <div className="form-group">
                                            <label style={{float: "left", paddingLeft: "5px"}}>Credit card number</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="creditNumber"
                                                value={creditNumber}
                                                onChange={creditNumberChangeHandler}
                                                required
                                            />
                                        </div>
                                    <Row>
                                        <div className="form-group">
                                            <label style={{float: "left", paddingLeft: "5px"}}>CVV</label>
                                            <input 
                                                type="password" 
                                                className="form-control form-control-sm"
                                                name="ccv"
                                                value={ccv}
                                                onChange={ccvChangeHandler}
                                                required
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label style={{float: "left", paddingLeft: "5px"}}>Bank</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="bank"
                                                value={bank}
                                                onChange={bankChangeHandler}
                                                required
                                                />
                                        </div>
                                    </Row>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                        </div>
                        </div>
                </div>     
            )
        }

        else if(customerData.length != 0 && customerCreditcardData.length != 0)
        {
            return(
                <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">My account</h2>
                </div>
                             
                <h5 className="d-flex justify-content-start">My customer details</h5>
                <div className="d-flex justify-content-start px-3 py-1">                    

                    {customerData.map((customer) => (
                        <div className="card" key={customer.customerId}>
                            <div className="card-body form-group">
                                <label className="form-label">First name</label>
                                <input className="form-control" value={customer.firstName} readOnly/>
                                <label className="form-label">Last name</label>
                                <input className="form-control" value={customer.lastName} readOnly/>
                                <label className="form-label">Email</label>
                                <input className="form-control" value={customer.email} readOnly/>
                                <label className="form-label">Phonenumber</label>
                                <input className="form-control" value={customer.phoneNumber} readOnly/>
                                <label className="form-label">City</label>
                                <input className="form-control" value={customer.city} readOnly/>
                                <label className="form-label">Country</label>
                                <input className="form-control" value={customer.country} readOnly/>
                                <label className="form-label">Zipcode</label>
                                <input className="form-control" value={customer.zipCode} readOnly/>
                                <label className="form-label">Adress</label>
                                <input className="form-control" value={customer.address} readOnly/>
                            </div>                            
                        </div>                           
                       ))}

                    </div>
                    <div className="d-flex justify-content-start px-3 py-1">

                    {customerCreditcardData.map((creditcard) => (
                        <div className="card" key={creditcard.ccId}>
                            <div className="card-body form-group">
                                <label className="form-label">Creditcard numbers</label>                            
                                <input className="form-control" value={creditcard.creditNumber} readOnly/>                          
                                <label className="form-label">ccv</label>                              
                                <input className="form-control" value={creditcard.ccv} readOnly/>
                                <label className="form-label">Saldo</label>                             
                                <input className="form-control" value={creditcard.value} readOnly/>
                                <label className="form-label">Bank</label>                            
                                <input className="form-control" value={creditcard.bank} readOnly/>
                            </div>                            
                        </div>                           
                       ))}               

                    </div>
                    {/* d-flex justify-content-start px-3 py-1 */}
                    {/* <div className="card"> */}
                        <div className="card-body">
                            {receiptArray.map((receipt) => {
                                // We need to get al the receiptItems that hase receiptId == receipt sent in through map        
                                // let movingBin;                    
                                // receiptItemsArray.forEach((element) => {          
                                //         movingBin = element;
                                // })

                                if(receipt.customerId == customerData[0].customerId)
                                {              
                                    return (
                                    <div className="card" key={receipt.receiptId}>
                                    <div className="card-body">
                                    <label className="form-label d-flex justify-content-start">ReceiptId: {receipt.receiptId}<p> </p></label>
                                    <label className="form-label d-flex justify-content-start">Receipt Cost: {receipt.totalCost} <p> </p></label>
                                    <label className="form-label d-flex justify-content-start">Receipt Orderdate: {receipt.orderDate} <p> </p></label>    
                                    {receiptItemsArray.map((element) => {
                                        if(element.receiptId == receipt.receiptId)
                                        {
                                            return (
                                            <div className="card">
                                            <div className="card-body">
                                            <table className="mb-2 mt-2">
                                                <thead>
                                                    <tr className="mb-2">
                                                        <th>Product name</th>
                                                        <th>Product brand</th>
                                                        <th>Product description</th>
                                                        <th>Product price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr key={element.receiptItemId}>
                                                        <td>{element.name}</td>
                                                        <td>{element.brand}</td>
                                                        <td>{element.description}</td>
                                                        <td>{element.price}</td>                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                            </div>
                                            );          
                                        }
                                    })}         
                                   </div>       
                                   </div>                            
                                );                                    
                                }                 
                            })}  
                        </div>
                    </div> 
            )
        }

        // else if(customerData.length != 0 && customerCreditcardData.length != 0 && receiptArray.length != 0)
        // {
        //     return(
        //         <div className="container container-sm">
        //         <div className="p-3">
        //             <h2 className="d-flex justify-content-start">My account</h2>
        //         </div>
                             
        //         <h5 className="d-flex justify-content-start">My customer details</h5>
        //         <div className="d-flex justify-content-start px-3 py-1">                    

        //             {customerData.map((customer) => (
        //                 <div className="card" key={customer.customerId}>
        //                     <div className="card-body form-group">
        //                         <label className="form-label">First name</label>
        //                         <input className="form-control" value={customer.firstName} readOnly/>
        //                         <label className="form-label">Last name</label>
        //                         <input className="form-control" value={customer.lastName} readOnly/>
        //                         <label className="form-label">Email</label>
        //                         <input className="form-control" value={customer.email} readOnly/>
        //                         <label className="form-label">Phonenumber</label>
        //                         <input className="form-control" value={customer.phoneNumber} readOnly/>
        //                         <label className="form-label">City</label>
        //                         <input className="form-control" value={customer.city} readOnly/>
        //                         <label className="form-label">Country</label>
        //                         <input className="form-control" value={customer.country} readOnly/>
        //                         <label className="form-label">Zipcode</label>
        //                         <input className="form-control" value={customer.zipCode} readOnly/>
        //                         <label className="form-label">Adress</label>
        //                         <input className="form-control" value={customer.address} readOnly/>
        //                     </div>                            
        //                 </div>                           
        //                ))}

        //             </div>
        //             <div className="d-flex justify-content-start px-3 py-1">

        //             {customerCreditcardData.map((creditcard) => (
        //                 <div className="card" key={creditcard.ccId}>
        //                     <div className="card-body form-group">
        //                         <label className="form-label">Creditcard numbers</label>                            
        //                         <input className="form-control" value={creditcard.creditNumber} readOnly/>                          
        //                         <label className="form-label">ccv</label>                              
        //                         <input className="form-control" value={creditcard.ccv} readOnly/>
        //                         <label className="form-label">Saldo</label>                             
        //                         <input className="form-control" value={creditcard.value} readOnly/>
        //                         <label className="form-label">Bank</label>                            
        //                         <input className="form-control" value={creditcard.bank} readOnly/>
        //                     </div>                            
        //                 </div>                           
        //                ))}               

        //             </div>
        //             {/* <a href="#"> Change password</a> */}
        //             <p> Display reciptes "get the data from backend"</p>   
        //             <div className="d-flex justify-content-start px-3 py-1">

        //             {/* Add receipt and receiptItems bellow here */}
        //             {/* {customerCreditcardData.map((creditcard) => (
        //                 <div className="card" key={creditcard.ccId}>
        //                     <div className="card-body form-group">
        //                         <label className="form-label">Creditcard numbers</label>                            
        //                         <input className="form-control" value={creditcard.creditNumber} readOnly/>                          
        //                         <label className="form-label">ccv</label>                              
        //                         <input className="form-control" value={creditcard.ccv} readOnly/>
        //                         <label className="form-label">Saldo</label>                             
        //                         <input className="form-control" value={creditcard.value} readOnly/>
        //                         <label className="form-label">Bank</label>                            
        //                         <input className="form-control" value={creditcard.bank} readOnly/>
        //                     </div>                            
        //                 </div>                           
        //                ))}                */}

        //             </div> 
        //         </div>     
        //     )
        // }
}
        else if (isAuthenticated != true)
        {
            return(
                <Navigate to="/"/>
                )
        }
}
