import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Listado from './Components/Listado';
import Registro from './Components/Registro';
import Rordenes from './Components/Rordenes';
import Actualizacion from './Components/Actualizacion';
import bootstrap from './src/Components/bootstrap';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Registro' element={<Registro/>}></Route>
        <Route path='/Reordenes' element={<Rordenes/>}></Route>
        <Route path='/Actualizacion' element={<Actualizacion/>}></Route>
        <Route path='/Listado' element={<Listado/>}></Route>
      </Routes>
    </BrowserRouter>

  ); 
}
export default App
