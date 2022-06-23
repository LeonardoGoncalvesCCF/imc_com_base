import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import Imc from '../Imc';

export default function Historico() {
  const [teste, setTeste] = useState("");
  const navigation = useNavigation();

  useEffect(async ()=>{
    setTeste(await AsyncStorage.getItem('teste'))
  },[])

  return (
    <View style={styles.container}>
      <Text>{teste}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //Definindo Botão\\
  botao: {
    width: 230,
    height: 50,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 25,
  },
  //V Defindo AREA DE DENTRO do botão V\\
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //V Definindo TEXTO DETRO do botão V\\
  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
  txtInput: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
});
