// Importa o hook useState e useEffect da biblioteca React para gerenciar o estado e efeitos colaterais do componente.
import { useState, useEffect } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from 'styled-components';

// Cria um componente estilizado chamado Container usando styled-components.
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas, e sombras.
const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: #fff; // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil ao redor do componente.
  max-width: 500px; // Define a largura máxima como 500px.
  margin: 50px auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado Question usando styled-components.
// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
const Question = styled.p`
  color: #555; // Define a cor do texto como um tom médio de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo da pergunta.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado OptionButton usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas, e efeitos de transição.
const OptionButton = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; // Adiciona uma transição suave para a cor de fundo e transformação.

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active { // Aplica estilos ao botão quando ele é clicado.
    background-color: #004494; // Muda a cor de fundo para um tom ainda mais escuro de azul.
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }
`;

// Cria um componente estilizado chamado Score usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
const Score = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-top: 20px; // Adiciona uma margem de 20px acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Define o componente funcional QuizApp.
const QuizApp = () => {
  // Usa o hook useState para criar variáveis de estado para a pontuação, a pergunta atual, e a lista de perguntas.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  localStorage.setItem('IndexCarousel', 4)
  // Usa o hook useEffect para gerar perguntas apenas uma vez quando o componente é montado.
  useEffect(() => {
    generateQuestions(100); // Gera 100 perguntas.
  }, []); // Dependências vazias significam que o efeito será executado apenas uma vez após a montagem do componente.

  // Define uma função para gerar perguntas.
  const generateQuestions = (num) => {
    const questions = [];
    
    for (let i = 0; i < num; i++) {
      const isAddition = Math.random() > 0.5 // Decide aleatoriamente se a pergunta será de adição ou subtração.
      const what1 = Math.floor(Math.random() * 10) + 1
      const what2 = Math.floor(Math.random() * 10) + 1
      let answer
      let operation;
      if (isAddition) {
        answer = what1 + what2
        operation = '+'
      } else {
        answer = what1 - what2
        operation = '-'
      }
      let options = [answer]// Ja inicia com a alternativa certa
      while (options.length < 4) {
        let minOption = Math.min(what1, what2) - 10;
        let maxOption = Math.max(what1, what2) + 10; //Gerammos minimo e maximo  de repostas erradas!!

        let option = Math.floor(Math.random() * (maxOption - minOption + 1)) + minOption; //Geramos repostas erradas aq
        if (option !== answer && !options.includes(option)) {
          options.push(option); // Tudo q for diferente ate chegar em 4 repostas é armazenado opções
        }
      }
      // Embaralha as opções
      options = options.sort(() => Math.random() - 0.5);
      const newQuestion = {
        question: `What is ${what1} ${operation} ${what2}?`,
        options: options,
        answer: answer,
      };
      questions.push(newQuestion)
    }
    // Atualiza o estado com a lista de perguntas
    setQuestions(questions)
  };

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    // Verifica se a resposta fornecida está correta.
    if (answer === questions[currentQuestion].answer) {
        // Se a resposta estiver correta, aumenta a pontuação em 1.
        setScore(score + 1);
    } else {
        setCurrentQuestion(questions.length); // asim finalizamos o jogo
        return; // Sai da função para evitar incrementar o índice.
    }
    // Passa para a próxima pergunta.
    setCurrentQuestion(currentQuestion + 1);
};

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Quiz App</Title> {/* Exibe o título do aplicativo de quiz */}
      {currentQuestion < questions.length ? ( // Verifica se ainda há perguntas para responder.
        <div>
          <Question>{questions[currentQuestion].question}</Question> {/* Exibe a pergunta atual */}
          {questions[currentQuestion].options.map((option) => (
            <OptionButton key={option} onClick={() => handleAnswer(option)}>{option}</OptionButton> 
          ))}
        </div>
      ) : (
        <Score>Your score: {score}</Score> 
        
      )}
    </Container>
  );
};

// Exporta o componente QuizApp para que possa ser utilizado em outras partes da aplicação.
export default QuizApp;