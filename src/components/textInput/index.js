import React, {useState} from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Image } from "react-native";
import Eye from "../../assets/eye.png"

const UselessTextInput = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="E-Mail"
        placeholderTextColor="#A9A9A9"
        value={text}
      />
      <View style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}> 
        <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#A9A9A9"
        value={password}
      />
        <Image style={{ width: 25, height: 25, position:"absolute",right:20, top:25, opacity:0.8}} resizeMode='stretch' source={Eye} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 300,
    margin: 9,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#C0C0C0",
    fontSize: 20,
    color:"black",
  }


});
export default UselessTextInput;