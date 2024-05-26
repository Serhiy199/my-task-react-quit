import { arrQuiz } from '../../assets/data';
import QuizList from '../../components/QuizList/QuizList';

export default function HomePage({ onQuizId, onDelete }) {
    return (
        <>
            <QuizList onDelete={onDelete} onQuizId={onQuizId} onArrQuestions={arrQuiz} />;
        </>
    );
}
