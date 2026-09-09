import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import FormularioInscripcion from './FormularioInscripcion';
import TicketConfirmacion from './TicketConfirmacion';

const valoresIniciales = {
  email: '',
  password: '',
  nombreCompleto: '',
  edad: '',
  telefono: '',
  tipoEntrada: '',
  opinionCoca: ''
};

export default function InscripcionScreen() {
  const [datosConfirmados, setDatosConfirmados] = useState(null);
  const [cargando, setCargando] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm({
    defaultValues: valoresIniciales,
    mode: 'onChange'
  });

  useEffect(() => {
    cargarUltimoEmail();
  }, []);

  const cargarUltimoEmail = async () => {
    try {
      const emailGuardado = await AsyncStorage.getItem('ultimoEmail');

      if (emailGuardado) {
        reset({
          ...valoresIniciales,
          email: emailGuardado
        });
      }
    }
    catch (error) {
      console.log('No se pudo cargar el ultimo email');
    }
  };

  const confirmarInscripcion = async (datos) => {
    setCargando(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      await AsyncStorage.setItem('ultimoEmail', datos.email);
    }
    catch (error) {
      console.log('No se pudo guardar el email');
    }

    setDatosConfirmados(datos);
    setCargando(false);
  };

  const volverAInscribir = () => {
    setDatosConfirmados(null);
    reset(valoresIniciales);
  };

  return (
    <View style={styles.container}>
      {datosConfirmados ? (
        <TicketConfirmacion
          datos={datosConfirmados}
          onVolver={volverAInscribir}
        />
      ) : (
        <FormularioInscripcion
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={confirmarInscripcion}
          isValid={isValid}
          cargando={cargando}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe'
  }
});
