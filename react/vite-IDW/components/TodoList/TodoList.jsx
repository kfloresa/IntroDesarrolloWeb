import { useState } from "react"
import SingleTask from "./SingleTask"

export default function TodoList() {
    const [tareasCompletadas, setTareasCompletadas] = useState([false, false, false, false, false, false, false])
    const tareas = [
        { id: 0, texto: "Clean my room", colorFondo: "#ffeb3b", estaCompletada: tareasCompletadas[0] },
        { id: 1, texto: "Decluttering my study room", colorFondo: "#ffc73b", estaCompletada: tareasCompletadas[1] },
        { id: 2, texto: "Buy some new stationery", colorFondo: "#fff06c", estaCompletada: tareasCompletadas[2] },
        { id: 3, texto: "Spa pedicure and manicure", colorFondo: "#ce9222", estaCompletada: tareasCompletadas[3] },
        { id: 4, texto: "Playing basketball with friends", colorFondo: "#ffff3b", estaCompletada: tareasCompletadas[4] },
        { id: 5, texto: "Reduce fast food", colorFondo: "#fac43c", estaCompletada: tareasCompletadas[5] },
        { id: 6, texto: "Buy skincare", colorFondo: "#ffea2f", estaCompletada: tareasCompletadas[6] }
    ]

    const cambiarTareaCompletada = (id) => {
        const nuevasTareasCompletadas = [...tareasCompletadas];
        nuevasTareasCompletadas[id] = !nuevasTareasCompletadas[id];
        setTareasCompletadas(nuevasTareasCompletadas);
    };

    return(<div style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '20px' }}>
        <h1 style={{ color: '#000000' }}>To Do List</h1>
        {tareas.map((tarea) => (
            <SingleTask
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                colorFondo={tarea.colorFondo}
                estaCompletada={tarea.estaCompletada}
                setEstaCompletada={cambiarTareaCompletada}
            />
        ))}
    </div>)
}