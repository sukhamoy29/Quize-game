import React from 'react';

interface QuizQuestionProps {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    onAnswerSelect: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, selectedAnswer, onAnswerSelect }) => {
    return (
        <div className="quiz-question">
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => onAnswerSelect(option)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizQuestion;