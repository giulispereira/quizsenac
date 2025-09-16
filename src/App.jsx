import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const characters = [
  {
    name: 'Samuel',
    image: 'samuel.jpg',
    state: 'Rio Grande do Sul, Brasil',
    age: 18,
    alive: 'Não',
    minority: 'Otaku',
  },
  {
    name: 'Alvaro',
    image: 'alvaro.jpg',
    state: 'Rio Grande do Sul, Brasil',
    age: 18,
    alive: 'Sim',
    minority: 'Otaku',
  },
  {
    name: 'capitao america',
    image: 'https://i.redd.it/wu41t4euctc71.jpg',
    state: 'Brooklyn, EUA',
    age: 117,
    alive: 'Sim',
    minority: 'vingador',
  },
  {
    name: 'Silvio Santos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5vC8VrrZrIQz-ZrVg2Wuw3G5phx_Nwr-_Q&s',
    state: 'Rio de Janeiro, Brasil',
    age: 93,
    alive: 'Não',
    minority: 'Carioca',
  },
  {
    name: 'Michael Jackson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-C8t5Del0TOaCA2O54Oc0P1HoehgQQ10qmg&s',
    state: 'Indiana, EUA',
    age: 50,
    alive: 'Não',
    minority: 'Morreu',
  },
];

function App() {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [score, setScore] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  
  const startGame = () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setCurrentCharacter(randomCharacter);
    setScore(null);
    reset();
  };

  const onSubmit = (data) => {
    let correctAnswers = 0;
    const ageInput = parseInt(data.age);

    if (data.name.toLowerCase() === currentCharacter.name.toLowerCase()) correctAnswers++;
    if (data.state === currentCharacter.state) correctAnswers++;
    if (ageInput === currentCharacter.age) correctAnswers++;
    if (data.alive === currentCharacter.alive) correctAnswers++;
    if (data.minority.toLowerCase() === currentCharacter.minority.toLowerCase()) correctAnswers++;

    const percentage = (correctAnswers / 5) * 100;
    setScore(percentage);
  };

  const getResultImage = () => {
    if (score === 100) {
      return 'https://img.cdndsgni.com/preview/12658806.jpg';
    }
    if (score >= 80) {
      return 'https://img.cdndsgni.com/preview/12658818.jpg';
    }
    return 'https://img.cdndsgni.com/preview/12658725.jpg';
  };

  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="Logo do Quiz" />
        <ul>
          <li>Home</li>
          <li>Criar O Meu</li>
          <li>Explorar</li>
        </ul>
        <div className='botao'>
          <button className='botao1' onClick={startGame}>Jogar Quiz</button>
          <button className='botao1'>Entrar</button>
        </div>
      </header>

      <main>
        {!currentCharacter ? (
          <div className="card-start">
            <h1>Bem-vindo ao Quiz!</h1>
            <p>Clique em <span className='jogar'>"Jogar Quiz"</span> para começar.</p>
          </div>
        ) : (
          <div className="card-quiz">
            <h2>Você sabe quem é essa pessoa?</h2>
            <div className="character-display">
              <img className='persona' src={currentCharacter.image} alt={currentCharacter.name} />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Qual é o nome do personagem? &nbsp; </label>
                <input {...register('name')} placeholder="Digite o nome aqui" />
              </div> <br />
              
              <div className="form-group">
                <label>De qual estado o personagem é? &nbsp;</label>
                <select {...register('state')}>
                  <option value="">Selecione</option>
                  <option value="Rio Grande do Sul, Brasil">Rio Grande do Sul, Brasil</option>
                  <option value="Rio de Janeiro, Brasil">Rio de Janeiro, Brasil</option>
                  <option value="Indiana, EUA">Indiana, EUA</option>
                </select>
              </div> <br />

              <div className="form-group">
                <label>Qual é a idade do personagem? &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input type="number" {...register('age')} placeholder="Idade" />
              </div> <br />

              <div className="form-group">
                <label>O personagem está vivo? &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <label>
                  <input type="radio" value="Sim" {...register('alive')} />
                  Sim
                </label> &nbsp; &nbsp; &nbsp;
                <label>
                  <input type="radio" value="Não" {...register('alive')} />
                  Não
                </label>
              </div> <br />

              <div className="form-group">
                <label>Qual é a minoria que o <br /> personagem representa? &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input {...register('minority')} placeholder="Digite a minoria" />
              </div>
              <div className="form-buttons">
                <button className='resp' type="submit">Verificar Respostas</button> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className='resp' type="button" onClick={startGame}>Trocar Personagem</button>
              </div>
            </form>

            {score !== null && (
              <div className="result-section">
                <h3>Sua Pontuação: {score}%</h3>
                <img 
                  src={getResultImage()} 
                  alt="Resultado do Quiz"
                  className="result-image"
                />
                {score === 100 ? (
                  <p>Parabéns! Você acertou tudo!</p>
                ) : (
                  <p>Você pode tentar de novo para melhorar!</p>
                )}
                <button className='tent' onClick={startGame}>Tentar de Novo</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;