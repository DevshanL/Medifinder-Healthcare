import React, { Component } from 'react';
import axios from 'axios';
import './med.css';
import Swal from 'sweetalert2';
import moment from 'moment';


export default class Med extends Component {

    

       constructor(props){
           super(props);
           this.state={
              //medId:"",
               brand:"",
               name:"",
               qty:"",
               manDate:"",
               expDate:"",
               category:"",
               details:"",
               price:""

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

           const {brand,name,qty,manDate,expDate,category,details,price} = this.state;

           const data = {
            //drugId:drugId,
            brand:brand,
            name:name,
            qty:qty,
            manDate:manDate,
            expDate:expDate,
            category:category,
            details:details,
            price:price

           }


           if(brand =="" )
           {
            Swal.fire('WARNING','Add Brand Name','warning')
           }
           else if(name ==""){
            Swal.fire('WARNING','Add Medicine Name','warning')
           }
           else if(qty ==""){
            Swal.fire('WARNING','Add Quantity','warning')
           }
           else if(manDate ==""){
            Swal.fire('WARNING','Add Manufactured Date','warning')
           }
           else if(expDate ==""){
            Swal.fire('WARNING','Add Expire Date','warning')
           }
           else if(details ==""){
            Swal.fire('WARNING','Add Medicine Details','warning')
            
          }
          else if(price ==""){
            Swal.fire('WARNING','Add Medicine Price','warning')
          }

           console.log(data)

           axios.post("http://localhost:8080/drug/save", data).then((res) =>{
               if(res.data.success){
              Swal.fire('Added','Medicine Added Successfully','success')
                   this.setState(
                       {
                        // drugId:"",
                        brand:"",
                        name:"",
                        qty:"",
                        manDate:"",
                        expDate:"",
                        category:"",
                        details:"",
                        price:""
    
                       }
                   )
               }
           })

}




//Demo button
btnDemo = (e) => {
  e.preventDefault();

  const {brand, name, qty, manDate, expDate, category, deatils, price} = this.state;

  const data = {
    
    brand: brand,
    name: name,
    qty: qty,
    manDate: manDate,
    expDate: expDate,
    category: category,
    deatils: deatils,
    price: price
  }

  console.log(data)

  this.setState(
      {
      
        name: "Amoxicillin",
        brand: "Amoxil",
        qty: "1000",
        manDate: "11/09/2021",
        expDate: "11/09/2024",
        category: "Tablet",
        details: "Amoxicillin is a penicillin antibiotic that fights bacteria.",
        price: "100",
 
      }
  )
}



    render() {

      
        return (

         
            <div id="page-content-wrapper" style={{ backgroundImage: "url('https://miro.medium.com/max/1200/1*K9epZSTeca6HXSDrWiGmQA.png')" }} >
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
         <a class="nav-link" href="/medret"> &#62; All Madicines</a>
       </li>
      <li class="nav-item">
        <a class="nav-link" href="/med"> &#62;  Add Medicine <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav> 


<hr/>





<div class="p-3 mb-2 bg-info text-dark  rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Medicine</h1>




               
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
    <label  style={{marginBottom:'5px'}} >Brand</label>
    <input type="text" class="form-control"  name="brand" placeholder="Enter Brand Name"
    value={this.state.brand}
  
    onChange={this.handleInputChange}
    required
    />


  </div>

  <div class="col">
  <label  style={{marginBottom:'5px'}} >Medicine Name</label>
    <input type="text" class="form-control" name="name"  placeholder="Enter Medicine Name"
     value={this.state.name}
     onChange={this.handleInputChange}
     required
     />
  </div>
</div>

   
<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Medicine Quantity</label>
  <input   type="number" min="0.00" max="1000000.00" step="0.01"   class="form-control" name="qty" placeholder="Enter Qty"
    value={this.state.qty}
    onChange={this.handleInputChange}
    />
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Manufactured Date</label>
    <input type="date" class="form-control" name="manDate"  placeholder="Enter Manufactured Date"
     value={this.state.manDate}
     onChange={this.handleInputChange}
     max={moment().format("YYYY-MM-DD")}
     required

     />
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Expire Date</label>
    <input type="date" class="form-control" name="expDate" placeholder="Enter Expire Date"
    value={this.state.expDate}
    onChange={this.handleInputChange}
    min={moment().format("YYYY-MM-DD")}
    required
    />
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Medicine Cayegory</label>
    <input type="text" class="form-control" name="category"  placeholder="Enter Medicine Category"
     value={this.state.category}
     onChange={this.handleInputChange}
     />
  </div>


  <div class="col">
  <label style={{marginBottom:'5px'}} >Medicine Description</label>
    <input type="text" class="form-control" name="details"  placeholder="Enter Medicine Description"
     value={this.state.details}
     onChange={this.handleInputChange}
     />
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} > Piece</label>
    <input   type="number" min="0.00" max="1000000.00" step="0.01"   class="form-control" name="price" placeholder="Enter Price"
    value={this.state.price}
    onChange={this.handleInputChange}
    />
  </div>
  </div>




                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add Medicine
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
