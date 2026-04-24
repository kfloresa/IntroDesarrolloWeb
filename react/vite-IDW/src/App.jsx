import { useState } from 'react'
import Galeria from './Galeria.jsx'
import './App.css'
import { Carreras } from '../components/Carreras.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Galeria />
      <Carreras />
    </div>
    );
}

export default App
