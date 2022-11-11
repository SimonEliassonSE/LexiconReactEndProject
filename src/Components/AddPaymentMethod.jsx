import React from "react";
import { Link } from "react-router-dom";
import {Card, Col, Container, Image, ListGroup, Row, Title} from "react-bootstrap"
import imageExample from "../Image/Logo.PNG";
import cartItems from "./Data/ismet3.json"
import { useState } from "react";

export const AddPaymentMethod = () => {

    const [creditNumber, setCreditNumber] = useState("");
    const [ccv, setCCV] = useState("");
    const [bank, setBank] = useState("");
    
    // const addBilling = () => {
    //     var billing = {
    //         CreditNumber: creditNumber,
    //         CCV: ccv,
    //         Bank: bank
    //     }

    //     console.log({billing});
    // }

    // const handleSubmit = (e) => {
    //     addBilling();
    //     e.preventDefault();
    // }


            return (
                    <div className="container container-md">
                        <div className="d-flex flex-column p-3">
                            <h2 className="d-flex justify-content-start">Add personal details</h2>
                            <p className="d-flex justify-content-start">Fill in the form below, please.</p>
                        </div>

                        <div className="px-1 mx-3 rounded" style={{backgroundColor: "gray", width: "20%"}}>
                            <div className="d-flex mx-1 py-2">
                                <form className="px-3 py-2">
                                {/* onSubmit={handleSubmit} */}
                                    <p className="display-6">FORM</p>
                                    <div className="form-group">
                                            <label style={{float: "left", paddingLeft: "5px"}}>Credit card number</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="creditNumber"
                                                // value={creditNumber}
                                                // onChange={(e) => setCreditNumber(e.target.value)}
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
                                                // value={ccv}
                                                // onChange={(e) => setCCV(e.target.value)}
                                                required
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label style={{float: "left", paddingLeft: "5px"}}>Bank</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="bank"
                                                // value={bank}
                                                // onChange={(e) => setBank(e.target.value)}
                                                required
                                                />
                                        </div>
                                    </Row>
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