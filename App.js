import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './paginas/Home'
import Imc from './paginas/Imc'
import Referencia from './paginas/Referencia';
import Historico from './paginas/Historico'

const Stack= createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HOME' component={Home}/>
        <Stack.Screen name='IMC' component={Imc}/>
        <Stack.Screen name='REFERENCIA' component={Referencia}/>
        <Stack.Screen name='HISTORICO' component={Historico}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}