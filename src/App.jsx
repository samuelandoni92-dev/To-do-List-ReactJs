import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState('')

  function agregarTarea() {
    if (input.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: input, completada: false }])
    setInput('')
  }

  function completarTarea(id) {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ))
  }

  function borrarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <div className="contenedor">
      <h1>Mi lista de tareas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <p className="contador">{tareas.filter(t => !t.completada).length} tareas pendientes</p>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => completarTarea(tarea.id)}
          />
          <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            {tarea.texto}
          </span>
          <button onClick={() => borrarTarea(tarea.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App