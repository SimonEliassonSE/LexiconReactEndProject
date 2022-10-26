import React from "react";


export class Products extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    
        };

        

    }
   
       
componentDidMount(){
   
}

render(){
    const{
        
    } =this.state;
       
    
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
            </div>
        );
            
    }
}