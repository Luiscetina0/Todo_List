import {Tareas} from './Tareas'
import Swal from 'sweetalert2'

export const ListarTareas = ({tareas, setTareas, verCompletadas}) => {

    const tareaCompletada = (id) => {
        setTareas(tareas.map((tarea) => {
            if(tarea.id ==id){
                return { ...tarea, completada: !tarea.completada}
            }
            return tarea
        }))
    }

    const editaTarea = (id, textoNuevo) => {
        setTareas(tareas.map((tarea) => {
            if(tarea.id ==id){
                return (
                    { ...tarea, texto: textoNuevo},
                    Swal.fire(
                        'Good job!',
                        'Tarea actualizado',
                        'success'
                      )
                )
            }
            return tarea
        }))
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => {
            if(tarea.id !== id){
                return tarea
            }
            return (
                Swal.fire(
                    'Good job!',
                    'Tarea eliminada',
                    'success'
                  )
            )
        }))
    }

  return (
   
    <ul className="lista-tareas">
        {
            tareas.length > 0 ? tareas.map((tarea) => {

                if (verCompletadas) {
                    return                <Tareas
                    key={tarea.id}
                    tarea={tarea}
                    tareaCompletada={tareaCompletada}
                    editaTarea={editaTarea}
                    eliminarTarea={eliminarTarea}
                    />

                } else if (!tarea.completada){

                    return                <Tareas
                    key={tarea.id}
                    tarea={tarea}
                    tareaCompletada={tareaCompletada}
                    editaTarea={editaTarea}
                    eliminarTarea={eliminarTarea}
                    />
                }
                return
               
            
            })
            : <div className="lista-tareas__mensaje"> No hay tareas</div>
        }


    </ul>
  )
}
