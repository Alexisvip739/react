import { Button, SafeAreaView, Text } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react';
import {getPokemonDetailsApi} from '../api/pokemon'
import {getPokemonsFavoriteApi} from '../api/favorite'
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList';
import { useFocusEffect } from '@react-navigation/native';
import NoLogged from '../components/NoLogged';
export default function Favorite() {
  
  const [pokemon,setPokemon]=useState([]);
  const {auth} = useAuth();
  useFocusEffect(
    useCallback(()=>{
      if (auth){
        (async()=>{
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
  
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemon(pokemonsArray)
        })()
      }
    },[auth])
  )
 
  return !auth ? (
      <NoLogged/>
    ):(
      <PokemonList pokemons={pokemon}/>
    );
}