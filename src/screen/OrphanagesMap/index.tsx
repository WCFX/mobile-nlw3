import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker,Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import mapMarker from '../../images/map-marker.png';


const OrphanagesMap = () => {

  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails(){
    navigation.navigate('OrphanageDetails')
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 1,
            y: 0,
          }}
          coordinate={{
            latitude: -27.2092052,
            longitude: -49.6401092,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos Encontrados!!</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF"/>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default OrphanagesMap;
