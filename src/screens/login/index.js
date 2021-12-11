import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UselessTextInput from "../../components/textInput";
import Logo from "../../assets/logo.png"
import MinhaClaro from "../../assets/minhaClaro.png"
import Check from "../../assets/check.png"
import Seta from "../../assets/seta.png"
import {useNavigation} from '@react-navigation/native';


export const Login = () => {
    const navigation = useNavigation();
        return (
            <>
            <View>
                <View style={{ backgroundColor: "#e43130", height: 40 }}>
                    <Image style={{ width: "23%", height: "85%", marginTop: 2, marginBottom: 12 }} resizeMode='stretch' source={Logo}/>
                    <Image style={{ width: "45%", height: "87%", marginLeft:20 }} resizeMode='stretch' source={MinhaClaro}/>
                </View>
                <Text style={{ color: "black", fontWeight: "bold", marginLeft: 30, marginTop: 60, marginBottom:20 }}>Para acessar a Minha Claro, use seu e-mail:</Text>
                <UselessTextInput />
                <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <Image style={{ width: 27, height: 27, marginLeft: 25, marginBottom:10 }} resizeMode='stretch' source={Check} />
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 23, margin: 5 }}>Permanecer logado</Text>
                </View>
                <View style={{ alignItems:"center" }}>
                    <TouchableOpacity style={styles.TOLogin} onPress={()=> navigation.navigate("Home")}>
                        <Text style={{ fontSize:20}}>ENTRAR</Text>
                        </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <Image style={{ width: 15, height: 15, marginLeft: 30 }} resizeMode='stretch' source={Seta} />
                    <Text style={{ color: "#696969", fontSize: 15, marginLeft: 10, margin: 15 }}>REENVIAR MINHA SENHA</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                    <Image style={{ width: 15, height: 15, marginLeft: 30 }} resizeMode='stretch' source={Seta} />
                    <Text style={{ color: "#696969", fontSize: 15, marginLeft: 10, margin: 15 }}>ACESSAR COM NUMERO DE CELULAR</Text>
                </View>
                <View style={{ marginTop: 25, padding: 30, flexDirection: "row", alignItems: "baseline", backgroundColor: "black", height: "100%", width: "100%", }}>
                    <Text style={{ color: "white", fontSize: 15, marginRight: 20, marginBottom: 15 }}>NÃO TEM ACESSO?</Text>
                    <TouchableOpacity style={styles.TOCadastro}>
                        <Text style={{ fontSize:15}}> CADASTRE-SE - </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        );
    
};
const styles = StyleSheet.create({
    TOLogin: {
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
        height: 60,
        width: 300,
        borderRadius: 10,
        backgroundColor:"#e43130",
        borderBottomWidth:3,
        borderRightWidth:3,
        borderColor:"#b11200",
    },
    TOCadastro: {
        alignItems:"center",
        justifyContent:"center",
        
        height: 60,
        width: 150,
        borderRadius: 10,
        backgroundColor:"#e43130",
        borderBottomWidth:3,
        borderRightWidth:3,
        borderColor:"#b11200",
    }
});
