import React, { Component } from 'react'
import {MapContainer,LocationMarker,Popup,TileLayer,useMapEvents,} from 'react-leaflet'

export default class Leafletmap extends Component {
  render() {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </LocationMarker>
      </MapContainer>
    )
  }
}
