import React, { useState } from 'react';
import { promptQuestions } from '../data/questions';
import './styles.css';

const PromptBuilder = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final answers:', answers);
  };

  return (
    <div className="prompt-builder">
      <h1 className="title">Promptlify</h1>
      
      <form onSubmit={handleSubmit}>
        {promptQuestions.map((question) => (
          <div key={question.id} className="question-block">
            <h2 className="question-title">{question.question}</h2>
            
            {/* Dialog Box */}
            <div className="dialog-box">
              <textarea
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswer(question.id, e.target.value)}
                placeholder="Write your answer here..."
                className="answer-input"
              />
            </div>
            
            {/* Reference Answers */}
            <div className="reference-answers">
              {question.suggestions.map((suggestion, index) => (
                <React.Fragment key={suggestion}>
                  <span 
                    className="reference"
                    onClick={() => handleAnswer(question.id, suggestion)}
                  >
                    {suggestion}
                  </span>
                  {index < question.suggestions.length - 1 && ', '}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Generate Prompt
        </button>
      </form>
    </div>
  );
};

export default PromptBuilder; 