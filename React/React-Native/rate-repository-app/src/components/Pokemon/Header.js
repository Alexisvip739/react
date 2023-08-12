import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Header(props) {
  const { name, order, image, type } = props;

  const color = getColorByPokemonType(type);
  const bgStyles = { backgroundColor: color, ...styles.bg };

  return (
    <>
      <View style={[styles.shadowContainer, bgStyles]} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    height: 340,
    position: 'absolute',
    borderBottomEndRadius: 400,
    borderBottomLeftRadius: 400,
    transform: [{ scaleX: 1.2 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    marginHorizontal: 10,
    marginTop: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
 

  },
  order: {
    color: 'white',
    fontWeight: 'bold',
   
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -40,
    left: 20,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});