import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';

function Index() {
  const [currentRegion, setCurrentRegion] = useState(null);
 
  useEffect(() => {
    async function loadInitialPosition(){
      const {granted} = await requestPermissionsAsync();      

      if(granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords; 
        
        
        setCurrentRegion({
          latitude,
          longitude,
          longitudeDelta: 0.04,
          latitudeDelta: 0.04,
        })

      }
    }

    loadInitialPosition();
  },[]);

  if(!currentRegion){
    return null;
  }

  return (
      <View style={styles.container}>
        <MapView 
          initialRegion={currentRegion}
          style={styles.mapStyle}          
          showsUserLocation
          loadingEnabled />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Index;