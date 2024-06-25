import React, { useState } from 'react';

const questions = [
  {
    question: "Qual é a formação geológica mais conhecida no Geoparque de Caçapava do Sul?",
    options: ["Pão de Açúcar", "Pedra do Segredo", "Morro do Chapéu", "Sítio do Rincão dos Dourados"],
    answer: "Pedra do Segredo",
    image: "/images/p1.jpg",
    reference: "https://geoparquecacapavadosul.com.br"
  },
  {
    question: "Em qual bioma está inserido o Geoparque de Caçapava do Sul?",
    options: ["Amazônia", "Pantanal", "Cerrado", "Pampa"],
    answer: "Pampa",
    image: "/images/p2.jpg",
    reference: "https://www.ibge.gov.br"
  },
  {
    question: "Qual o significado cultural do Geoparque de Caçapava do Sul?",
    options: ["Área de conservação da fauna marinha", "Área de preservação de formações geológicas e patrimônio histórico", "Área de produção vinícola", "Área de desenvolvimento industrial sustentável"],
    answer: "Área de preservação de formações geológicas e patrimônio histórico",
    image: "/images/p3.jpg",
    reference: "https://www.unesco.org/en/iggp/geoparks/about"
  },
  {
    question: "Qual é a importância do Geoparque de Caçapava do Sul para a geoconservação?",
    options: ["Preservação de recursos hídricos", "Conservação de formações geológicas e fósseis", "Desenvolvimento de atividades agrícolas", "Criação de reservas florestais"],
    answer: "Conservação de formações geológicas e fósseis",
    image: "/images/p4.jpg",
    reference: "https://geoparquecacapavadosul.com.br"
  },
  {
    question: "Qual das seguintes atividades é promovida no Geoparque de Caçapava do Sul para o turismo sustentável?",
    options: ["Safáris", "Ecoturismo e trilhas", "Turismo de luxo", "Turismo de compras"],
    answer: "Ecoturismo e trilhas",
    image: "/images/p5.jpg",
    reference: "https://blog.viagemrs.com.br"
  },
  {
    question: "Quais são as principais rochas encontradas no Geoparque de Caçapava do Sul?",
    options: ["Rochas ígneas", "Rochas metamórficas", "Rochas sedimentares", "Rochas vulcânicas"],
    answer: "Rochas sedimentares",
    image: "/images/p6.jpg",
    reference: "https://www.scientificarticles.com.br/geoconservacao"
  },
  {
    question: "Qual a importância do Geoparque de Caçapava do Sul para a educação científica?",
    options: ["Promove a educação financeira", "Fomenta a educação ambiental e geológica", "Apoia a educação artística", "Desenvolve a educação física"],
    answer: "Fomenta a educação ambiental e geológica",
    image: "/images/p7.jpg",
    reference: "https://www.cienciahoje.org.br"
  },
  {
    question: "Qual a fauna típica encontrada na região do Geoparque de Caçapava do Sul?",
    options: ["Onça-pintada e macaco-prego", "Capivara e jacaré", "Tatu-bola e tamanduá-bandeira", "Veado-campeiro e seriema"],
    answer: "Veado-campeiro e seriema",
    image: "/images/p8.jpg",
    reference: "https://www.ibge.gov.br"
  },
  {
    question: "Quando o Geoparque de Caçapava do Sul foi oficialmente reconhecido como geoparque?",
    options: ["2010", "2015", "2018", "2020"],
    answer: "2020",
    image: "/images/p9.jpg",
    reference: "https://www.unesco.org/en/iggp/geoparks/about"
  },
  {
    question: "Qual a área aproximada do Geoparque de Caçapava do Sul?",
    options: ["1.047 km²", "2.584 km²", "3.047 km²", "4.542 km²"],
    answer: "3.047 km²",
    image: "/images/p10.jpg",
    reference: "https://cacapavadosul.rs.gov.br"
  },
  {
    question: "Qual é o papel do Geoparque de Caçapava do Sul na conservação da biodiversidade?",
    options: ["Proteção exclusiva de espécies vegetais", "Conservação de habitats naturais e espécies nativas", "Criação de áreas urbanas verdes", "Desenvolvimento de atividades agropecuárias"],
    answer: "Conservação de habitats naturais e espécies nativas",
    image: "/images/p11.jpg",
    reference: "https://www.ibge.gov.br"
  },
  {
    question: "Qual é a vegetação predominante no Geoparque de Caçapava do Sul?",
    options: ["Mata Atlântica", "Caatinga", "Campos de altitude", "Campos nativos"],
    answer: "Campos nativos",
    image: "/images/p12.jpg",
    reference: "https://www.ibge.gov.br"
  },
  {
    question: "Quais são os benefícios do Geoparque de Caçapava do Sul para as comunidades locais?",
    options: ["Desenvolvimento industrial", "Valorização cultural e geração de empregos", "Expansão urbana", "Redução do turismo"],
    answer: "Valorização cultural e geração de empregos",
    image: "/images/p13.jpg",
    reference: "https://blog.viagemrs.com.br"
  },
  {
    question: "Qual das seguintes instituições tem parceria com o Geoparque de Caçapava do Sul?",
    options: ["Universidade Federal de Santa Maria (UFSM)", "Universidade de São Paulo (USP)", "Universidade Federal de Pelotas (UFPel)", "Universidade de Brasília (UnB)"],
    answer: "Universidade Federal de Santa Maria (UFSM)",
    image: "/images/p14.jpg",
    reference: "https://www.ufsm.br"
  },
  {
    question: "Qual é a importância histórica da cidade de Caçapava do Sul no contexto do geoparque?",
    options: ["Primeira capital do estado do Rio Grande do Sul", "Local de batalhas históricas da Revolução Farroupilha", "Centro industrial do século XIX", "Ponto de partida das missões jesuíticas"],
    answer: "Local de batalhas históricas da Revolução Farroupilha",
    image: "/images/p15.jpg",
    reference: "https://cacapavadosul.rs.gov.br"
  },
  {
    question: "Qual dos seguintes minerais é explorado na região do Geoparque de Caçapava do Sul?",
    options: ["Ouro", "Carvão", "Calcário", "Petróleo"],
    answer: "Calcário",
    image: "/images/p16.jpg",
    reference: "https://www.ibge.gov.br"
  },
  {
    question: "Quais são os principais desafios enfrentados pelo Geoparque de Caçapava do Sul?",
    options: ["Superpopulação", "Desmatamento e mineração ilegal", "Caça de animais", "Urbanização descontrolada"],
    answer: "Desmatamento e mineração ilegal",
    image: "/images/p17.jpg",
    reference: "https://www.scientificarticles.com.br/geoconservacao"
  },
  {
    question: "Qual das seguintes áreas de conhecimento é promovida pelo Geoparque de Caçapava do Sul?",
    options: ["Astronomia", "Geologia e Biologia", "Física Quântica", "Engenharia Mecânica"],
    answer: "Geologia e Biologia",
    image: "/images/p18.jpg",
    reference: "https://www.cienciahoje.org.br"
  },
  {
    question: "Qual é o significado do nome 'Caçapava'?",
    options: ["De origem indígena, significa “Clareira na Mata”", "De origem portuguesa, significa 'vale fechado'", "De origem africana, significa 'montanha sagrada'", "De origem espanhola, significa 'campo florido'"],
    answer: "De origem indígena, significa “Clareira na Mata”",
    image: "/images/p19.jpg",
    reference: "https://geoparquecacapavadosul.com.br"
  },
  {
    question: "Qual é a relevância das pinturas rupestres encontradas no Geoparque de Caçapava do Sul?",
    options: ["Demonstra a presença de povos pré-históricos na região", "Ilustra a chegada dos colonizadores europeus", "Representa cenas de batalhas históricas", "Mostra a fauna local na era moderna"],
    answer: "Demonstra a presença de povos pré-históricos na região",
    image: "/images/20.jpg",
    reference: "https://www.scientificarticles.com.br/geoconservacao"
  },
  {
    question: "Qual é o papel das comunidades locais na gestão do Geoparque de Caçapava do Sul?",
    options: ["Não possuem nenhum papel", "Participam ativamente na conservação e turismo sustentável", "São excluídas das decisões", "Focam apenas na agricultura"],
    answer: "Participam ativamente na conservação e turismo sustentável",
    image: "/images/p21.jpg",
    reference: "https://geoparquecacapavadosul.com.br"
  },
  {
    question: "Qual é a relação do Geoparque de Caçapava do Sul com a UNESCO?",
    options: ["Não possui relação", "É um geoparque reconhecido pela UNESCO", "É uma reserva da biosfera da UNESCO", "Apenas busca reconhecimento futuro"],
    answer: "É um geoparque reconhecido pela UNESCO",
    image: "/images/p22.jpg",
    reference: "https://www.unesco.org/en/iggp/geoparks/about"
  },
  {
    question: "Quem foi Cel. João Dias dos Santos Rosa?",
    options: ["Geólogo que descobriu formações rochosas no Geoparque de Caçapava", "Militar que contribuiu para o desenvolvimento local e preservação do patrimônio natural", "Biólogo que catalogou espécies no Geoparque de Caçapava", "Político que criou o Geoparque de Caçapava"],
    answer: "Militar que contribuiu para o desenvolvimento local e preservação do patrimônio natural",
    image: "/images/p23.jpg",
    reference: "https://cacapavadosul.rs.gov.br/noticia/visualizar/id/1721/?restos-mortais-do-descobridor-do-minerio-nas-minas-sao-transladados.html"
  },
  {
    question: "Qual foi a principal descoberta de Cel. João Dias dos Santos Rosa?",
    options: ["Minério de ouro", "Minério de prata", "Minério de cobre", "Minério de ferro"],
    answer: "Minério de cobre",
    image: "/images/p24.jpg",
    reference: "https://cacapavadosul.rs.gov.br/noticia/visualizar/id/1721/?restos-mortais-do-descobridor-do-minerio-nas-minas-sao-transladados.html"
  },
  {
    question: "Quem foi Sepé Tiarajú?",
    options: ["Líder indígena guarani que lutou na região do atual Geoparque de Caçapava", "Explorador português que descobriu as formações geológicas do Geoparque de Caçapava", "Cientista naturalista que documentou a flora e fauna do Geoparque de Caçapava durante o século XVIII", "Arquiteto espanhol responsável pela construção das principais estruturas históricas do Geoparque de Caçapava"],
    answer: "Líder indígena guarani que lutou na região do atual Geoparque de Caçapava",
    image: "/images/p25.jpg",
    reference: ""
  },
  {
    question: "Qual é a importância histórica do Forte Dom Pedro II em Caçapava do Sul?",
    options: ["Foi usado como residência oficial de governadores", "Foi uma importante fortificação militar durante a Revolução Farroupilha", "Foi o local de assinatura do Tratado de Tordesilhas", "É conhecido por ser a maior fortaleza construída pelos portugueses na América"],
    answer: "Foi uma importante fortificação militar durante a Revolução Farroupilha",
    image: "/images/p26.jpg",
    reference: "https://cacapavadosul.rs.gov.br"
  },
  {
    question: "Como foi formado o Forte Dom Pedro II?",
    options: ["Formado no século XIX como parte da defesa militar na região do Geoparque de Caçapava", "Foi formado por erupções vulcânicas que moldaram as rochas da região", "Construído por colonos alemães que se estabeleceram na área do Geoparque de Caçapava", "Formado por atividades mineradoras em busca de ouro no Geoparque de Caçapava"],
    answer: "Formado no século XIX como parte da defesa militar na região do Geoparque de Caçapava",
    image: "/images/p27.jpg",
    reference: ""
  },
  {
    question: "Qual é a origem do nome 'Minas do Camaquã'?",
    options: ["Deriva do Rio Camaquã, que passa pela região", "Homenagem a um explorador português chamado Camaquã", "Nome dado pelos indígenas locais que significa 'terra das minas'", "Referência à cidade vizinha de Camaquã, onde as minas foram descobertas"],
    answer: "Deriva do Rio Camaquã, que passa pela região",
    image: "/images/p28.jpg",
    reference: ""
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setCorrectAnswer(questions[currentQuestion].answer);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setCorrectAnswer(null);
  };

  const percentageScore = ((score / questions.length) * 100).toFixed(2);

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <p>Você acertou {score} de {questions.length} perguntas.</p>
          <p>Isso equivale a {percentageScore}% de acertos.</p>
          <button onClick={handleRestartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
            {questions[currentQuestion].image && (
              <img src={questions[currentQuestion].image} alt="Geoparque de Caçapava do Sul" />
            )}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className={`answer-button ${
                  selectedOption === null
                    ? ""
                    : option === correctAnswer
                    ? "correct"
                    : option === selectedOption
                    ? "incorrect"
                    : ""
                }`}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-question"
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
          >
            Próxima Pergunta
          </button>
          <div className="reference-section">
            Referência: <a href={questions[currentQuestion].reference} target="_blank" rel="noopener noreferrer">Saiba mais</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;