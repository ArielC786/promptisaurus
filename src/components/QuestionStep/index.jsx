import React, { useState } from 'react';
import './styles.css';

const QuestionStep = ({ question, value, onChange }) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    onChange(suggestion);
  };

  return (
    <div className="question-step">
      <h3 className="question-title">{question.question}</h3>
      
      {/* Dialog box for answer */}
      <div className="answer-dialog">
        {question.options ? (
          <select 
            value={value || ''} 
            onChange={(e) => onChange(e.target.value)}
            className="input-field"
          >
            <option value="">Select {question.label}</option>
            {question.options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your answer here..."
            className="input-field"
            rows={3}
          />
        )}
      </div>
      
      {/* Answer references */}
      {question.suggestions && (
        <div className="answer-references">
          {question.suggestions.map((suggestion, index) => (
            <span
              key={index}
              className={`reference-item ${selectedSuggestion === suggestion ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
              {index < question.suggestions.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionStep; 