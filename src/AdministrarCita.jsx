import './App.css'

function AdministrarCita({ Mascota, Dueño, Fecha, Hora, Sintomas, eliminarCita, index }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{Mascota}</span></p>
      <p>Dueño: <span>{Dueño}</span></p>
      <p>Fecha: <span>{Fecha}</span></p>
      <p>Hora: <span>{Hora}</span></p>
      <p>Sintomas: <span>{Sintomas}</span></p>
      <button className="button eliminar u-full-width" onClick={() => eliminarCita(index)}>
        Eliminar
      </button>
    </div>
  )
}

export default AdministrarCita