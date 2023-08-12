import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type({ types }) {
  console.log(types);

  const color = (type) => getColorByPokemonType(type);
  return (
    <View style={styles.content}>
      {types.map(item => (
        <View
          key={item.type.name}
          style={{ backgroundColor: color(item.type.name), ...styles.pill }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))
      }
    </View >
  )
}
const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  }
})
