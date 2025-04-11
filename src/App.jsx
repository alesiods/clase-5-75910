import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Computadoras from './assets/components/Computadoras/Computadoras'
import Sillas from './assets/components/Sillas/Sillas'
import Celulares from './assets/components/Celulares/Celulares'
import Menu from './assets/components/Menu/Menu'
import Error from './assets/components/Error/Error'

const App = () => {

  return (
    <div>

      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/computadoras' element={<Computadoras/>}/>
        <Route path='/sillas/:id' element={<Sillas/>}/>
        <Route path='/celulares' element={<Celulares/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      </BrowserRouter>

      {/* <h1>Etiquetas de Enlaces</h1>
      <h2>Enlaces Absolutos y relativos</h2>
      <a href="https://www.infobae.com" target='_blank'> Infobae</a>
      <a href="">Contacto</a> */}
    </div>
  )
}

export default App