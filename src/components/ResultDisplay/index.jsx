import React from 'react';
import Button from '../Button';
import './styles.css';

const ResultDisplay = ({ prompt, onCopy }) => {
  return (
    <div id="result-display">
      <h3>Generated Prompt</h3>
      <p>{prompt}</p>
      <Button 
        variant="secondary" 
        onClick={onCopy}
      >
        Copy to Clipboard
      </Button>
    </div>
  );
};

export default ResultDisplay; 