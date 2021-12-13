import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import UselessTextInput from "../../components/textInput";
import Logo from "../../assets/logo.png"
import MinhaClaro from "../../assets/minhaClaro.png"
import Seta from "../../assets/seta.png"
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"
import Icon05 from "../../assets/icon05.png"



export const Login = () => {
    const navigation = useNavigation();
    const [press, setPress] = useState(false)

        return (
            <>
                <View>
                    <View styles= {{background: "black"}}>
                        {/* <Image resizeMode='stretch' source={Icon05} />
                        <Text styles= {{background: "black"}}>(24)99254 6784</Text> */}
                    </View>
                    <View style={styles.vGeral}>
                        <Image style={styles.iLogo} resizeMode='stretch' source={Logo} />
                        <Image style={styles.iMinhaClaro} resizeMode='stretch' source={MinhaClaro} />
                    </View>
                    <Text style={styles.text01}>Para acessar a Minha Claro, use seu e-mail:</Text>
                    <UselessTextInput />
                    <View style={styles.vGeral02}>
                        <TouchableOpacity onPress={() => setPress(!press)}>
                            {press === true ?
                                <Image style={styles.iCheck} source={require('../../assets/check.png')} /> :
                                <Image style={styles.iCheck} source={require('../../assets/nocheck.png')} />
                            }      
                        </TouchableOpacity>
                        <Text style={styles.text02}>Permanecer logado</Text>
                    </View>
                    <View style={styles.vGeral03}>
                        <TouchableOpacity style={styles.TOLogin} onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.text03}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.vGeral04}>
                        <Image style={styles.iSeta} resizeMode='stretch' source={Seta} />
                        <TouchableOpacity onPress={() => Alert.alert("Em breve!")}>
                            <Text style={styles.text04}>REENVIAR MINHA SENHA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.vGeral05}>
                        <Image style={styles.iSeta} resizeMode='stretch' source={Seta} />
                        <TouchableOpacity onPress={() => Alert.alert("Em breve!")}>
                            <Text style={styles.text05}>ACESSAR COM NUMERO DE CELULAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.vGeral06}>
                        <Text style={styles.text07}>NÃO TEM ACESSO?</Text>
                        <TouchableOpacity style={styles.TOCadastro} onPress={() => Alert.alert("Clique em entrar!")}>

                            <Text style={styles.text06}> CADASTRE-SE - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );

    };

