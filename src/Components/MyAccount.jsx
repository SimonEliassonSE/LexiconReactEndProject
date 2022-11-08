import axios from "axios";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MyAccount = () => {



    const [data, setData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get(`https://localhost:7117/api/CustomerAPI/1`);
      setData(data);
      console.log(data);
      
    };
    useEffect(() => {
      getData();
    }, []);


   
    
        return (
            <div className="container container-sm">
                <div className="p-3">
                    <h2 className="d-flex justify-content-start">My account</h2>
                </div>

             
                <div className="px-3 d-flex justify-content-start">You have not added any personal details.
                   
                </div>
               
              


                {/* IF the person has details, show the div section below. */}

                        {data.map((customer) => (
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
       

                <div className="px-3 d-flex justify-content-start">
                    <Link className="btn btn-primary" to={`/AddPaymentMethod/`}>Add payment method</Link>
                    <Link className="btn btn-primary" to={`/AddPersonalDetails/`}>Add personal details</Link>
                    <a href="#"> Change password</a>
                </div>
                </div>



        );
    }
    