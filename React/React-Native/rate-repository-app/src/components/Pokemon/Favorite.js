import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavoriteApi, isPokemonFavoriteAPi, removePokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteAPi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
    try {
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
        await removePokemonFavoriteApi(id);
        onReloadCheckFavorite()
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    // Agregar la animación al presionar el botón
    this.iconRef.bounceIn(800);
    // Ejecutar la función asociada al botón (addFavorite o removeFavorite)
    isFavorite ? removeFavorite() : addFavorite();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animatable.View ref={(ref) => (this.iconRef = ref)}>
        <Icon name="heart" color="#fff" size={20} style={{ marginRight: 20 }} />
      </Animatable.View>
    </TouchableOpacity>
  );
}
