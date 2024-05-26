import { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { arrQuiz } from './assets/DataQuiz';
import Navigation from './components/Navigation/Navigation';
import HomePage from './page/Home/HomePage';
import QuizQuestions from './page/QuizQuestions/QuizQuestions';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
    const [arrQuizQuestions, setArrQuizQuestions] = useState(() => {
        const savedQuiz = window.localStorage.getItem('saved-quiz');
        return savedQuiz !== null ? JSON.parse(savedQuiz) : arrQuiz;
    });

    const [filterQuiz, setFilterQuiz] = useState('');

    const selectedQuiz = quizId => {
        return setFilterQuiz(quizId);
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
            <SearchBox value={filterQuiz} onFilterContacts={setFilterQuiz} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            onListQuiz={visibleQuiz}
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
