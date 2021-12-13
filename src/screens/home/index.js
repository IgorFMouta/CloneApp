import React from "react";
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native'
import Porcentagem from "../../assets/porcentagem.png"
import Grafico from "../../assets/grafico.png"
import { useNavigation } from '@react-navigation/native'
import styles from "./styles"


export const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.geral}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image style={styles.toHome} source={require('../../assets/icon01.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Você não tem dinheiro pra isso!")}>
          <Image style={styles.otherButtons} source={require('../../assets/icon02.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Me manda um PIX de presente?")}>
          <Image style={styles.otherButtons} source={require('../../assets/icon03.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Só um numero 8 sem a metade da parte de baixo!")}>
          <Image style={styles.otherButtons} source={require('../../assets/icon04.png')} />
        </TouchableOpacity>

      </View>
      <View style={styles.geral}>
        <Text style={styles.text01}>INTERNET DISPONÍVEL</Text>
      </View>
      <View style={styles.vPorcent}>
        <View style={styles.vPorcent02}>
          <Image style={styles.porcent03} resizeMode='stretch' source={Porcentagem} />
          <Text style={styles.text02}>Você tem internet disponível</Text>
        </View>
        <View>
          <Image style={styles.grafico} resizeMode='stretch' source={Grafico} />
        </View>
      </View>
      <View style={styles.vText}>
        <View style={styles.vText02}>
          <Text style={styles.text03}>Disponível 7.3 GB</Text>
          <Text style={styles.text07}> de 9 GB</Text>
        </View>
        <View style={styles.vText03}>
          <Text style={styles.text04}>Renova em 11 dias</Text>
          <Text style={styles.text05}>/ dia 21 de dez</Text>
        </View>
      </View>
    </>
  );
};



