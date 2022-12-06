import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';



export default class MedRet extends Component {
constructor(props){
  super(props);

  this.state={
    drug:[]
  };
}


componentDidMount(){
  this.retriveDrug();
}


retriveDrug(){
  axios.get("http://localhost:8080/drug").then(res =>{
      if(res.data.success){
        this.setState({
          drug:res.data.existingPosts
        });

        console.log(this.state.drug);
      }

  });
}

//delete a material card

onDelete = (id) =>{

  axios.delete(`http://localhost:8080/drug/deletedrug/${id}`).then((res) =>{
    Swal.fire('Deleted','Drug Details Deleted Successfilly','success')
    this.retriveDrug();
  })
}


//filter data
filterData(drug,searchKey){

const result = drug.filter((drug) =>
   drug.brand.toLowerCase().includes(searchKey) ||
   drug.name.toLowerCase().includes(searchKey)||
   drug.category.toLowerCase().includes(searchKey)
)

this.setState({drug:result})

}

//Search Function
handleSearchArea = (e) =>{

  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8080/drug").then(res =>{
      if(res.data.success){

        this.filterData(res.data.existingPosts,searchKey)

      }
  });

}

  render() {
    return (

   
      <div id="page-content-wrapper" style={{ backgroundImage: "url('https://miro.medium.com/max/1200/1*K9epZSTeca6HXSDrWiGmQA.png')" }} >
          
          <div className="container-fluid">
            

 {/* custom navigation        */}
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li class="nav-item active">
         <a class="nav-link" href="/">Home</a>
       </li>
      <li class="nav-item">
        <a class="nav-link" href="/medret"> &#62; All Medicines  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav> 
        




<hr/>
          
      
   {/* Title        */}
  <div className="container bg-info rounded-3">
        <div className="row">
        <center>
          <div className="col-lg-12 mt-2 mb-2">
           
          <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>
          ALL MEDICINES
             </b></h1>
           
          </div>
          
        </center>
       

        {/* Filter Category */}
        
<div className="p-3 mb-2 text-light rounded-3" style={{ backgroundColor: "#0E3662" }} >
          <div class="form-check">
        
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
    ALL
  </label>
</div>

          <div class="form-check" >
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="liquid" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
  Liquid
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="tablet" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
  Tablet
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="capsules" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
  Capsules
  </label>
</div>

</div>



<center>
          <div  className="col-lg-3 mt-2 mb-2 ">
          
            <input
            className="form-control "
            type="search"
            placeholder="Search Drug"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
             
          </div>
          </center>

        </div>
        <hr/>


        <button className="btn btn-primary"><a href="/med" style={{textDecoration:'none',color:'white'}}>Add New Medicine &nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>

         <br/>
         <br/>
         


         <div class="p-3 mb-2 bg-info text-dark rounded-3">
         <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">MedID</th>
               <th scope="col">Brand</th>
               <th scope="col">Name</th>
               <th scope="col">Quantity</th>
               <th scope="col">Manufactured Date</th>
               <th scope="col">Expire Date</th>
               <th scope="col">Category</th>
               <th scope="col">Details</th>
               <th scope="col">Price</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {this.state.drug.map((drug,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    {/* <td>
                      <a href={`/drugpost/${drug._id}`} style={{textDecoration:'none'}}>
                      {drug.drugId}
                      </a>
                      </td> */}
                        <td>
                      <a href={`/drugpost/${drug._id}`} style={{textDecoration:'none'}}>
                    
                      {`MED${drug._id.substr(0,7)}`}
                      </a>
                      </td>
                    <td>{drug.brand}</td>
                    <td>{drug.name}</td>
                    <td>{drug.qty}</td>
                   
                    <td>{drug.manDate}</td>
                    <td>{drug.expDate}</td>
                    <td>{drug.category}</td>
                    <td>{drug.details}</td>
                    <td>{drug.price}</td>
                 
                    <td>
                      <a className="btn btn-info" href={`/mededit/${drug._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(drug._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>

                  </tr>


            ))}
            </tbody>          
         </table>
         </div>

   

         
        </div>
        </div>
        </div>
      
     





      
    )
  }
}
