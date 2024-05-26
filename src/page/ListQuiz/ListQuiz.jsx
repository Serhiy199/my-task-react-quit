import { arrQuiz } from '../../assets/data';
import QuizList from '../../components/QuizList/QuizList';

export default function HomePage({ onQuizId }) {
    return (
        <>
            <QuizList onQuizId={onQuizId} onArrQuestions={arrQuiz} />;
        </>
    );
}
