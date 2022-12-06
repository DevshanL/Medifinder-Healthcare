import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';


export default class MedEdit extends Component {

  

    //Binding event handler method
    constructor(props){
      super(props);
      this.state={
        medId:"",
        brand:"",
        name:"",
        qty:"",
        manDate:"",
        expDate:"",
        category:"",
        details:"",
        price:""
        // medIdError:"",
        // brandError:"",
        // nameError:"",
        // qtyError:"",
        // manDateError:"",
        // expDateError:"",
        // categoryError:"",
        // detailsError:"",
        // priceError:""

     }
  } 

  handleInputChange = (e) =>{
      const{name,value} = e.target;

      this.setState({
          ...this.state,
          [name]:value
      })

  } 

//   //validation
//   validate= ()=>{
//     let medIdError="";
//     let brandError="";
//     let nameError="";
//     let qtyError="";
//     let manDateError="";
//     let expDateError="";
//     let categoryError="";
//     let detailsError="";
//     let priceError="";

   
//     if(!this.state.medId){
//       medIdError="*Med ID is Required!"
//      }
//     if(!this.state.brand){
//      brandError="*Brand is Required!"
//     }
//     if(!this.state.name){
//        nameError="*Name is Required"
//     }
   
//     if(!this.state.qty){
//       qtyError="*Qty is Required"
//     }
//    if(!this.state.manDate){
//     manDateError="*Manufactured date is Required"
//     }
   
//     if(!this.state.expDate){
//       expDateError="*Expire Date is Required"
//    }
   
//    if(!this.state.category){
//     categoryError="*Categoryis Required"
//    }
   
     
//     if(!this.state.details){
//       detailsError="*Details are Required"
//     }
   
     
   
//    if(!this.state.price){
//     priceError="Price is Required"
//     }
   
//     if(medIdError||brandError||nameError||qtyError||manDateError||expDateError||categoryError||detailsError||priceError){
//      this.setState(medIdError||{brandError,nameError,qtyError,manDateError,expDateError,categoryError,detailsError,priceError});
//      return false;
   
//     }  

//  return true;

// }
  //onsubmit method
  onSubmit =(e) =>{
      e.preventDefault();
      // const isValid= this.validate();
      const id =this.props.match.params.id;

      const {medId,brand,name,qty,manDate,expDate,category,details,price} = this.state;

      const data = {
        medId:medId,
        brand:brand,
        name:name,
        qty:qty,
        manDate:manDate,
        expDate:expDate,
        category:category,
        details:details,
        price:price

      }
      //if validation succussesfully pass
      // if(isValid){
      console.log(data)
     //Put data to back end using the Http link
      axios.put(`http://localhost:8080/drug/updatedrug/${id}`, data).then((res) =>{
          if(res.data.success){
            Swal.fire('Updated','Drug Details Updated Successfilly','success')
              this.setState(
                  {
                    medId:"",
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

  
  //load data from a remote endpoint
  componentDidMount(){
    

      const id =this.props.match.params.id;

      axios.get(`http://localhost:8080/drug/${id}`).then((res) =>{
          if(res.data.success){
              this.setState({
                 medId:res.data.drug.medId,
                 brand:res.data.drug.brand,
                 name:res.data.drug.name,
                 qty:res.data.drug.qty,
                 manDate:res.data.drug.manDate,
                 expDate:res.data.drug.expDate,
                 category:res.data.drug.category,
                 details:res.data.drug.details,
                 price:res.data.drug.price
              });

              console.log(this.state.drug);
          }
      });
  }
  render() {
    
    const id =this.props.match.params.id;
    
    return (
      //component organizer
      <div id="wrapper" className="toggled">
      <div  style={{ backgroundColor: "#e3dac9" }} id="page-content-wrapper">
      <div className="container-fluid">

       
    
          {/* custom navigation        */}
          <nav class="navbar navbar-expand-lg rounded-3" style={{ backgroundColor: "#006a4e" }}>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item active">
    <a style={{textDecoration:'none',color:'white'}} class="nav-link" href="/">Dashboard </a>
  </li>
  <li class="nav-item">
    <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href="/intdash"> &#62;Inventory Cards</a>
  </li>
  <li class="nav-item">
    <a  style={{textDecoration:'none',color:'white'}} class="nav-link" href=""> &#62; Update Inventory Card <span class="sr-only">(current)</span> </a>
  </li>
</ul>
</div>
</nav> 

<hr/>

{/* Instruction section */}
<div class="card">
<div class="card-body">
<h5 class="card-title">INSTRUCTIONS</h5>

<div class="spinner-grow text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
<p class="card-text"><small class="text-muted">Latest Regulations</small></p>
</div>

</div>

{/* Title        */}
<div class="p-3 mb-2  text-dark rounded-3" style={{ backgroundColor: "#faf0e6" }}>
        <div className="col-md-8 mt-4 mx-auto">
          <center>
        <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>EDIT INVENTORY CARD</b></h1>
           </center>
        <hr/>


            {/* Edit form */}
            <form className="needs-validation" noValidate>

<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Medicine ID</label>
<input type="text" class="form-control" name="medId" placeholder="Enter Medicine ID"
value={`MED${id.substr(0,7)}`}
readOnly
onChange={this.handleInputChange}
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.medIdError}
               </div> */}
</div>


</div>


<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >Brand</label>
<input type="text" class="form-control" name="brand" placeholder="Enter Brand"
value={this.state.brand}
readOnly
onChange={this.handleInputChange}
required
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.brandError}
               </div> */}
</div>

<div class="col">
<label style={{marginBottom:'5px'}} >Name</label>
<input type="text" class="form-control" name="name"  placeholder="Enter Name"
 value={this.state.name}
 readOnly
 onChange={this.handleInputChange}
 required
 />
 {/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.nameError}
               </div> */}
</div>
</div>




<div class="row">
<div class="col">
<label style={{marginBottom:'5px'}} >QTY</label>
<input type="number" class="form-control" name="qty" placeholder="Enter Qty"
value={this.state.qty}
readOnly
onChange={this.handleInputChange}
required
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.qtyError}
               </div> */}
</div>

<div class="col">
<label style={{marginBottom:'5px'}} >Manufactured Date</label>
<input type="date" class="form-control" name="manDate" placeholder="Enter Manufactured Date"
value={this.state.manDate}
onChange={this.handleInputChange}
required
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.manDateError}
               </div> */}
