import React, { useState } from 'react';

const questions = [
  {
    question: "Qual é a formação geológica mais conhecida no Geoparque de Caçapava do Sul?",
    options: ["Pão de Açúcar", "Pedra do Segredo", "Morro do Chapéu", "Sítio do Rincão dos Dourados"],
    answer: "Pedra do Segredo",
    reference: "https://geoparquecacapavadosul.com.br"
  },
  {
    question: "Em qual bioma está inserido o Geoparque de Caçapava do Sul?",
    options: ["Amazônia", "Pantanal", "Cerrado", "Pampa"],
    answer: "Pampa",
    reference: "https://www.ibge.gov.br"
  },
  // Adicione as demais perguntas aqui
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Você acertou {score} de {questions.length} perguntas.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)} key={option}>
                {option}
              </button>
            ))}
          </div>
          <div className="reference-section">
            Referência: <a href={questions[currentQuestion].reference} target="_blank" rel="noopener noreferrer">Saiba mais</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;