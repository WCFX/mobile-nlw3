import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';
import mapMarkerImg from '../../images/map-marker.png';

const OrphanageDetails = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/noticias/safe_image'}} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/noticias/safe_image'}} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/noticias/safe_image'}} />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Orf. Esperança</Text>
        <Text style={styles.description}>
          Presta Assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: -27.2092052,
            longitude: -49.6401092,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
          style={styles.mapStyle}
        >
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: -27.2092052,
              longitude: -49.6401092
            }}
          />
        </MapView>

        <View style={styles.routesContainer}>
          <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
        </View>
      </View>


    </ScrollView>
  );
}

export default OrphanageDetails;
