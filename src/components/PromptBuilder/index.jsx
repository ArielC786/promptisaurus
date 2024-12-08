import React, { useState } from 'react';
import { promptQuestions } from '../../data/questions';
import './styles.css';

const PromptBuilder = () => {
  const [answers, setAnswers] = useState({});
  const [finalPrompt, setFinalPrompt] = useState('');
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const generatePrompt = () => {
    const promptParts = [];
    
    // Visual type
    if (answers.visual) {
      promptParts.push(answers.visual);
    }
    
    // Camera/Equipment
    if (answers.camera) {
      promptParts.push(`shot on ${answers.camera}`);
    }

    // Subject
    if (answers.subject) {
      promptParts.push(`of ${answers.subject}`);
    }

    // Scene
    if (answers.scene) {
      promptParts.push(`in ${answers.scene}`);
    }

    // Lighting
    if (answers.lighting) {
      promptParts.push(`with ${answers.lighting}`);
    }

    // Framing
    if (answers.framing) {
      promptParts.push(`using ${answers.framing}`);
    }

    // Refinements
    if (answers.refinement) {
      promptParts.push(answers.refinement);
    }

    return promptParts.join(' ');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = generatePrompt();
    setFinalPrompt(prompt);
    setShowFinalPrompt(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
  };

  return (
    <div className="prompt-builder">
      <h1 className="title">Promptisaurus</h1>
      <div className="title-line"></div>
      <p className="tagline">Unleash your Creativity, One Prompt at a Time!</p>
      
      <form onSubmit={handleSubmit}>
        {promptQuestions.map((question) => (
          <div key={question.id} className="question-block">
            <h2 className="question-title">{question.question}</h2>
            <div className="dialog-box">
              <textarea
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswer(question.id, e.target.value)}
                className="answer-input"
              />
            </div>
            <div className="suggestions-label">Suggestions:</div>
            <div className="reference-answers">
              {question.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="reference"
                  onClick={() => handleAnswer(question.id, suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ))}
        
        <button type="submit" className="generate-btn">
          Generate Prompt
        </button>
      </form>

      {showFinalPrompt && (
        <div className="final-prompt">
          <h3 className="final-prompt-title">Your Generated Prompt</h3>
          <p className="final-prompt-text">{finalPrompt}</p>
          <button onClick={handleCopy} className="copy-btn">
            Copy to Clipboard
          </button>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <p>Tell me your experience and/or suggest any improvements:</p>
        <p>Email: <a href="mailto:a.casia@hotmail.com">a.casia@hotmail.com</a></p>
      </footer>
    </div>
  );
};

export default PromptBuilder; 