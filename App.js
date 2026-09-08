import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Logeado from './Logeado';
import ERROR from './ERROR';


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState('false');



  const manejarEnvio = () => {
    if (email.trim() === '' || password.trim() === '') {
      setIsLogged('ERROR');
    }
    else if (email == 'simon@galaxies.dev' && password == '*******') {
      setIsLogged('true');
    }
    else {
      setIsLogged('ERROR');
    }
  };

  if (isLogged === 'true') {
    return <Logeado onCerrarSesion={() => setIsLogged('false')} />;
  }
  else if (isLogged === 'ERROR') {
    return <ERROR xd={() => setIsLogged('false')} />;
  }

  return (
    <View style={styles.container}//Un estylo declarado abajo
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require('./assets/Coquita.png')}
          style={styles.imagen}></Image>

        <TextInput
          placeholder="simon@galaxies.dev"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
          backgroundColor="#ffffff"
          style={styles.whigga}
        />
        <TextInput
          placeholder="*******"
          placeholderTextColor="#888"
          value={password}
          onChangeText={(text) => setPassword(text)}
          backgroundColor="#ffffff"
          style={styles.whigga}
        />
        <TouchableOpacity style={styles.boton} onPress={manejarEnvio}>
          <Text style={styles.textoBoton}>Enviar Datos</Text>
        </TouchableOpacity>
        <Text style={styles.textoCentrado}>Open up App.js to start working on y!</Text>
        <StatusBar style="auto" />

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whigga: {
    backgroundColor: '#ffffff',
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2300eb94',
  },
  textoCentrado: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 40,
  },
  imagen: {
    width: 800,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 60,
    backgroundColor: '#ffffff',
  },
  boton: {
    backgroundColor: '#2300eb94',
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    width: 200,
    borderWidth: 1,
    textColor: '#ffffff',
  },
  textoBoton: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },

});
