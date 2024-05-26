import { useRef, useState } from 'react';
import css from './QuizQuestions.module.css';
// import { arrQuiz } from '../../assets/data';

function QuizQuestions({ onSelectedQuiz }) {
    // const [arrQuestions, setArrQuestions] = useState(onSelectedQuiz.questions);
    const arrQuestions = onSelectedQuiz.questions;

    let [indexQuestion, setIndexQuestion] = useState(0);
    let [questions, setQuestions] = useState(arrQuestions[indexQuestion]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    // let Options1 = useRef(null);
    // let Options2 = useRef(null);
    // let Options3 = useRef(null);
    // let Options4 = useRef(null);

    // let optionsArray = [Options1, Options2, Options3, Options4];

    {
        /* import { quizQuestions, Question } from './questions'; */
    }

    {
        /* const [currentQuestion, setCurrentQuestion] = useState(0); 
        const [showScore, setShowScore] = useState(false); */
    }

    const handleAnswerButtonClick = (e, answerOption) => {
        // console.log(e);
        // obj = e.target;
        if (lock === false) {
            if (!answerOption.isCorrect) {
                e.target.classList.add(css.wrong);
                setLock(true);
                // const findIndex = arrQuestions.indexOf(answerOption.isCorrect === true);
                // console.log(findIndex);
            } else {
                setScore(score + 1);
                e.target.classList.add(css.correct);
                setLock(true);
                // answerOption[questions.ans - 1].current.classList.add(css.correct);
            }

            // if (isCorrect) {
            //     setScore(score + 1);
            //     e.target.classList.add(css.correct);
            //     setLock(true);
            // } else {
            //     e.target.classList.add(css.wrong);
            //     setLock(true);
            //     // answerOption[questions.ans - 1].current.classList.add(css.correct);
            // }
        }
    };

    // const checkAns = (e, ans) => {
    //     if (lock === false) {
    //         if (questions.ans === ans) {
    //             e.target.classList.add(css.correct);
    //             setLock(true);
    //             setScore(prev => prev + 1);
    //         } else {
    //             e.target.classList.add(css.wrong);
    //             setLock(true);
    //             optionsArray[questions.ans - 1].current.classList.add(css.correct);
    //         }
    //     }
    // };

    const next = () => {
        const nextQuestion = indexQuestion + 1;
        if (nextQuestion < arrQuestions.length) {
            setIndexQuestion(nextQuestion);
            setQuestions(arrQuestions[indexQuestion]);
        } else {
            setResult(true);
        }

        // if (lock === true) {
        //     console.log(indexQuestion);
        //     console.log(arrQuestions.length);
        //     if (indexQuestion === arrQuestions.length - 1) {
        //         setResult(true);
        //         return;
        //     }

        //     setIndexQuestion(indexQuestion + 1);
        //     setQuestions(arrQuestions[indexQuestion]);
        //     setLock(false);
        //     // optionsArray.map(option => {
        //     //     // option.current.classList.remove(css.wrong);
        //     //     // option.current.classList.remove(css.correct);
        //     //     return null;
        //     // });
        // }
    };

    const reset = () => {
        setIndexQuestion(0);
        setQuestions(arrQuestions[indexQuestion]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <div className={css.container}>
            <h1>{onSelectedQuiz.title}</h1>
            <hr className={css.hr} />
            {result ? (
                <>
                    <h2>
                        You Score {score} out of {arrQuestions.length} questions
                    </h2>
                    <button className={css.button} onClick={reset}>
                        Reset
                    </button>
                </>
            ) : (
                <>
                    <h2 className={css.questionsTitel}>
                        {arrQuestions[indexQuestion].titleQuestions}
                    </h2>
                    <ul>
                        {arrQuestions[indexQuestion].answerOption.map(
                            (answerOption, index = Math.random()) => (
                                <li
                                    key={index}
                                    className={css.listAnswers}
                                    onClick={e => handleAnswerButtonClick(e, answerOption)}
                                >
                                    {answerOption.answerText}
                                </li>
                            )
                        )}

                        {/* <li
                            ref={Options1}
                            className={css.listAnswers}
                            onClick={e => {
                                checkAns(e, 1);
                            }}
                        >
                            A. {questions.option1}
                        </li>
                        <li
                            ref={Options2}
                            className={css.listAnswers}
                            onClick={e => {
                                checkAns(e, 2);
                            }}
                        >
                            B. {questions.option2}
                        </li>
                        <li
                            ref={Options3}
                            className={css.listAnswers}
                            onClick={e => {
                                checkAns(e, 3);
                            }}
                        >
                            C. {questions.option3}
                        </li>
                        <li
                            ref={Options4}
                            className={css.listAnswers}
                            onClick={e => {
                                checkAns(e, 4);
                            }}
                        >
                            D. {questions.option4}
                        </li> */}
                    </ul>
                    <button className={css.button} onClick={next}>
                        Next
                    </button>
                    <div className={css.index}>
                        {indexQuestion + 1} of {arrQuestions.length} questions
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizQuestions;
