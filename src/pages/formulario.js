import React, { useState } from 'react'
import { useRouter } from 'next/router'

import firebaseApp from '../../firebase'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import Layout from '../components/Layout'

const db = getFirestore(firebaseApp)

export default function Formulario() {

  const router = useRouter()

  const valorInicial = {
    almacenamiento: "",
    marca: "",
    modelo: "",
    marcaProcesador: "",
    modeloProcesador: "",
    pantalla: "",
    precio: "",
    ram: "",
    otros: "",
    placavideo: "",
    sku: ""
  }

  const [dato, setDato] = useState(valorInicial)

  //capturar los inputs
  const obtenerInputs = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value })
  }


  //esta funcion es para guardar la info en firebase
  const enviarInfo = async (e) => {
    e.preventDefault();
    //console.log(dato);
    try {
      await addDoc(collection(db, 'notebook'), {
        ...dato
      })
    } catch (error) {
      console.log(error);
    }
    //setDato({...valorInicial})

    //que esta funcion lo que hace es una redireccion
    router.push('/')
  }

  return (
    <Layout>
      <div>
        <div className='container'>
          <h2 className='text-center'>Formulario de creacion de productos</h2>
          <div className='card card-body'>
            <form onSubmit={enviarInfo}>
              <div className='form-group'>
                <input type="text" placeholder='SKU' className='form-control mb-3'
                  name='sku' value={dato.sku} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Marca' className='form-control mb-3'
                  name='marca' value={dato.marca} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Modelo' className='form-control mb-3'
                  name='modelo' value={dato.modelo} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Marca procesador' className='form-control mb-3'
                  name='marcaProcesador' value={dato.marcaProcesador} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Modelo procesador' className='form-control mb-3'
                  name='modeloProcesador' value={dato.modeloProcesador} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Almacenamiento' className='form-control mb-3'
                  name='almacenamiento' value={dato.almacenamiento} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Ram' className='form-control mb-3'
                  name='ram' value={dato.ram} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Pantalla' className='form-control mb-3'
                  name='pantalla' value={dato.pantalla} onChange={obtenerInputs} required />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Placa de video' className='form-control mb-3'
                  name='placaVideo' value={dato.placavideo} onChange={obtenerInputs} />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Otros' className='form-control mb-3'
                  name='otros' value={dato.otros} onChange={obtenerInputs} />
              </div>

              <div className='form-group'>
                <input type="text" placeholder='Precio USD Final' className='form-control mb-3'
                  name='precio' value={dato.precio} onChange={obtenerInputs} required />
              </div>

              <button className='btn btn-primary'>
                Enviar
              </button>
              <button className='btn btn-secondary ms-2' onClick={() => router.push('/')} >volver</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}