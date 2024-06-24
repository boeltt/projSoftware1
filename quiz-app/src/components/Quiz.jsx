import React, { useState } from 'react';
import { questions } from './questions';

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

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Você acertou {score} de {questions.length} perguntas.
          <button className='answer-button' onClick={handleRestartQuiz}>Reiniciar Quiz</button>
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