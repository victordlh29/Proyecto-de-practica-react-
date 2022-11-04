import React from 'react'
export const Formulario = () => {

    const [modoedicion, SetModoedicion] = React.useState(false)
    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [lista, setLista] = React.useState([])


    const Agregarusuario = (e)=>{
        e.preventDefault()

        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }
    
        const usuario ={
            nombre,
            apellido
        }

        setLista([...lista, usuario])

        setNombre("")
        setApellido("")
    }
    const eliminar = tell => {
        const proceso = lista.filter((i) => i.apellido !== tell);
        setLista(proceso);
    }

    const PrimeraEdicion = (obj) =>{
        setNombre(obj.nombre)
        setApellido(obj.apellido)
        SetModoedicion(true)
    }

    const EdicionFinal = (e) =>{
       e.preventDefault()
        const editado = lista.map(i => i.nombre === nombre  ? { nombre , apellido } : i)
        console.log(editado);
        setLista(editado)
        SetModoedicion(false)
        setNombre("")
        setApellido("")
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form>
                <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder='Ingresar nombre' value={nombre}/>
                <input onChange={(e) => setApellido(e.target.value)} type="text" placeholder='Ingresar apellido' value={apellido}/>
              <div>
                    {
                        modoedicion ?(

                            <button className='btn btn-success' type='submit' onClick={(e)=>{EdicionFinal(e)}}>Editar</button> 
                        ):
                        (
                            <button className='btn btn-success' type='submit' onClick={(e)=>{Agregarusuario(e)}}>Enviar</button> 
                        )
                    }
              </div>

            </form>
            <div>
                <h3>Lista de usuairos</h3>
                <ol>
                    {
                        lista.map(i => (<li key={i}>{i.nombre} {i.apellido} <button className='btn btn-warning' onClick={()=>{PrimeraEdicion(i)}}>Editar</button> <button className='btn btn-danger' onClick={() => eliminar(i.apellido)}>Eliminar</button></li>))
                        
                    }
                </ol>
            </div>      
        </div>
    )

 }




