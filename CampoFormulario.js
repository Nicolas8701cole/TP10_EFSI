import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

export default function CampoFormulario({
  control,
  name,
  label,
  placeholder,
  rules,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'sentences'
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#888"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              style={[
                styles.input,
                error && styles.inputError
              ]}
            />

            {error && (
              <Text style={styles.error}>{error.message}</Text>
            )}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 5
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000000'
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2300eb94'
  },
  inputError: {
    borderColor: '#d00000'
  },
  error: {
    color: '#b00000',
    fontSize: 12,
    marginTop: 3
  }
});
