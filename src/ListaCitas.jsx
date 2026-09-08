import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AdministrarCita from './AdministrarCita.jsx'
import './App.css'

function ListaCitas({ citas, eliminarCita }) {// "{}"porque recibe varios
    return (
        <div>
            {citas.map((cita, index) => (
                <div key={index} className="lista-citas">
                    <AdministrarCita Mascota={cita.mascota} Dueño={cita.dueño} Fecha={cita.fecha} Hora={cita.hora} Sintomas={cita.sintomas} eliminarCita={eliminarCita} index={index}/>
                </div>
            ))}
        </div>
        
    )
}

export default ListaCitas
