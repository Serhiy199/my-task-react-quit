import QuizList from '../../components/QuizList/QuizList';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function HomePage({
    onFilterQuiz,
    onSetFilterQuiz,
    onListQuiz,
    onQuizId,
    onDelete,
}) {
    return (
        <>
            <SearchBox value={onFilterQuiz} onFilterContacts={onSetFilterQuiz} />
            <QuizList onDelete={onDelete} onQuizId={onQuizId} onListQuiz={onListQuiz} />;
        </>
    );
}
