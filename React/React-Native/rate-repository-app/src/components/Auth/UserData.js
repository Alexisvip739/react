import React,{useState,useCallback} from "react";
import { StyleSheet, View, Text,Dimensions,TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth";

import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../../api/favorite";
export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
        (async () => {
            try {
                const response = await getPokemonsFavoriteApi()
       
                setTotal(response?.length || 0)
            } catch (error) {
                setTotal(0)
            }
        })()
    }, [])
  )
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu style={styles.countFavorite}title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <TouchableOpacity onPress={logout} style={styles.btnLogout}>
        <Text style={styles.btnLogoutText}>Desconectarse</Text>
      </TouchableOpacity>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width-10;


const styles ={
  content: {
    width:screenWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataContent: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    
    width: '100%',
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemMenuTitle: {
    fontWeight: 'bold',
  },
  btnLogout: {
    backgroundColor: '#ff5555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  btnLogoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countFavorite:{
    backgroundColor:'green'
  }
};
