import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './QuizForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(9, 'Too short!').max(12, 'Too long!').required('Required'),
});

const initialValues = {
    name: '',
    number: '',
};

export default function QuizForm({ onContact }) {
    const quizTitleId = useId();
    const questionsId = useId();
    const answerIdA = useId();
    const answerIdB = useId();
    const answerIdC = useId();
    const answerIdD = useId();

    const handleSubmit = ({ name, number }, actions) => {
        onContact({ id: nanoid(), name, number });
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
                    <Field name="name" id={quizTitleId} className={css.field} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={questionsId} className={css.label}>
                        Questions
                    </label>
                    <Field name="number" id={questionsId} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdA} className={css.label}>
                        Answer option A
                    </label>
                    <Field name="number" id={answerIdA} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdB} className={css.label}>
                        Answer option B
                    </label>
                    <Field name="number" id={answerIdB} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdC} className={css.label}>
                        Answer option C
                    </label>
                    <Field name="number" id={answerIdC} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={answerIdD} className={css.label}>
                        Answer option D
                    </label>
                    <Field name="number" id={answerIdD} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <button className={css.button} type="submit">
                    Add Questions
                </button>
            </Form>
        </Formik>
    );
}
