import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Logeado({ onCerrarSesion }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.bienvenida}>¡LOGRADO!</Text>
        
        <TouchableOpacity style={styles.botonVolver} onPress={onCerrarSesion}>
          <Text style={styles.textoBoton}>Volver atrás</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bebebe',
  },
  safeArea: {
    alignItems: 'center',
  },
  bienvenida: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2300eb',
    marginBottom: 30,
  },
  botonVolver: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 15,
    width: 150,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  }
});
