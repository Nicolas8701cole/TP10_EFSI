import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function TicketConfirmacion({ datos, onVolver }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/Coquita.png')}
        style={styles.imagen}
        resizeMode="contain"
      />

      <View style={styles.ticket}>
        <Text style={styles.titulo}>Inscripción confirmada</Text>

        <Text>Nombre: {datos.nombreCompleto}</Text>
        <Text>Email: {datos.email}</Text>
        <Text>Edad: {datos.edad}</Text>
        <Text>
          Entrada: {datos.tipoEntrada === 'vip' ? 'VIP' : 'General'}
        </Text>

        {datos.telefono !== '' && (
          <Text>Teléfono: {datos.telefono}</Text>
        )}

        <Text style={styles.opinion}>
          Opinión de Coca-Cola:{' '}
          {datos.opinionCoca === 'coca'
            ? 'Es lo mejor del mundo'
            : 'Es mejor Pepsi'}
        </Text>

        {datos.opinionCoca === 'pepsi' && (
          <Text style={styles.pepsi}>
            Quedaste inscripto, pero Coca-Cola no está contenta con tu respuesta.
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={onVolver}
      >
        <Text style={styles.textoBoton}>
          Volver a inscribir a otra persona
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  imagen: {
    width: '100%',
    maxWidth: 800,
    height: 200,
    backgroundColor: '#ffffff',
    marginBottom: 30
  },
  ticket: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2300eb94'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2300eb',
    marginBottom: 20,
    textAlign: 'center'
  },
  opinion: {
    marginTop: 10
  },
  pepsi: {
    color: '#b00000',
    marginTop: 10,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: '#2300eb94',
    marginVertical: 15,
    padding: 10,
    borderRadius: 15,
    width: 260,
    borderWidth: 1
  },
  textoBoton: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff'
  }
});
