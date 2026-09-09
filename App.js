import React from 'react';
import { StatusBar } from 'expo-status-bar';
import InscripcionScreen from './InscripcionScreen';

export default function App() {
  return (
    <>
      <InscripcionScreen />
      <StatusBar style="auto" />
    </>
  );
}
