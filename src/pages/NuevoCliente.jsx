import {useNavigate, Form} from 'react-router-dom';
import Formulario from '../components/Formulario';

//Con esto react-router-dom se encarga del envío de formularios
export function action ( ) {
  console.log('Submit al formu');
}

function NuevoCliente() {

  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena los siguientes campos para registrar un cliente</p>
        <div className=' flex justify-end '>
            <button
                className=' bg-blue-800 text-white px-3 py-1 font-bold uppercase '
                onClick={() => navigate(-1)}
            >
                Volver
            </button>
        </div>
        <div className=' bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20 '>
          <Form
            method='post'
          >
          <Formulario/>
          <input
            type="submit" 
            value="Registrar cliente"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
          />
          </Form>
        </div>
    </>
  )
}

export default NuevoCliente