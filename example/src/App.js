import React from 'react'

import cedula from 'cedula-web'
import 'cedula-web/dist/index.css'

const App = () => {
  const Cedula = cedula.Component;
  return (
    <div>
    <h1>{cedula.title}</h1>
    <img src={cedula.logo} />
     <Cedula />
    </div>
  )
}

export default App
