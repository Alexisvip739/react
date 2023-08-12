import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull, rest } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";
export async function getPokemonsFavoriteApi(){
    try{
        const response=await AsyncStorage.getItem(FAVORITE_STORAGE)
        return  JSON.parse(response||'[]');
    }catch(error){
        throw error;
    }
}

export async function addPokemonFavoriteApi(id){
    try{
        const favorite=await getPokemonsFavoriteApi();
        favorite.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorite))
    }catch (error){
        throw error;
    }
}

export async function isPokemonFavoriteAPi(id){
    try{
        const response= await getPokemonsFavoriteApi();
        return includes(response,id);
    }catch(error){
        throw error
    }
}

export async function removePokemonFavoriteApi(id) {
    try {
      const favorites = await getPokemonsFavoriteApi();
      const newFavorites = pull(favorites, id);
      await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
      throw error;
    }
  }
  
  











































    
