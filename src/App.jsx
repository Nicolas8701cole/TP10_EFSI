import { useState } from "react";
import Cita from './Cita.jsx'
import ListaCitas from './ListaCitas.jsx'
import './App.css'

function App() {
  const [citas, setCitas] = useState([])
  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita])
  }
  const eliminarCita = (indexEliminar) => {
  const nuevasCitas = citas.filter((_, index) => index !== indexEliminar);
  setCitas(nuevasCitas);
};
  return (
    <>
      <main>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Cita agregarCita={agregarCita} />
            </div>

            <div className="one-half column">
              <h2>Administra tus citas</h2>
              <ListaCitas citas={citas} eliminarCita={eliminarCita} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App