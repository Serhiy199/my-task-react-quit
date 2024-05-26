import { useState, useEffect } from 'react';
// import favoriteCinemaDay from '../../cinema-api';
// import { title } from './HomePage.module.css';
// import Loader from '../../components/Loader/Loader';
// import MoviesList from '../../components/MovieList/MoviesList';

import { arrQuiz } from '../../assets/data';
import QuizList from '../../components/QuizList/QuizList';

// {
//     <Route path="/" element={<ListQuiz />}/>;
// }
export default function HomePage({ onQuizId }) {
    const [favoritCinema, setFavoritCinema] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     async function getCinema() {
    //         try {
    //             setError(false);
    //             setLoading(true);
    //             const data = await favoriteCinemaDay();

    //             setFavoritCinema(data);
    //         } catch (error) {
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     getCinema();
    // }, []);

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {/* {loading && <Loader />} */}
            {/* <h2 className={}>A list of the most popular movies today</h2> */}
            <QuizList onQuizId={onQuizId} onArrQuestions={arrQuiz} />;
        </>
    );
}
