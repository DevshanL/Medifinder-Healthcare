import React, { Component } from 'react';
import axios from 'axios';
import './med.css';
import Swal from 'sweetalert2';



export default class PhmCreate extends Component {

    
    

       constructor(props){
           super(props);
           this.state={
              //medId:"",
               name:"",
               owner:"",
               location:""

          }
       } 

       

       handleInputChange = (e) =>{
           const{name,value} = e.target;

           this.setState({
               ...this.state,
               [name]:value
           })

       } 

       
       
       onSubmit =(e) =>{
           e.preventDefault();

           const {name,owner,location} = this.state;

           const data = {
            //drugId:drugId,
            name:name,
            owner:owner,
            location:location

           }


           if(name =="" )
           {
            Swal.fire('WARNING','Add Pharmacy Name','warning')
           }
           else if(owner ==""){
            Swal.fire('WARNING','Add Owner Name','warning')
           }
           else if(location ==""){
            Swal.fire('WARNING','Add Location','warning')
           }
           

           console.log(data)

           axios.post("http://localhost:8080/phm/save", data).then((res) =>{
               if(res.data.success){
              Swal.fire('Added','Pharmacy Added Successfully','success')
                   this.setState(
                       {
                        // drugId:"",
                        name:"",
                        owner:"",
                        location:""
    
                       }
                   )
               }
           })

}




//Demo button
btnDemo = (e) => {
  e.preventDefault();

  const {name, owner, location} = this.state;

  const data = {
    
    name: name,
    owner: owner,
    location: location
   
  }

  console.log(data)

  this.setState(
      {
      
        name: "Adikt Pharmacy",
        owner: "Pasindu Mewan",
        location: "Gamapaha"
 
      }
  )
}



    render() {

      
        return (

         
            <div id="page-content-wrapper" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')" }} >
            <div className="container-fluid" >


            
 {/* custom navigation        */}
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li class="nav-item active">
         <a class="nav-link" href="/"> Home</a>
       </li>
       <li class="nav-item active">
         <a class="nav-link" href="/phmret"> &#62; All Pharmacies</a>
       </li>
      <li class="nav-item">
        <a class="nav-link" href="/phmadd"> &#62; Register a Pharmacy <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav> 


<hr/>





<div class="p-3 mb-2 bg-info text-dark  rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Register New Pharmacy</h1>




               
                <form className="needs-validation" noValidate>
                    
                {/* <div class="col">
    <label  style={{marginBottom:'5px'}} >Drug ID</label>
    <input type="text" class="form-control"  name="drugId" placeholder="Enter Drug ID"
    value={this.state.drugId}
  
    onChange={this.handleInputChange}
    required
    />


  </div>
                 */}
                    <div class="row">
  <div class="col">
    <label  style={{marginBottom:'5px'}} >Pharmacy Name</label>
    <input type="text" class="form-control"  name="name" placeholder="Enter Pharmacy Name"
    value={this.state.name}
  
    onChange={this.handleInputChange}
    required
    />


  </div>

  <div class="col">
  <label  style={{marginBottom:'5px'}} >Pharmacy Owner</label>
    <input type="text" class="form-control" name="owner"  placeholder="Enter Medicine Name"
     value={this.state.owner}
     onChange={this.handleInputChange}
     required
     />
  </div>
</div>

<div class="col">
  <label  style={{marginBottom:'5px'}} >Location</label>
    <input type="text" class="form-control" name="location"  placeholder="Enter Pharmacy Location"
     value={this.state.location}
     onChange={this.handleInputChange}
     required
     />
  </div>

 
                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add Pharmacy
                        </button>

                    </form>  
                    <br/>
                    <br/>
                        <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnDemo}>DEMO</button> 
                    </div>
                    </div>
                    </div>
                    </div>
            
            
        )
    }
}




