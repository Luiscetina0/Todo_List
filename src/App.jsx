import './App.css'
import {useEffect, useState} from 'react'
import { Header, Formulario, ListarTareas } from './Components/'
import { getTareasGuardadas, getTareasCompletadas } from './helper/'



function App() {

  

  const [tareas, setTareas] = useState(getTareasGuardadas())

  
  const [verCompletadas, setVerCompletadas] = useState(getTareasCompletadas())



  useEffect (() => {
    localStorage.setItem('verCompletadas',verCompletadas.toString())
      },[verCompletadas])

  useEffect (() => {
localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas])

  return (
    <>
     <div className='contenedor'>
      <Header  verCompletadas={verCompletadas} setVerCompletadas={setVerCompletadas}/>
      <Formulario tareas={tareas} setTareas={setTareas} />
      <ListarTareas tareas={tareas} setTareas={setTareas} verCompletadas={verCompletadas}/>
     </div>
    </>
  )
}

export default App
