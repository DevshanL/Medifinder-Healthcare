import React, { Component } from 'react'
import { useState } from 'react'
import Leaflet, { latLng } from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

import './map.css';
import 'leaflet/dist/leaflet.css';
import Swal from 'sweetalert2';
import axios from 'axios';

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function LocationMarker() {
  
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {

      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      
    },
 
  })

  map.on('click', function(e){
    var coord = e.latlng;
    var latt = coord.lat;
    var lngg = coord.lng;
    console.log("You clicked the map at latitude: " + latt + " and longitude: " + lngg);

    setPosition(e.latlng)
 
    });
  
   

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
     
    </Marker>
  
  )
}




export default class MapCont extends Component {

  constructor(props){

    super(props);
    this.LocationMarker1 = React.createRef();
    this.state={
        name:"",
        owner:"",
        lati:"",
        lngi:""

        

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

    const {name,owner,lati,lngi} = this.state;


    const LocationMarker2 = this.LocationMarker1.current;

    console.log(this.LocationMarker1)

    const data = {
    

     name:name,
     owner:owner,
     lati:LocationMarker2.position.lat,
     lngi:LocationMarker2.position.lng,

    }

    console.log(data)

    axios.post("http://localhost:8080/phm/save", data).then((res) =>{
        if(res.data.success){
       Swal.fire('Added','Pharmacy Added Successfully','success')
            this.setState(
                {
                
                 name:"",
                 owner:"",
                 lati:"",
                 lngi:""
               

                }
            )
        }
    })

}


render() {

  const LocationMarker2 = this.LocationMarker1.current;

  console.log(LocationMarker2)
  

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
        <h1 className="h3 mb-3 font-weight-normal">Add New Pharmacy</h1>
 
        <form className="needs-validation" noValidate>

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
<label  style={{marginBottom:'5px'}} >Owner Name</label>
<input type="text" class="form-control" name="owner"  placeholder="Enter Owners Name"
value={this.state.owner}
onChange={this.handleInputChange}
required
/>
</div>
</div>

<br/>

<center>
    <MapContainer center={{ lat: 6.927079, lng: 79.861244 }} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker
    ref={this.LocationMarker1}
    />
   
  </MapContainer>
  </center>
  <br/>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Add Pharmacy
                </button>

            </form>  
            <br/>

            </div>
            </div>
            </div>
            </div>
  )
}
}
