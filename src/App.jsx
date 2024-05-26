import { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { arrQuiz } from './assets/data';
import Navigation from './components/Navigation/Navigation';
import HomePage from './page/Home/HomePage';
import QuizQuestions from './page/QuizQuestions/QuizQuestions';

function App() {
    const [arrQuizQuestions, setArrQuizQuestions] = useState(() => {
        const savedQuiz = window.localStorage.getItem('saved-quiz');
        return savedQuiz !== null ? JSON.parse(savedQuiz) : arrQuiz;
    });
    // const [arrQuizQuestions, setArrQuizQuestions] = useState(arrQuiz);
    const [filterQuiz, setFilterQuiz] = useState(null);

    const selectedQuiz = quizId => {
        return setFilterQuiz(quizId);
    };

    const findQuiz = arrQuizQuestions.find(quiz => quiz.id === filterQuiz);

    const deleteQuiz = contactId => {
        setArrQuizQuestions(prevQuiz => {
            return prevQuiz.filter(contact => contact.id !== contactId);
        });
    };

    useEffect(() => {
        localStorage.setItem('saved-quiz', JSON.stringify(arrQuizQuestions));
    }, [arrQuizQuestions]);

    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            onListQuiz={arrQuizQuestions}
                            onDelete={deleteQuiz}
                            onQuizId={selectedQuiz}
                        />
                    }
                />
                <Route path="/quiz/:quizId" element={<QuizQuestions onSelectedQuiz={findQuiz} />} />
            </Routes>
        </>
    );
}

export default App;
