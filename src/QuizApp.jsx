import React, { useState } from 'react';
import './QuizApp.css';

const questions = [
  {
    question: "What does HTTP stand for?",
    options: ["Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "Hyper Tool Transfer Protocol", "Hyperlink Transfer Protocol"],
    answer: "Hypertext Transfer Protocol"
  },
  {
    question: "Which HTML element is used to include JavaScript code?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "##", "**"],
    answer: "//"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["bg-color", "background-color", "color", "background"],
    answer: "background-color"
  },
  {
    question: "Inside which HTML element do we put the meta information about the document?",
    options: ["<body>", "<head>", "<meta>", "<title>"],
    answer: "<head>"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["v carName;", "variable carName;", "var carName;", "dim carName;"],
    answer: "var carName;"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  }
];


function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>{questions[current].question}</h2>
          <ul>
            {questions[current].options.map((option, idx) => (
              <li
                key={idx}
                className={selected === option ? 'selected' : ''}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNext} disabled={!selected}>Next</button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
