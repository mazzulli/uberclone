import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View,  } from 'react-native';

import Search from '../Search/index';

export default class Map extends Component {
  state = {
    region: null,
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        this.setState({          
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034
          }
        });
      }, //sucesso
      () => {}, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { region } = this.state;
    // console.log("Coordenadas:" + region);

    return (
      <View style={{flex: 1}}>
        <MapView 
          //initialRegion={currentRegion}
          region={region}
          style={{flex: 1}}
          followsUserLocation={true}
          zoomEnabled={true}
          showsUserLocation={true}
          loadingEnabled={true} />

          <Search />
      </View>
      
    );
  };
}
