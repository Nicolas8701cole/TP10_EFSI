import React from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Controller } from 'react-hook-form';
import CampoFormulario from './CampoFormulario';

export default function FormularioInscripcion({
  control,
  handleSubmit,
  onSubmit,
  isValid,
  cargando
}) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('./assets/Coquita.png')}
          style={styles.imagen}
          resizeMode="contain"
        />

        <View style={styles.formulario}>
          <CampoFormulario
            control={control}
            name="email"
            label="Email"
            placeholder="simon@galaxies.dev"
            keyboardType="email-address"
            autoCapitalize="none"
            rules={{
              required: 'Ingresá un email válido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Ingresá un email válido'
              }
            }}
          />

          <CampoFormulario
            control={control}
            name="password"
            label="Contraseña"
            placeholder="*******"
            secureTextEntry={true}
            autoCapitalize="none"
            rules={{
              required: 'Ingresá una contraseña'
            }}
          />

          <CampoFormulario
            control={control}
            name="nombreCompleto"
            label="Nombre completo"
            placeholder="Nombre completo"
            rules={{
              required: 'Ingresá tu nombre completo',
              validate: (valor) =>
                valor.trim().length >= 3 || 'Ingresá tu nombre completo'
            }}
          />

          <CampoFormulario
            control={control}
            name="edad"
            label="Edad"
            placeholder="Edad"
            keyboardType="numeric"
            rules={{
              required: 'La edad tiene que ser mayor a 12',
              validate: (valor) => {
                const edad = Number(valor);

                if (!Number.isInteger(edad) || edad <= 12 || edad > 99) {
                  return 'La edad tiene que ser mayor a 12';
                }

                return true;
              }
            }}
          />

          <CampoFormulario
            control={control}
            name="telefono"
            label="Teléfono (opcional)"
            placeholder="Teléfono"
            keyboardType="phone-pad"
            rules={{
              pattern: {
                value: /^\d*$/,
                message: 'Solo se permiten números'
              }
            }}
          />

          <Text style={styles.label}>Tipo de entrada</Text>

          <Controller
            control={control}
            name="tipoEntrada"
            rules={{
              required: 'Elegí un tipo de entrada'
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <View style={styles.fila}>
                  <TouchableOpacity
                    style={[
                      styles.opcion,
                      value === 'general' && styles.opcionElegida
                    ]}
                    onPress={() => onChange('general')}
                  >
                    <Text style={[
                      styles.textoOpcion,
                      value === 'general' && styles.textoElegido
                    ]}>
                      General
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.opcion,
                      value === 'vip' && styles.opcionElegida
                    ]}
                    onPress={() => onChange('vip')}
                  >
                    <Text style={[
                      styles.textoOpcion,
                      value === 'vip' && styles.textoElegido
                    ]}>
                      VIP
                    </Text>
                  </TouchableOpacity>
                </View>

                {error && (
                  <Text style={styles.error}>{error.message}</Text>
                )}
              </>
            )}
          />

          <Text style={styles.pregunta}>
            ¿Cuál es tu opinión de Coca-Cola?
          </Text>

          <Controller
            control={control}
            name="opinionCoca"
            rules={{
              required: 'Elegí una opción'
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TouchableOpacity
                  style={[
                    styles.opinion,
                    value === 'coca' && styles.opcionElegida
                  ]}
                  onPress={() => onChange('coca')}
                >
                  <Text style={[
                    styles.textoOpcion,
                    value === 'coca' && styles.textoElegido
                  ]}>
                    Es lo mejor del mundo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.opinion,
                    value === 'pepsi' && styles.pepsiElegida
                  ]}
                  onPress={() => onChange('pepsi')}
                >
                  <Text style={[
                    styles.textoOpcion,
                    value === 'pepsi' && styles.textoElegido
                  ]}>
                    Es mejor Pepsi
                  </Text>
                </TouchableOpacity>

                {value === 'pepsi' && (
                  <Text style={styles.mensajePepsi}>
                    Respuesta incorrecta. Coca-Cola recordará esto.
                  </Text>
                )}

                {error && (
                  <Text style={styles.error}>{error.message}</Text>
                )}
              </>
            )}
          />

          <TouchableOpacity
            style={[
              styles.boton,
              (!isValid || cargando) && styles.botonDeshabilitado
            ]}
            disabled={!isValid || cargando}
            onPress={handleSubmit(onSubmit)}
          >
            {cargando ? (
              <View style={styles.loading}>
                <ActivityIndicator color="#ffffff" />
                <Text style={styles.textoBoton}>Enviando...</Text>
              </View>
            ) : (
              <Text style={styles.textoBoton}>
                Confirmar inscripción
              </Text>
            )}
          </TouchableOpacity>

          <Text style={styles.textoCentrado}>
            TP anterior + inscripción Sonido Sur
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe'
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  imagen: {
    width: '100%',
    maxWidth: 800,
    height: 200,
    alignSelf: 'center',
    marginVertical: 35,
    backgroundColor: '#ffffff'
  },
  formulario: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center'
  },
  label: {
    fontSize: 14,
    marginTop: 7,
    marginBottom: 5
  },
  fila: {
    flexDirection: 'row'
  },
  opcion: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2300eb94',
    alignItems: 'center',
    marginRight: 5
  },
  opcionElegida: {
    backgroundColor: '#2300eb94'
  },
  textoOpcion: {
    color: '#000000',
    textAlign: 'center'
  },
  textoElegido: {
    color: '#ffffff'
  },
  pregunta: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5
  },
  opinion: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2300eb94',
    alignItems: 'center',
    marginVertical: 3
  },
  pepsiElegida: {
    backgroundColor: '#1d4f91',
    borderColor: '#1d4f91'
  },
  mensajePepsi: {
    color: '#b00000',
    textAlign: 'center',
    marginVertical: 5
  },
  error: {
    color: '#b00000',
    fontSize: 12,
    marginTop: 3
  },
  boton: {
    backgroundColor: '#2300eb94',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    width: 200,
    borderWidth: 1
  },
  botonDeshabilitado: {
    opacity: 0.45
  },
  textoBoton: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff'
  },
  textoCentrado: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 30
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
