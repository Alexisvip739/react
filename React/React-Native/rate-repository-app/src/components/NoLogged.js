import { StyleSheet, Button, View, Text, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesión</Text>

            {/* Use TouchableOpacity correctly */}
            <TouchableOpacity
                onPress={() => { navigation.navigate("Account") }}
                style={styles.button} // Apply the styles to the button
            >
                <Text style={styles.buttonText}>ir a al login</Text>
            </TouchableOpacity>
        </View>
    )
}
const screenWidth = Dimensions.get("window").width-10;
const screenHeight = Dimensions.get("window").height-200;

const styles = StyleSheet.create({
    content: {
        width:screenWidth,
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        height:screenHeight
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        // Add your custom styles for the button here
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'bold'
    }
})
