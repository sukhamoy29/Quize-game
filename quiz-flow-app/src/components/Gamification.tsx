import React from 'react';

const Gamification: React.FC<{ score: number; totalQuestions: number }> = ({ score, totalQuestions }) => {
    const calculatePoints = () => {
        return (score / totalQuestions) * 100;
    };

    const points = calculatePoints();
    const badge = points >= 80 ? 'Gold' : points >= 50 ? 'Silver' : 'Bronze';

    return (
        <div className="gamification">
            <h2>Gamification Summary</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
            <p>Points Earned: {points.toFixed(2)}%</p>
            <p>Badge Earned: {badge}</p>
        </div>
    );
};

export default Gamification;