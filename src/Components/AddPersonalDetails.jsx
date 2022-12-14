import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CustomerData, CustomerCreditcardData, CurrentlyLoggedin } from "../index";
import axios from "axios";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import imageExample from "../Image/Logo.PNG";
import cartItems from "./Data/ismet3.json"

export const AddPersonalDetails = () => {
    // function AddPersonalDetails(){

    

    const {customerData, setCustomerData} = useContext(CustomerData)
    const {customerCreditcardData, setCustomerCreditcardData} = useContext(CustomerCreditcardData)

    // const [userId , setUserId] = useState("");

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");

    const [address, setAddress] = useState("");

    const [zipCode, setZipCode] = useState("");

    const [city, setCity] = useState("");

    const [country, setCountry] = useState("");

    const [email, setEmail] = useState("");

    // Get the userId from customerData
    //   const getUserId = {
    //     .forEach((el) => {
    //         console.log(el) 
    //         customerCreditcardArray.push(el);
    //         //   if(el.customerId == tempCustomerId.customerId)
    //         //   {
    //         //     console.log("customer data set to match!")
    //         //     setCustomerCreditcardData([...customerCreditcardData, el])              
    //         //   }
    //          }); 
    //   }

    // const addPersonalDetails = () => {

    //     var person = {
    //         UserId: userId,
    //         FirstName: firstName,
    //         LastName: lastName,
    //         PhoneNumber: phoneNumber,
    //         Address: address,
    //         ZipCode: zipCode,
    //         City: city,
    //         Country: country,
    //         Email: email,
    //     }

    //     console.log({person})
    //     //axios.post(`https://localhost:7117/api/CustomerAPI/`, {person})
    // }

    // const handleSubmit = (e) => {
    //     addPersonalDetails();
    //     e.preventDefault();
    // }
console.log("creidcardList " ,customerCreditcardData, "customerList ", customerData);
            return (
                    <div className="container container-md">
                        <div className="d-flex flex-column p-3">
                            <h2 className="d-flex justify-content-start">Add personal details</h2>
                            <p className="d-flex justify-content-start">Fill in the form below, please.</p>
                        </div>

                        <div className="px-1 mx-3 rounded" style={{backgroundColor: "gray", width: "45%"}}>
                            <div className="mx-1 py-2">
                                <form className="px-3 py-2">
                                {/* onSubmit={handleSubmit} */}
                                    <p className="display-6">FORM</p>
                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>First name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="firstName"
                                            // value={firstName}
                                            // onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Last name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="lastName"
                                            // value={lastName}
                                            // onChange={(e) => setLastName(e.target.value)}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Phone number</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="phoneNumber"
                                            // value={phoneNumber}
                                            // onChange={(e) => setPhoneNumber(e.target.value)}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Address</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="address"
                                            // value={address}
                                            // onChange={(e) => setAddress(e.target.value)}
                                            required

                                        />
                                    </div>


                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>ZIP</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="zipCode"
                                            // value={zipCode}
                                            // onChange={(e) => setZipCode(e.target.value)}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Residence</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="city"
                                            // value={city}
                                            // onChange={(e) => setCity(e.target.value)}
                                            required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Country</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="country"
                                            // value={country}
                                            // onChange={(e) => setCountry(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group pb-4">
                                        <label style={{float: "left", paddingLeft: "5px"}}>Mail address</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-sm" 
                                            name="email"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-success">Submit</button>
                                </form>
                        </div>                        
                        </div>
                        <div className="d-flex justify-content-start p-3">
                        <Link className="btn btn-primary" to={`/MyAccount/`}>Return to account</Link>
                        </div>

                    </div>
            );
                
        }

        // export default AddPersonalDetails();