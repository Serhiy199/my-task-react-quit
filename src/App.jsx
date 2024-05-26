import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { arrQuiz } from './assets/data';
import Navigation from './components/Navigation/Navigation';
import ListQuiz from './page/ListQuiz/ListQuiz';
import QuizQuestions from './page/QuizQuestions/QuizQuestions';

function App() {
    const [arrQuizQuestions, setArrQuizQuestions] = useState(arrQuiz);
    const [filterQuiz, setFilterQuiz] = useState(null);

    const selectedQuiz = quizId => {
        return setFilterQuiz(quizId);
    };

    const findQuiz = arrQuizQuestions.find(quiz => quiz.id === filterQuiz);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ListQuiz onQuizId={selectedQuiz} />} />
                <Route
                    path="/quiz/:quizId"
                    element={<QuizQuestions onSelectedQuiz={findQuiz} />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
