import React from "react";


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
            <div id ="homePage">
                <h1>Web Shop</h1>

                <img src={require('../Image/Electronics.PNG')} alt="Electronics" />
           
            </div>
        );
    }
}
