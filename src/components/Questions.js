import React from "react";
import { useState } from "react";

export default function Questions({ data }) {
  const [answer, setAnswer] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const tenQuestion = data.slice(0, 10);

  const [score, setScore]=useState(null);

  const handleChoiceClick = (choiceKey)=>{
    const currentQuestion = tenQuestion[currentQuestionIndex];
    setAnswer(previousAnswers=>({...previousAnswers, [currentQuestion.id]:choiceKey}));
    if(choiceKey === currentQuestion.answer){
        setScore("Well done!")
    }
    else{
        setScore("Try again next time.")
    }
  }
  const currentQuestion = tenQuestion[currentQuestionIndex];
  return (
    <div>
      <p>
        Questions {currentQuestionIndex + 1}/{tenQuestion.length}
      </p>
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.question}</p>
          <ul>
            {Object.entries(currentQuestion.choices).map(([key, choice]) => (
              <li key={`choice-${currentQuestion.id}-${key}`}>
                <button onClick={()=>handleChoiceClick(key)}>
                  {key}: {choice}
                </button>
              </li>
            ))}
          </ul>
          {score && <p>{score}</p>}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
