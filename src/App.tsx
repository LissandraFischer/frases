import { useState } from 'react'
import './App.css'

import logo from './assets/logo.png'

function App() {
  
  return (
    
      <div className='container'>
       <img
        alt="Logo frases"
        src={logo}
        className='logo'
       />

       <h2 className='titulo'>Categorias</h2>
       <section className='area-categoria'>
        <button className='botao-categoria'>Motivacional</button>
        <button className='botao-categoria'>Bom dia</button>
        <button className='botao-categoria'>Boa noite</button>
       </section>
       <button className='botao-frase'>Gerar Frases</button>

       <p className='texto-frase'>Alguma frase aqui</p>
      </div>
      
    
  )
}

export default App
