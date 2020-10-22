import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import mapMarkerImg from '../../images/map-marker.png';

const SelectMapPosition = () => {

  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('OrphanageData');
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapView>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  );
}

export default SelectMapPosition;
