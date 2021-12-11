import React, { useState } from "react";
import {Alert, View, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles"

const UselessTextInput = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        placeholder="E-Mail"
        placeholderTextColor="#A9A9A9"
        value={email}
      />

      <View style={{ display: "flex", flexDirection: "row-reverse", alignItems: "baseline" }}>
        <TextInput
          style={styles.input}
          onChange={(e) => setPassword(e.nativeEvent.text)}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#A9A9A9"
          value={password}
        />
        <TouchableOpacity style={styles.passView} onPress={() => Alert.alert("Em breve!")}>
          <Image style={styles.iEye} source={require('../../assets/eye.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default UselessTextInput;