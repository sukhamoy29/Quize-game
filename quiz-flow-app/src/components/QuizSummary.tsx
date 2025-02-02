import React from 'react';

interface QuizSummaryProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;

    const getFeedback = () => {
        if (percentage === 100) {
            return "Perfect score! You're a quiz master!";
        } else if (percentage >= 75) {
            return "Great job! You really know your stuff!";
        } else if (percentage >= 50) {
            return "Not bad! A little more practice and you'll be there!";
        } else {
            return "Keep trying! Every quiz is a chance to learn!";
        }
    };

    return (
        <div className="quiz-summary">
            <h2>Quiz Summary</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
            <p>{getFeedback()}</p>
            <button onClick={onRestart}>Restart Quiz</button>
        </div>
    );
};

export default QuizSummary;