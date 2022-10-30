import React from "react";
import myData from "./Data/ismet.json";
import joj from "../Image/Logo1.PNG";


export class Homepage extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    
        };

    }
   
       
componentDidMount(){
   
}

render(){
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
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                    <img style={{ width: 200, height: 200 }} src={joj} className="rounded mx-auto d-block"></img>
                                        899:-
                                    </div>
                                    <div className="col">
                                    <img style={{ width: 200, height: 200 }} src={joj} className="rounded mx-auto d-block"></img>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <img style={{ width: 200, height: 200 }} src={joj} className="rounded mx-auto d-block"></img>

                                    </div>
                                    <div className="col">
                                    <img style={{ width: 200, height: 200 }} src={joj} className="rounded mx-auto d-block"></img>

                                    </div>
                                </div>
                            </div>
                    </div>

                
                        
                </div>

                

            </div>


        );
            
    }
}