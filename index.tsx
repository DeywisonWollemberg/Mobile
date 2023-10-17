import React from "react";
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

export const Home = () => {

    return (
        <View style={styles.container}>

            <Text style={styles.logo}>MAACE</Text>

            <Text style={styles.title} >Email</Text>
            
            <TextInput style={styles.caixa}>  </TextInput>

            <Text style={styles.title} >Senha teste</Text>
            
            <TextInput style={styles.caixa} secureTextEntry={true}>  </TextInput>

            <TouchableOpacity style={styles.botao}> 
                <Text style={styles.texto}> Login </Text>
            </TouchableOpacity>
            
        </View>

        



    );
};

const styles = StyleSheet.create({

    logo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 60,
        marginBottom: 80,
    },

    container: {
        flex: 1,
        backgroundColor: '#121214',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontsize: 15,
    },

    caixa:{
        backgroundColor:'#f1f1f1',
        width: 200,
        borderRadius: 20,
        margin: 10,
        padding: 5,
    },


    botao:{
        backgroundColor:'grey',
        alignItems: 'center',
        width: 100,
        borderRadius: 20,
        margin: 10,
        padding: 5,
        
    },

    texto: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontsize: 15,
    },
    


    
});