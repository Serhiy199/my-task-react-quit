import QuizList from '../../components/QuizList/QuizList';

export default function HomePage({ onListQuiz, onQuizId, onDelete }) {
    console.log(onListQuiz);
    return (
        <>
            <QuizList onDelete={onDelete} onQuizId={onQuizId} onListQuiz={onListQuiz} />;
        </>
    );
}
