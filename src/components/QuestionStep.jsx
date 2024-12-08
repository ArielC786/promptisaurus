import React, { useState } from 'react';

const QuestionStep = ({ question, onAnswer, onBack, showBack, answer }) => {
  const [input, setInput] = useState(answer);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(question.id, input);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      
      <form onSubmit={handleSubmit}>
        {question.options ? (
          <div className="space-y-2">
            {question.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setInput(option)}
                className={`block w-full p-3 text-left rounded-md ${
                  input === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={question.placeholder}
            className="w-full p-3 border rounded-md"
          />
        )}

        <div className="mt-6 flex justify-between">
          {showBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionStep; 