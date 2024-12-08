import React from 'react';

const FinalPrompt = ({ answers, onBack }) => {
  const generatePrompt = () => {
    const parts = [];
    
    if (answers.visual) {
      parts.push(answers.visual);
    }
    
    if (answers.camera) {
      parts.push(`shot on ${answers.camera}`);
    }

    if (answers.subject) {
      parts.push(`of ${answers.subject}`);
    }

    if (answers.scene) {
      parts.push(`in ${answers.scene}`);
    }

    if (answers.lighting) {
      parts.push(`with ${answers.lighting}`);
    }

    if (answers.framing) {
      parts.push(`using ${answers.framing}`);
    }

    if (answers.refinement) {
      parts.push(answers.refinement);
    }

    return parts.join(' ');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Your Generated Prompt</h2>
      
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <p className="text-lg">{generatePrompt()}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Back
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(generatePrompt())}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default FinalPrompt;