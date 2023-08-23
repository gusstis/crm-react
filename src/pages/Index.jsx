//import React from 'react'

// En React RouterDOM, para cargar el estado de clientes no usamos useEffect(). Loader siempre debe retornar algo
export function loader() {
  return 'Desde Loader';
}

function Index() {
  return (
    <div>
      <>
        <h1 className="font-black text-blue-900" >Clientes</h1>
        <p className="mt-3" >Administra tus Clientes</p>
      </>
    </div>
  )
}

export default Index