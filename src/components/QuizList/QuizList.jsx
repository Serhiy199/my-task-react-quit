import Quiz from '../Quiz/Quiz';
import { list } from './QuizList.module.css';
export default function QuizList({ onListQuiz, onQuizId, onDelete }) {
    return (
        <ul className={list}>
            {onListQuiz.map(list => (
                <Quiz key={list.id} list={list} onQuizId={onQuizId} onDelete={onDelete} />
            ))}
        </ul>
    );
}
