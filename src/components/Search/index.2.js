import React, { Component } from "react";
import { Platform, View } from "react-native";
import PlacesInput from 'react-native-places-input';

export default class Search extends Component {
   
  state = {
    searchFocused: false
  };

  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;
    const GOOGLE_API_KEY = "AIzaSyCwWkXEXlAMHAsXrLC8g2faTIDIl1j5TeI";

    return (
      
        <PlacesInput
        placeHolder={'Some placeholder'}
        stylesContainer={{
            position: 'relative',
            alignSelf: 'stretch',
            margin: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            shadowOpacity: 0,
            borderColor: '#dedede',
            borderWidth: 1,
            marginBottom: 10
        }}
        stylesList={{
            top: 50,
            borderColor: '#dedede',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            left: -1,
            right: -1
        }}
        googleApiKey={GOOGLE_API_KEY} 
        onSelect={place => this.setState({place})} 
    />

     
    );
  }
}
