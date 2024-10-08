import React from "react";
import { useState } from "react";

export default function Questions({ data }) {
  const [answer, setAnswer] = useState({});
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
  };

  const handleNextQuestion = ()=>{
    setScore(null);
    if(currentQuestionIndex < tenQuestion.length-1){
        setCurrentQuestionIndex(previuosIndex => previuosIndex+1);
    }
    else{
        handleSubmit();
    }
  };

  const handleSubmit=()=>{
    let count = 0;
    tenQuestion.forEach(question=>{
        if(answer[question.id]===question.answer){
            count++;
        }
    })
    setScore(`You got ${count} out of 10 correct!`)
  }
  const currentQuestion = tenQuestion[currentQuestionIndex];
  return (
    <div class="main">
    <div class="trivia">
      <p>
        Questions {currentQuestionIndex + 1}/{tenQuestion.length}
      </p>
      {currentQuestion ? (
        <div>
            <div>
          <h1>{currentQuestion.question}</h1>
          <ul class="answer-options">
            {Object.entries(currentQuestion.choices).map(([key, choice]) => (
              <li key={`choice-${currentQuestion.id}-${key}`}>
                <div onClick={()=>handleChoiceClick(key)} class="answer-choices">
                 {choice}
                </div>
              </li>
            ))}
          </ul>
       </div>
       <div class="score">
          {score && <p>{score}</p>}
          <button onClick={handleNextQuestion} disabled={!answer[currentQuestion.id]}>
            {currentQuestionIndex<tenQuestion.length-1? "Next Question":"Submit"}
          </button>
        </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
  );
}
