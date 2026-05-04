import { useState } from 'react'
import Galeria from './Galeria.jsx'
import './App.css'
import { Carreras } from '../components/Carreras.jsx'
import Alerta from '../components/Alerta.jsx'
import BotonOperacion from '../components/BotonOperacion.jsx'
import TodoList from '../components/TodoList/TodoList.jsx'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <Galeria />
      <Carreras />
      <Alerta texto="Error" tipo="error" />
      <Alerta texto="Advertencia" tipo="advertencia" />
      <Alerta texto="OK" tipo="OK" />
      <Alerta texto="Default" tipo="default" />
      <p>Contador: {contador}</p>
      <BotonOperacion cambiar={setContador} operacion="+" numero={10} />
      <BotonOperacion cambiar={setContador} operacion="-" numero={5} />
      <BotonOperacion cambiar={setContador} operacion="*" numero={-1} />
      <BotonOperacion cambiar={setContador} operacion="-" numero={2} />
      <BotonOperacion cambiar={setContador} operacion="+" numero={1} />

      <TodoList />
    </div>
    );
}

export default App
