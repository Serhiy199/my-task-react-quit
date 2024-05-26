import Quiz from '../Quiz/Quiz';
import { list } from './QuizList.module.css';
export default function QuizList({ onArrQuestions, onQuizId, onDelete }) {
    return (
        <ul className={list}>
            {onArrQuestions.map(list => (
                <Quiz key={list.id} list={list} onQuizId={onQuizId} onDelete={onDelete} />
            ))}
        </ul>
    );
}
