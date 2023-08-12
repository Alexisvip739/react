import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard, Dimensions } from "react-native";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {user,userDetails} from '../../utils/userDB'
import useAuth from "../../hooks/useAuth";
export default function LoginForm() {

  
    const [error,setError] = useState('')
    const {login,logout} = useAuth()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
          const {username,password} = formValue;

          if(username!== user.username || password !==user.password){
            setError('El usuario o la contrasena no son correctos ')

          }else{
            login(userDetails)
            
          }
        },
      });

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />


      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
      
    </View>
  );
}
function initialValues() {
    return {
      username: "",
      password: "",
    };
  }
  
  function validationSchema() {
    return {
      username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    };
  }
const screenWidth = Dimensions.get("window").width-10;


const styles = StyleSheet.create({
  container: {

    display:'flex', 
    flex:1,
    width: screenWidth, // Establecer el ancho del formulario como el ancho de la pantalla
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    width: screenWidth, // Hace que el input ocupe todo el ancho disponible
    textAlign: "center",
    backgroundColor:"rgba(0,0,0,0.04)",
    borderWidth: 1,
    padding: 10,
    marginBottom:10,
    borderRadius: 10,

  },
 
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
