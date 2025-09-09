import { useState } from 'react'
import './App.css'

const characters = [
  {
    nome: 'Samuel',
    image: 'samuel.jpg',
    estado: 'Rio Grande do Sul, Brasil',
    idade: 18,
    vivo: 'Não',
    minoria: 'Otaku',
  },
  {
    nome: 'Alvaro',
    image: 'alvaro.jpg',
    estado: 'Rio Grande do Sul, Brasil',
    idade: 18,
    vivo: 'Sim',
    minoria: 'Otaku',
  },
  {
    nome: 'Silvio Santos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silvio_Santos_em_maio_de_2019.jpg/960px-Silvio_Santos_em_maio_de_2019.jpg',
    estado: 'Rio de Janeiro, Brasil',
    idade: 93,
    vivo: 'Não',
    minoria: 'carioca',
  },
  {
    nome: 'Michael Jackson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silvio_Santos_em_maio_de_2019.jpg/960px-Silvio_Santos_em_maio_de_2019.jpg',
    estado: 'Indiana, EUA',
    idade: 50,
    vivo: 'Sim',
    minoria: 'preto que virou branco',
  },
  
];

function App() {
  

  return (
    <>
    <body>
      
    
     <header>
    <img src="logo.png" alt="" />
    <ul>
      <li>Home</li>
      <li>Criar O Meu</li>
      <li>Explorar</li>
    </ul>
    <div className='botao'>
    <button className='botao1'>Jogar Quiz</button>
      <button className='botao1'>Entrar</button>
      </div>
     </header>
     <main>
      <div className='espacamento'>
      <div className='card1'>
        <h2>Você sabe quem é essa pessoa?</h2>
        <img src="" alt="" />
        <p>Pergunta aqui blablablablabla</p>
      </div>
      </div>
     </main>
     </body>
    </>
  )
}

export default App
