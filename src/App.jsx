import { useState, useEffect } from 'react';
import './App.css';

// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
import { Routes, Route, NavLink } from 'react-router-dom';

// import Quiz from './components/Quiz/Quiz';
import { arrQuiz } from './assets/data';
import Navigation from './components/Navigation/Navigation';
import ListQuiz from './page/ListQuiz/ListQuiz';
import QuizQuestions from './page/QuizQuestions/QuizQuestions';

const listContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
    // console.log(arrQuestions);
    // const [contacts, setContacts] = useState(() => {
    //     const savedContacts = window.localStorage.getItem('saved-contacts');
    //     return savedContacts !== null ? JSON.parse(savedContacts) : listContacts;
    // });

    const [arrQuizQuestions, setArrQuizQuestions] = useState(arrQuiz);
    const [filterQuiz, setFilterQuiz] = useState(null);

    const selectedQuiz = quizId => {
        return setFilterQuiz(quizId);
    };

    const findQuiz = arrQuizQuestions.find(quiz => quiz.id === filterQuiz);

    // const [filterContacts, setFiltrContacts] = useState('');

    // const addContact = newContact => {
    //     setContacts(listContacts => {
    //         return [...listContacts, newContact];
    //     });
    // };

    // const visibleContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    // );
    // const deleteContact = contactId => {
    //     setContacts(prevContact => {
    //         return prevContact.filter(contact => contact.id !== contactId);
    //     });
    // };

    // useEffect(() => {
    //     localStorage.setItem('saved-contacts', JSON.stringify(contacts));
    // }, [contacts]);
    return (
        <>
            <Navigation />
            <Routes>
                {/* <h1>Phonebook</h1> */}
                {/* <Route path={`/${arrQuestions[0].id}`} element={<Quiz />} /> */}
                {/* 
                <ContactForm onContact={addContact} />
                <SearchBox value={filterContacts} onFilterContacts={setFiltrContacts} />
                <ContactList listContacts={visibleContacts} onDelete={deleteContact} /> */}

                <Route path="/" element={<ListQuiz onQuizId={selectedQuiz} />} />
                <Route
                    path="/quiz/:quizId"
                    element={<QuizQuestions onSelectedQuiz={findQuiz} />}
                ></Route>
                {/* <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </>
    );
}

export default App;
