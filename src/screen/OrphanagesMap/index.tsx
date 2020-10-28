import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker,Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import styles from './styles';
import mapMarker from '../../images/map-marker.png';

import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const OrphanagesMap = () => {

  const [orphanages, setOrphanages ] = useState<Orphanage[]>([]);

  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    })
  });

  function handleNavigateToOrphanageDetails(id: number){
    navigation.navigate('OrphanageDetails', { id });
  };

  function handleNavigateToSelectMapPosition(){
    navigation.navigate('SelectMapPosition')
  };

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
        {orphanages.map(orphanage => {

          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 1,
                y: 0,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} Orfanatos Encontrados!!</Text>

        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#FFF"/>
        </RectButton>

      </View>
    </View>
  );
}

export default OrphanagesMap;
