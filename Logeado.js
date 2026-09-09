import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InscripcionScreen from './InscripcionScreen';

export default function Logeado({ onCerrarSesion }) {
  return (
    <View style={styles.container}>
      <InscripcionScreen />

      <TouchableOpacity style={styles.botonVolver} onPress={onCerrarSesion}>
        <Text style={styles.textoBoton}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101016',
  },
  botonVolver: {
    position: 'absolute',
    top: 45,
    right: 15,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  textoBoton: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
