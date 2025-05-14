import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(0)
  const [mostrarParagrafo, setMostrarParagrafo] = useState(false)

  function alternarParagrafo() {
    setMostrarParagrafo((estadoAtual) => !estadoAtual)
  }

  return ( 
    <div>
      <h1>useState</h1>
      <p>Número: {numero}</p>

      <div>
        <button onClick={() => setNumero((estadoAtual) => estadoAtual + 100)}>Aumentar</button>
      </div>

      <div>
        <button onClick={alternarParagrafo}>
          {mostrarParagrafo ? 'Esconder' : 'Mostrar'}
        </button>
      </div>

      {mostrarParagrafo ? <p>Oie Marciozinho!</p> : null}
    </div>
  )
}
