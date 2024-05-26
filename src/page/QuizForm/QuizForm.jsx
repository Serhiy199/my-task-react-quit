import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './QuizForm.module.css';

const ContactSchema = Yup.object().shape({
    title: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    questions: Yup.string().min(9, 'Too short!').max(12, 'Too long!').required('Required'),
    answerA: Yup.string().min(1, 'Too short!').max(50, 'Too long!').required('Required'),
    answerB: Yup.string().min(1, 'Too short!').max(50, 'Too long!').required('Required'),
    answerC: Yup.string().min(1, 'Too short!').max(50, 'Too long!').required('Required'),
    answerD: Yup.string().min(1, 'Too short!').max(50, 'Too long!').required('Required'),
});

const initialValues = {
    title: '',
    questions: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
};

export default function QuizForm({ onNewQuiz }) {
    const quizTitleId = useId();
    const questionsId = useId();
    const answerIdA = useId();
    const answerIdB = useId();
    const answerIdC = useId();
    const answerIdD = useId();

    const handleSubmit = ({ title, questions, answerA, answerB, answerC, answerD }, actions) => {
        onNewQuiz({ id: nanoid(), title, questions, answerA, answerB, answerC, answerD });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.box}>
                    <label htmlFor={quizTitleId} className={css.label}>
                        Quiz Title
                    </label>
                    <Field name="title" id={quizTitleId} className={css.field} />
                    <ErrorMessage name="title" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={questionsId} className={css.label}>
                        Questions
                    </label>
                    <Field name="questions" id={questionsId} className={css.field} />
                    <ErrorMessage name="questions" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdA} className={css.label}>
                        Answer option A
                    </label>
                    <Field name="answerA" id={answerIdA} className={css.field} />
                    <ErrorMessage name="answerA" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdB} className={css.label}>
                        Answer option B
                    </label>
                    <Field name="answerB" id={answerIdB} className={css.field} />
                    <ErrorMessage name="answerB" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdC} className={css.label}>
                        Answer option C
                    </label>
                    <Field name="answerC" id={answerIdC} className={css.field} />
                    <ErrorMessage name="answerC" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdD} className={css.label}>
                        Answer option D
                    </label>
                    <Field name="answerD" id={answerIdD} className={css.field} />
                    <ErrorMessage name="answerD" component="span" className={css.error} />
                </div>
                <button className={css.button} type="submit">
                    Add Questions
                </button>
            </Form>
        </Formik>
    );
}
