import { useState } from 'react'
import './App.css'

import logo from './assets/logo.png'

function App() {

  const [ textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const todasFrases = [
    {id: 1,
    nome: "Motivacional",
    frases:['O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
    ]
    },
    {id: 2,
      nome: "Bom dia",
      frases:['Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!', 
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!', 
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.'
      ]

    },
    {id: 2,
      nome: "Bom dia",
      frases:['Boa noite durma bem',
      'Boa noite! Desejo que durma com tranquilidade e serenidade e que a paz te acompanhe.',
      'Tá na hora de desligar o modo ativo e entrar no modo descanso. Durma bem e até mais! Boa noite!' 
      ]

    },
  ]
  
  function categoriaEscolhida (index: number){
    console.log("Posição do item clicado",index)
  }

  return (
    
      <div className='container'>
       <img
        alt="Logo frases"
        src={logo}
        className='logo'
       />

       <h2 className='titulo'>Categorias</h2>
       <section className='area-categoria'>
        {todasFrases.map( (item, index) =>(
        <button key={item.id} className='botao-categoria' 
        style={{borderWidth: item.nome 
        === todasFrases[categoriaSelecionada].nome? 2: 0,
        borderColor: 'blue'}}
        onClick={() => categoriaEscolhida(index)}
        >
          {item.nome}
          </button>))}
        
       </section>
       <button className='botao-frase'>Gerar Frases</button>

       {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p> }
      </div>
      
    
  )
}

export default App
