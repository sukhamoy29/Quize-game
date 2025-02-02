import React, { useState, useEffect } from 'react';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizSummary from './components/QuizSummary';
import Gamification from './components/Gamification';
import { fetchQuizData } from './services/api';

const App = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const getQuizData = async () => {
            try {
                const data = await fetchQuizData();
                setQuizData(data);
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        };
        getQuizData();
    }, []);

    const handleAnswerSelected = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <div className="App">
            {quizCompleted ? (
                <QuizSummary score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
            ) : (
                <>
                    {currentQuestionIndex === 0 && <QuizStart startQuiz={() => setCurrentQuestionIndex(1)} />}
                    {currentQuestionIndex > 0 && (
                        <QuizQuestion
                            question={quizData[currentQuestionIndex - 1]}
                            onAnswerSelected={handleAnswerSelected}
                        />
                    )}
                    <Gamification score={score} />
                </>
            )}
        </div>
    );
};

export default App;