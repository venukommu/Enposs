import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Card, CardBody } from "reactstrap";

const mapStyles = {
  width: '100%',
  height: "570px",
  marginTop: "-25px",
  marginLeft: "-24px",
};

export class MapContainer extends Component {
    state = {
        contacts: [],
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
        error: null
     }

  onMarkerClick = (props, marker, e) =>
    this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
    });
 
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <Card style={{width: '100%',
        height: "570px"}}><CardBody>
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 33.859834068446666,
            lng: -117.99783060414177
          }
        } >
        <Marker
          onClick={this.onMarkerClick}
          name={'6940 Beach Blvd D609, Buena Park, CA 90621, USA'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </CardBody>
      </Card>
    );
  }
}

export default GoogleApiWrapper({
  //apiKey: 'AIzaSyCqHFLlCW6oz0MSQxnuNlvbBb5ypJWECvQ'
  apiKey: 'AIzaSyADLE1srUwBq0CcotjzcvCt8o5jjbWdGmU'
})(MapContainer);