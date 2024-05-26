import { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { arrQuiz } from './assets/DataQuiz';
import Navigation from './components/Navigation/Navigation';
import HomePage from './page/Home/HomePage';
import QuizQuestions from './page/QuizQuestions/QuizQuestions';
import SearchBox from './components/SearchBox/SearchBox';
import QuizForm from './page/QuizForm/QuizForm';

function App() {
    const [arrQuizQuestions, setArrQuizQuestions] = useState(() => {
        const savedQuiz = window.localStorage.getItem('saved-quiz');
        return savedQuiz !== null ? JSON.parse(savedQuiz) : arrQuiz;
    });

    const [filterQuiz, setFilterQuiz] = useState('');

    const [filterQuizById, setFilterQuizById] = useState('');

    const selectedQuiz = quizId => {
        return setFilterQuizById(quizId);
    };

    const findQuiz = arrQuizQuestions.find(quiz => quiz.id === filterQuiz);

    const visibleQuiz = arrQuizQuestions.filter(quiz =>
        quiz.title.toLowerCase().includes(filterQuiz.toLowerCase())
    );

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
                            onFilterQuiz={filterQuiz}
                            onSetFilterQuiz={setFilterQuiz}
                            onListQuiz={visibleQuiz}
                            onDelete={deleteQuiz}
                            onQuizId={selectedQuiz}
                        />
                    }
                />
                <Route path="/form" element={<QuizForm />} />
                <Route path="/quiz/:quizId" element={<QuizQuestions onSelectedQuiz={findQuiz} />} />
            </Routes>
        </>
    );
}

export default App;
