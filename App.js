// In App.js in a new project

import * as React from 'react';
import { Button, View, ScrollView, Text, Image, StyleShee} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function TelaAlfabetoScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>TelaAlfabeto Screen</Text>


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraA.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra A"
        onPress={() => navigation.navigate('DetalheLetraA')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraB.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra B"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraD.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra D"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraE.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra E"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraF.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra F"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraG.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra G"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraH.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra H"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraI.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra I"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraJ.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra J"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraL.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra L"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraM.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra M"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />



      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraN.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra N"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraO.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra O"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraP.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra P"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraQ.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra Q"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraS.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra S"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraT.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra T"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraV.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra V"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraX.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra X"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraZ.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra Z"
        onPress={() => navigation.navigate('DetalheLetraK')}
      />


    </View>
    </ScrollView>
  );
}


function TelaVogaisScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>TelaVogais Screen</Text>


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraA.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra A"
        onPress={() => navigation.navigate('DetalheLetraA')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraE.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra E"
        onPress={() => navigation.navigate('DetalheLetraE')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraI.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra I"
        onPress={() => navigation.navigate('DetalheLetraI')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraO.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra O"
        onPress={() => navigation.navigate('DetalheLetraO')}
      />


      <Image style={{backgroundColor: '#fff'}}
                    source={require('./image/letraU.png')}
                    style={{width: 400, height: 400}}
      />
      <Button
        title="Letra U"
        onPress={() => navigation.navigate('DetalheLetraU')}
      />


    </View>
    </ScrollView>
  );
}


// ... other code from the previous section


function DetalheLetraAScreen({ navigation }) {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <View >
          <Button title="Voltar para TelaVogais" onPress={() => navigation.navigate('TelaVogais')} />

          <Image style={{backgroundColor: '#fff'}}
                        source={require('./image/letraA/a0.png')}
                        style={{width: 150, height: 150}}
          />
    </View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>


      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a1.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a2.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a3.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a4.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a5.png')}
                    style={{width: 300, height: 300}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a6.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraA/a7.png')}
                    style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
    </View>
  );
}

function DetalheLetraEScreen({ navigation }) {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <View >
          <Button title="Voltar para TelaVogais" onPress={() => navigation.navigate('TelaVogais')} />

          <Image style={{backgroundColor: '#fff'}}
                        source={require('./image/letraE/e0.png')}
                        style={{width: 150, height: 150}}
          />
    </View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>



      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e1.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e2.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e3.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e4.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e5.png')}
                    style={{width: 300, height: 300}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e6.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraE/e7.png')}
                    style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
    </View>
  );
}

function DetalheLetraIScreen({ navigation }) {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <View >
          <Button title="Voltar para TelaVogais" onPress={() => navigation.navigate('TelaVogais')} />

          <Image style={{backgroundColor: '#fff'}}
                        source={require('./image/letraI/i0.png')}
                        style={{width: 150, height: 150}}
          />
    </View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>



      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i1.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i2.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i3.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i5.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i4.png')}
                    style={{width: 300, height: 300}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i6.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraI/i7.png')}
                    style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
    </View>
  );
}

function DetalheLetraOScreen({ navigation }) {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <View >
          <Button title="Voltar para TelaVogais" onPress={() => navigation.navigate('TelaVogais')} />

          <Image style={{backgroundColor: '#fff'}}
                        source={require('./image/letraO/o0.png')}
                        style={{width: 150, height: 150}}
          />
    </View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>



      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o1.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o2.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o3.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o4.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o5.png')}
                    style={{width: 300, height: 300}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o6.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraO/o7.png')}
                    style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
    </View>
  );
}

function DetalheLetraUScreen({ navigation }) {

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
    <View >
          <Button title="Voltar para TelaVogais" onPress={() => navigation.navigate('TelaVogais')} />

          <Image style={{backgroundColor: '#fff'}}
                        source={require('./image/letraU/u0.png')}
                        style={{width: 150, height: 150}}
          />
    </View>
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>



      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u1.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u2.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u3.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u4.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u5.png')}
                    style={{width: 300, height: 300}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u6.png')}
                    style={{width: 400, height: 400}}
      />

      <Image style={{backgroundColor: '#FFF'}}
                    source={require('./image/letraU/u7.png')}
                    style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaVogais">

              <Stack.Screen name="TelaVogais"  component={TelaVogaisScreen}   />
              <Stack.Screen name="TelaAlfabeto"  component={TelaAlfabetoScreen}   />

              <Stack.Screen name="DetalheLetraA" component={DetalheLetraAScreen}  />
              <Stack.Screen name="DetalheLetraE" component={DetalheLetraEScreen}  />
              <Stack.Screen name="DetalheLetraI" component={DetalheLetraIScreen}  />
              <Stack.Screen name="DetalheLetraO" component={DetalheLetraOScreen}  />
              <Stack.Screen name="DetalheLetraU" component={DetalheLetraUScreen}  />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;