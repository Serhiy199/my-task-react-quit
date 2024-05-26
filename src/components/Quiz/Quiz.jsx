import { Link, useLocation } from 'react-router-dom';
import css from './Quiz.module.css';

export default function Quiz({ list: { title, id }, onQuizId, onDelete }) {
    const location = useLocation();

    return (
        <li className={css.contactBox}>
            <div className={css.info}>
                <h3 className={css.text}>{title}</h3>

                <Link to={`/quiz/${id}`} state={location}>
                    <button className={css.button} onClick={() => onQuizId(id)}>
                        Start
                    </button>
                </Link>
                <button className={css.button} onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}
