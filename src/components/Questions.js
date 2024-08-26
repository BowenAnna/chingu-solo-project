import React from 'react'
import { useState } from 'react';

export default function Questions({data}) {
    const [answer, setAnswer]=useState({});
    const [result, setResult]=useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const tenQuestion = data.slice(0,10);
    const currentQuestion = tenQuestion[currentQuestionIndex];

  return (
    <div>
    <p>Questions {currentQuestionIndex + 1}/{tenQuestion.length}</p>
    {currentQuestion?(
 <div>
 <p>{currentQuestion.question}</p>
 <ul>
   {Object.entries(currentQuestion.choices).map(([key, choice]) => (
     <li key={`choice-${currentQuestion.id}-${key}`}>
         <button> {key}: {choice}</button>
     </li>
   ))}
 </ul>
</div>
    ):(<div>Loading...</div>)
     
   }
  </div>
  )
}