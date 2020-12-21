import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "30%",
  height: "30%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -17.540361,
          lng: -52.5505,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDm7e0n30bxWohc9ljoPokLPGZ9HPpvZVM",
})(MapContainer);
