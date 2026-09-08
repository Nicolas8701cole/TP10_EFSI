import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Cita({agregarCita}) {
    const [formData, setFormData] = useState({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            //El "...formData" es para evitar la perdida de ex datos
            [e.target.name]: e.target.value
            //Forma simplificada de poner la misma tabla 
            //pero en el name recibido poner el nuevo dato
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //No recibe datos vacíos
        agregarCita(formData);
        //Lo manda a App.jsx
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="NombreMascota">Nombre Mascota</label>
                <input type="text" name="mascota" id="NombreMascota" className="u-full-width" onChange={handleChange} defaultValue="" />

                <label htmlFor="NombreDueño">Nombre Dueño</label>
                <input type="text" name="dueño" id="NombreDueño" className="u-full-width" onChange={handleChange} defaultValue="" />

                <label htmlFor="Fecha">Fecha</label>
                <input type="date" name="fecha" id="fecha" className="u-full-width" onChange={handleChange} defaultValue="" />

                <label htmlFor="hora">Hora</label>
                <input type="time" name="hora" id="hora" className="u-full-width" onChange={handleChange} defaultValue="" />

                <label htmlFor="sintomas">Sintomas</label>
                <textarea name="sintomas" id="sintomas" className="u-full-width" onChange={handleChange} defaultValue=""></textarea>

                <button type="submit" className="u-full-width button button-primary">
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

export default Cita
