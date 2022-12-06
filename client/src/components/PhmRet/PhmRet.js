import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';



export default class PhmRet extends Component {
constructor(props){
  super(props);

  this.state={
    phm:[]
  };
}


componentDidMount(){
  this.retrivePhm();
}


retrivePhm(){
  axios.get("http://localhost:8080/phm").then(res =>{
      if(res.data.success){
        this.setState({
          phm:res.data.existingPosts
        });

        console.log(this.state.phm);
      }

  });
}

//delete a material card

onDelete = (id) =>{

  axios.delete(`http://localhost:8080/phm/deletephm/${id}`).then((res) =>{
    Swal.fire('Deleted','Pharmacy Details Deleted Successfilly','success')
    this.retrivePhm();
  })
}


//filter data
filterData(phm,searchKey){

const result = phm.filter((phm) =>
phm.name.toLowerCase().includes(searchKey) ||
phm.owner.toLowerCase().includes(searchKey)
)

this.setState({phm:result})

}

//Search Function
handleSearchArea = (e) =>{

  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8080/phm").then(res =>{
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
        <a class="nav-link" href="/phmret"> &#62; All Pharmacies<span class="sr-only">(current)</span> </a>
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
          ALL Pharmacies
             </b></h1>
           
          </div>
          
        </center>
       

       




<center>
          <div  className="col-lg-3 mt-2 mb-2 ">
          
            <input
            className="form-control "
            type="search"
            placeholder="Search Pharmacy"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
             
          </div>
          </center>

        </div>
        <hr/>


        <button className="btn btn-primary"><a href="/phmcreate" style={{textDecoration:'none',color:'white'}}>Register New Pharmacy &nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>

         <br/>
         <br/>
         


         <div class="p-3 mb-2 bg-info text-dark rounded-3">
         <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Pharmacy ID</th>
               <th scope="col">Name</th>
               <th scope="col">Owner</th>
               <th scope="col">Location</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {this.state.phm.map((phm,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    {/* <td>
                      <a href={`/drugpost/${drug._id}`} style={{textDecoration:'none'}}>
                      {drug.drugId}
                      </a>
                      </td> */}
                        <td>
                      <a href={`/phmpost/${phm._id}`} style={{textDecoration:'none'}}>
                    
                      {`PHM${phm._id.substr(0,7)}`}
                      </a>
                      </td>
                    <td>{phm.name}</td>
                    <td>{phm.owner}</td>
                    <td>{phm.location}</td>
                   
                    <td>
                      <a className="btn btn-info" href={`/phmedit/${phm._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(phm._id)}>
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
