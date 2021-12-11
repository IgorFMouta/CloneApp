import React from "react";
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Porcentagem from "../../assets/porcentagem.png"
import Grafico from "../../assets/grafico.png"
import {useNavigation} from '@react-navigation/native';


export const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Image style={{ width: 24, height: 24, marginLeft: 30, marginTop: 30 }} source={require('../../assets/icon01.png')} />
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> Alert.alert("Você não tem dinheiro pra isso!")}>
            <Image style={{ width: 24, height: 24, marginLeft: 65, marginTop: 30 }} source={require('../../assets/icon02.png')} />
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> Alert.alert("Me manda um PIX de presente?")}>
            <Image style={{ width: 24, height: 24, marginLeft: 65, marginTop: 30 }} source={require('../../assets/icon03.png')} />
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> Alert.alert("Só um numero 8 sem a metade da parte de baixo!")}>
            <Image style={{ width: 24, height: 24, marginLeft: 65, marginTop: 30 }} source={require('../../assets/icon04.png')} />
       </TouchableOpacity>

      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
        <Text style={{ color: "#696969", fontSize: 12, marginLeft: 30, marginTop: 40 }}>INTERNET DISPONÍVEL</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <View style={{ display: "flex", flexDirection: "column", alignItems: "baseline", width: 200 }}>
          <Image style={{ width: "45%", height: "25%", marginLeft: 30, marginTop: 5 }} resizeMode='stretch' source={Porcentagem} />
          <Text style={{ color: "black", fontSize: 19, marginLeft: 30, marginTop: 15, fontWeight: "bold" }}>Você tem internet disponível</Text>
        </View>
        <View style={{ display: "flex" }}>
          <Image style={{ width: 100, height: 200, marginLeft: 65, marginTop: 10 }} resizeMode='stretch' source={Grafico} />
        </View>
      </View>
      <View style={{position: "absolute",bottom: 60, left:0, paddingLeft:30, paddingRight:50}}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline", borderBottomWidth: 1, borderBottomColor: "#C0C0C0" }}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 3, marginBottom: 20, fontWeight: "bold" }}>Disponível 7.3 GB</Text>
          <Text style={{ color: "#696969", fontSize: 16, fontWeight: "bold", marginRight:30 }}> de 9 GB</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 3, marginTop: 20, fontWeight: "bold" }}>Renova em 11 dias</Text>
          <Text style={{ color: "#696969", fontSize: 16, marginTop: 20, fontWeight: "bold", marginRight:30  }}>/ dia 21 de dez</Text>
        </View>
      </View>
    </>
  );
}



