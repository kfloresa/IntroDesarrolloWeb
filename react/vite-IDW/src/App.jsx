import { useState } from 'react'
import Galeria from './Galeria.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <Galeria />;
}

export default App
