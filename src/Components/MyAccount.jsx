import axios from "axios";
import { Row } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CustomerCreditcardData, CustomerData, UserAuthenticator } from "../index";

export const MyAccount = () => {
    

    const { customerData, setCustomerData } = useContext(CustomerData);
    const { customerCreditcardData, setCustomerCreditcardData } = useContext(CustomerCreditcardData);
    const {isAuthenticated, setIsAuthenticated} = useContext(UserAuthenticator);
    
    // const { addCustomerData, setaAdCustomerData } = useState(false);
    // const { addCustomerCreditcardData, setaAdCustomerCreditcardData } = useState(false);


    // const [data, setData] = useState([]);
    // const getData = async () => {
    //   const { data } = await axios.get(`https://localhost:7117/api/CustomerAPI/1`);
    //   setData(data);
    //   console.log(data);
    // };
    
    // useEffect(() => {
    //   getData();
    // }, []);

    // console.log(customerData.length)
    // console.log(addCustomerData, addCustomerCreditcardData)
//    if(customerData.length == 0)
//    {
//     if(addCustomerData == false && addCustomerCreditcardData == false)
//     {
    // if(customerData.length == 0 && customerCreditcardData.length == 0)

    // -----> Still not done. If user has no customerdata promp customer to add customer data
    // if user has customer data but no creditcarddata prmp user to add creditcard data
    // if user has customer data but no creditcard data, display customerdata and promp user to add creditcarddata
    // if user have both customerdata and creditcarddata display them

console.log(customerData, customerCreditcardData)

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
                        <div className="d-flex justify-content-start px-3 py-1">
                        <Link className="btn btn-primary py-auto" to={`/AddPaymentMethod/`}>Add payment method</Link>
                        </div>
                        <div className="d-flex justify-content-start px-3 py-1">
                        <Link className="btn btn-primary py-auto" to={`/AddPersonalDetails/`}>Add personal details</Link>
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
                {/* <div className="px-3 d-flex justify-content-start">You have not added any personal details.                  
                </div>             */}
                {/* IF the person has details, show the div section below. */}                    
           
                <div className="d-flex justify-content-start px-3 py-1">
                    {/* <Link className="btn btn-primary py-auto" to={`/AddPersonalDetails/`}>Add personal details</Link> */}
                    <p>Display customerData "Map it out"</p>
                    </div>
                    <div className="d-flex justify-content-start px-3 py-1">
                    <Link className="btn btn-primary py-auto" to={`/AddPaymentMethod/`}>Add payment method</Link>
                    </div>
                    {/* <a href="#"> Change password</a> */}
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
                {/* <div className="px-3 d-flex justify-content-start">You have not added any personal details.                  
                </div>             */}
                {/* IF the person has details, show the div section below. */}                    
           
                <div className="d-flex justify-content-start px-3 py-1">
                    {/* <Link className="btn btn-primary py-auto" to={`/AddPersonalDetails/`}>Add personal details</Link> */}
                    <p>Display customerData "Map it out"</p>
                    </div>
                    <div className="d-flex justify-content-start px-3 py-1">
                    {/* <Link className="btn btn-primary py-auto" to={`/AddPaymentMethod/`}>Add payment method</Link> */}
                    <p>Display customerBilingData "Map it out"</p>
                    </div>
                    {/* <a href="#"> Change password</a> */}
                </div>     
            )
        }
}
        else if (isAuthenticated != true)
        {
            return(
                <Navigate to="/"/>
                )
        }
}


                   {/* IF the person has details, show the div section below. */}                    
                            {/* {data.map((customer) => (
                                <div className="d-flex flex-column"> 
                                <table className="table w-50">
                                <thead>
                                    <tr>
                                        <th style={{textAlign: "left"}}>Personal details</th>
                                        <th style={{textAlign: "left"}}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{textAlign: "left"}}>First name</th>
                                        <td style={{textAlign: "left"}}>{customer.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Last name</th>
                                        <td>{customer.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone number</th>   
                                        <td>{customer.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{customer.address}</td>
                                    </tr>
                                    <tr>
                                        <th>ZIP</th>
                                        <td>{customer.zipCode}</td>
                                    </tr>
                                    <tr>
                                        <th>Residence</th>
                                        <td>{customer.city}</td>
                                    </tr>
                                    <tr>
                                        <th>Country</th>
                                        <td>{customer.country}</td>
                                    </tr>
                                    <tr>
                                        <th>Mail address</th>
                                        <td>{customer.email}</td>
                                    </tr>
                                </tbody>
                                </table>
                                </div>                          
                            ))}
                            */}