</div>
</div>

<div class="col">
<label style={{marginBottom:'5px'}} >Expire Date</label>
<input type="date" class="form-control" name="expDate" placeholder="Enter Expire Date"
value={this.state.expDate}
onChange={this.handleInputChange}
required
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.expDateError}
               </div> */}
</div>

<div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Category</label>
                    <input type="text"
                    className="form-control"
                    name="category"
                    placeholder="Enter Category"
                    value={this.state.category}
                    
                    onChange={this.handleInputChange}
                    required/>
                    {/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.categoryError}
               </div> */}
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Details</label>
                    <textarea 
                    className="form-control"
                    name="details"
                    placeholder="Enter Details"
                    value={this.state.details}
                    onChange={this.handleInputChange}
                    required/>
                    {/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.detailsError}
               </div> */}
                    </div>


<div class="row">


<div class="col">
<label style={{marginBottom:'5px'}} >Price</label>
<input type="number" class="form-control" name="price" placeholder="Enter Price"
value={this.state.price}
onChange={this.handleInputChange}
required
/>
{/* <div style={{fontSize:15 ,color:"red"}}>
                       {this.state.priceError}
               </div> */}
</div>
</div>

                    
                    

                   
                     
                     <hr/>
                    <button className="btn btn-success" type="submit"  style={{backgroundColor: "#0E3662"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update Medicine Details
                    </button>

                </form>    
        </div>
        </div>
        </div>
        </div>
         
        </div>
    )
  }
}

