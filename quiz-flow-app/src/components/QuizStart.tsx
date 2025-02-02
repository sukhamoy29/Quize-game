import React from 'react';

const QuizStart: React.FC<{ onStart: () => void }> = ({ onStart }) => {
    return (
        <div className="quiz-start">
            <h1>Welcome to the Quiz!</h1>
            <p>Test your knowledge and have fun!</p>
            <button onClick={onStart}>Start Quiz</button>
        </div>
    );
};

export default QuizStart;