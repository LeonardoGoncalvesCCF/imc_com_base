import React, { useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ImcServices from "../../services/imcServices";
import { ImcValores } from "../../models/imcValores";
import { State } from "react-native-gesture-handler";


export default function Imc(){
  constructor(props) {
    super(props);

    this.findAllImcServices()        
}

state = {
  data: [],
  value: null,
  onChangeText: null,
  dataId: null,
  dataInsert:null
}

//acionado quando o componente e montado
componentDidMount () {
  this.findAllImcServices ();
}

//escuta atualizações na lista
componentDidUpdate (prevProps, prevState) {
  if (prevState.data !== this.state.data) {
    this.findAllImcServices ();
  }
}

deleteImc=(id)=> {
  this.findImcServicesyId(id)
  if (this.state.dataId != null || this.state.dataId != undefined) {
      AnimalService.deleteById(id)
      alert("animal excluido com sucesso: ")
  }
}

insertImc=(item)=> {
  let file:IMC=new ImcValores()
  file.nome=item

  const insertId=ImcServices.addData(file);
  if(insertId==null || insertId==undefined){
      alert("Não foi possivel inserir o novo valor de IMC")
  }
}



  const [altura, setAltura] = useState(" ");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [teste, setTeste] = useState("");
  const [dadoimc, setDadoimc] = useState("Como será que está seu IMC?");

  


  function pegaAltura(valorAltura) {
    setAltura(valorAltura);
  }

  function pegaPeso(valorPeso) {
    setPeso(valorPeso);
  }

  function calcImc() {
    let imccalc = peso / (altura ^ 2);
    let texto = "";

    setImc(imccalc);

    if (imccalc < 16) {
      texto = "Muito Abaixo do Peso";
      setDadoimc(texto);
    } else if (imccalc < 17) {
      texto = "Moderadamente abaixo do peso";
      setDadoimc(texto);
    } else if (imccalc < 18.5) {
      texto = "Abaixo do peso";
      setDadoimc(texto);
    } else if (imccalc < 25) {
      texto = "Saudavel";
      setDadoimc(texto);
    } else if (imccalc < 30) {
      texto = "Sobrepeso";
      setDadoimc(texto);
    } else if (imccalc < 35) {
      texto = "Obesidade Grau 1°";
      setDadoimc(texto);
    } else if (imccalc < 40) {
      texto = "Obesidade Grau 2°";
      setDadoimc(texto);
    } else {
      let texto = "Obesidade Grau 3°";
      setDadoimc(texto);
    }

    setTeste(imccalc)
    AsyncStorage.setItem('teste', imccalc.toString());

    return imccalc;
  }
  // VV LIMPANDO VV \\
  function limpar() {
    setImc(" ");
    setAltura(" ");
    setPeso(" ");
    setDadoimc("Como será que está seu IMC?");
  }

  function aoHistorico() {
    navigation.navigate("HISTORICO");
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        onChangeText={(text) => pegaAltura(text)}
      />

      <TextInput
        style={styles.txtInput}
        placeholder="Digite seu peso "
        keyboardType="numeric"
        onChangeText={(text) => pegaPeso(text)}
      />
      <View style={styles.textInerInput}>
        <Text> Altura: {altura} m </Text>
        <Text> Peso: {peso} kg </Text>
        <Text> IMC: {teste} </Text>
        <Text> {dadoimc} </Text>
        <Text> </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={calcImc}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Calcular IMC</Text>
        </View>
      </TouchableOpacity>

      <Text> </Text>

      <TouchableOpacity style={styles.botao} onPress={limpar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </View>
      </TouchableOpacity>

      <Text></Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>VOLTAR</Text>
        </View>
      </TouchableOpacity>

      <Text></Text>

      <TouchableOpacity style={styles.botao} onPress={aoHistorico}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Historico</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
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
    width: "50%",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  textInerInput: {
    marginBottom: 10,
  },
});
