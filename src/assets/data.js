export const arrQuiz = [
    {
        id: 'id-1',
        title: 'Quiz React',
        questions: [
            {
                titleQuestions: 'Which company created React.js?',
                answerOption: [
                    { answerText: 'A. Google', isCorrect: false },
                    { answerText: 'B. Facebook', isCorrect: true },
                    { answerText: 'C. Microsoft', isCorrect: false },
                    { answerText: 'D. Twitter', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is JSX in React?',
                answerOption: [
                    { answerText: 'JavaScript XML', isCorrect: true },
                    { answerText: 'JavaScript Extension', isCorrect: false },
                    { answerText: 'JavaScript eXample', isCorrect: false },
                    { answerText: 'JavaScript eXperience', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Which command is used to create a new React project?',
                answerOption: [
                    { answerText: 'npx create-react-app', isCorrect: true },
                    { answerText: 'npm init react-app', isCorrect: false },
                    { answerText: 'npm create-react-app', isCorrect: false },
                    { answerText: 'npx init react-app', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is a component in React?',
                answerOption: [
                    { answerText: 'A function or class that returns HTML', isCorrect: true },
                    { answerText: 'Data storage module', isCorrect: false },
                    { answerText: 'Function for handling events', isCorrect: false },
                    { answerText: 'Library for state management', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'How to create a state in a class component in React?',
                answerOption: [
                    { answerText: 'setState({})', isCorrect: false },
                    { answerText: 'state = {}', isCorrect: false },
                    { answerText: 'this.setState({})', isCorrect: false },
                    { answerText: 'this.state = {}', isCorrect: true },
                ],
            },
            {
                titleQuestions: 'What is React?',
                answerOption: [
                    {
                        answerText: 'JavaScript library for building interfaces',
                        isCorrect: true,
                    },
                    { answerText: 'CSS framework', isCorrect: false },
                    { answerText: 'HTML preprocessor', isCorrect: false },
                    { answerText: 'DBMS', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Which function is used to create components?',
                answerOption: [
                    { answerText: 'createComponent', isCorrect: false },
                    { answerText: 'component', isCorrect: false },
                    { answerText: 'createElement', isCorrect: true },
                    { answerText: 'createNode', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is state in React?',
                answerOption: [
                    { answerText: 'Changeable', isCorrect: false },
                    { answerText: 'Constant value', isCorrect: false },
                    { answerText: 'Component state storage', isCorrect: true },
                    { answerText: 'Class method', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What are props in React?',
                answerOption: [
                    { answerText: 'Function arguments', isCorrect: false },
                    { answerText: 'External data for the component', isCorrect: true },
                    { answerText: 'Internal data of the component', isCorrect: false },
                    { answerText: 'Component methods', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is Virtual DOM?',
                answerOption: [
                    { answerText: 'A copy of the real DOM', isCorrect: true },
                    { answerText: 'Synchronization with the real DOM', isCorrect: false },
                    { answerText: 'Persistent DOM', isCorrect: false },
                    { answerText: 'Rendering method', isCorrect: false },
                ],
            },
        ],
    },
    {
        id: 'id-2',
        title: 'Quiz Vue',
        questions: [
            {
                titleQuestions: 'What is Vue.js?',
                answerOption: [
                    {
                        answerText: 'JavaScript library for building interfaces',
                        isCorrect: true,
                    },
                    { answerText: 'CSS framework', isCorrect: false },
                    { answerText: 'HTML preprocessor', isCorrect: false },
                    { answerText: 'DBMS', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Who created Vue.js?',
                answerOption: [
                    { answerText: 'Evan Yu', isCorrect: true },
                    { answerText: 'Ryan Dahl', isCorrect: false },
                    { answerText: 'Jordan Walke', isCorrect: false },
                    { answerText: 'Thomas Finch', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is a main object in Vue.js?',
                answerOption: [
                    { answerText: 'Vue instance', isCorrect: true },
                    { answerText: 'Component', isCorrect: false },
                    { answerText: 'Directive', isCorrect: false },
                    { answerText: 'Mixin', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'How are properties declared in Vue components?',
                answerOption: [
                    { answerText: 'data', isCorrect: true },
                    { answerText: 'state', isCorrect: false },
                    { answerText: 'properties', isCorrect: false },
                    { answerText: 'variables', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Which directive is used to display a list of items in Vue?',
                answerOption: [
                    { answerText: 'v-for', isCorrect: true },
                    { answerText: 'v-if', isCorrect: false },
                    { answerText: 'v-bind', isCorrect: false },
                    { answerText: 'v-show', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is Vue Router?',
                answerOption: [
                    {
                        answerText: 'A library for managing in-app routing',
                        isCorrect: true,
                    },
                    { answerText: 'Condition management service', isCorrect: false },
                    { answerText: 'Component testing tool', isCorrect: false },
                    { answerText: 'A framework for working with APIs', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What method is used to pass data from parent to child in Vue?',
                answerOption: [
                    { answerText: 'props', isCorrect: true },
                    { answerText: 'state', isCorrect: false },
                    { answerText: 'events', isCorrect: false },
                    { answerText: 'methods', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is Vuex?',
                answerOption: [
                    {
                        answerText: 'A library for state management in Vue applications',
                        isCorrect: true,
                    },
                    { answerText: 'A tool for styling components', isCorrect: false },
                    { answerText: 'Module for working with forms', isCorrect: false },
                    { answerText: 'A library for working with server requests', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'How does Vue use two-way data binding?',
                answerOption: [
                    { answerText: 'v-model', isCorrect: true },
                    { answerText: 'v-bind', isCorrect: false },
                    { answerText: 'v-for', isCorrect: false },
                    { answerText: 'v-if', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What are directives in Vue.js?',
                answerOption: [
                    {
                        answerText: 'Special attributes that add functionality to elements',
                        isCorrect: true,
                    },
                    { answerText: 'Methods for working with the API', isCorrect: false },
                    { answerText: 'Tools for testing', isCorrect: false },
                    { answerText: 'Plugins for styling', isCorrect: false },
                ],
            },
        ],
    },
    {
        id: 'id-3',
        title: 'Quiz Angular',
        questions: [
            {
                titleQuestions: 'Що таке Angular?',
                answerOption: [
                    {
                        answerText: 'JavaScript library for building interfaces',
                        isCorrect: true,
                    },
                    { answerText: 'CSS framework', isCorrect: false },
                    { answerText: 'HTML preprocessor', isCorrect: false },
                    { answerText: 'DBMS', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Who developed Angular?',
                answerOption: [
                    { answerText: 'Google', isCorrect: true },
                    { answerText: 'Facebook', isCorrect: false },
                    { answerText: 'Microsoft', isCorrect: false },
                    { answerText: 'Twitter', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is Angular CLI?',
                answerOption: [
                    { answerText: 'Command line interface for Angular', isCorrect: true },
                    { answerText: 'A library for state management', isCorrect: false },
                    { answerText: 'A tool for testing', isCorrect: false },
                    { answerText: 'Interface for customizing styles', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is a Component in Angular?',
                answerOption: [
                    {
                        answerText: 'The basic building block of an Angular application',
                        isCorrect: true,
                    },
                    { answerText: 'State management module', isCorrect: false },
                    { answerText: 'Component testing tool', isCorrect: false },
                    { answerText: 'Function for managing routing', isCorrect: false },
                ],
            },
            {
                titleQuestions:
                    'What is the name of the decorator for declaring a component in Angular?',
                answerOption: [
                    { answerText: '@Component', isCorrect: true },
                    { answerText: '@NgModule', isCorrect: false },
                    { answerText: '@Injectable', isCorrect: false },
                    { answerText: '@Directive', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is a module in Angular?',
                answerOption: [
                    {
                        answerText:
                            'A collection of related functionality that can be imported into an application',
                        isCorrect: true,
                    },
                    { answerText: 'Function for state management', isCorrect: false },
                    { answerText: 'A tool for testing', isCorrect: false },
                    { answerText: 'A library for styling components', isCorrect: false },
                ],
            },
            {
                titleQuestions:
                    'Which of the following statements is used to create a reactive thread in Angular?',
                answerOption: [
                    { answerText: 'Observable', isCorrect: true },
                    { answerText: 'Promise', isCorrect: false },
                    { answerText: 'Async/Await', isCorrect: false },
                    { answerText: 'Callback', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What are directives in Angular?',
                answerOption: [
                    { answerText: 'Instructions for manipulating the DOM', isCorrect: true },
                    { answerText: 'Functions for state management', isCorrect: false },
                    { answerText: 'Tools for testing', isCorrect: false },
                    { answerText: 'Plugins for styling', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What service is used to work with HTTP requests in Angular?',
                answerOption: [
                    { answerText: 'HttpClient', isCorrect: true },
                    { answerText: 'HttpService', isCorrect: false },
                    { answerText: 'HttpModule', isCorrect: false },
                    { answerText: 'HttpRequest', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is Angular Router?',
                answerOption: [
                    {
                        answerText: 'A library for managing in-app routing',
                        isCorrect: true,
                    },
                    { answerText: 'Condition management service', isCorrect: false },
                    { answerText: 'Component testing tool', isCorrect: false },
                    { answerText: 'A framework for working with APIs', isCorrect: false },
                ],
            },
        ],
    },
    {
        id: 'id-4',
        title: 'Quiz JavaScript',
        questions: [
            {
                titleQuestions: 'What will the following code output: console.log(typeof null)?',
                answerOption: [
                    { answerText: 'object', isCorrect: true },
                    { answerText: 'null', isCorrect: false },
                    { answerText: 'undefined', isCorrect: false },
                    { answerText: 'number', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What method is used to concatenate two or more arrays?',
                answerOption: [
                    { answerText: 'concat', isCorrect: true },
                    { answerText: 'combine', isCorrect: false },
                    { answerText: 'merge', isCorrect: false },
                    { answerText: 'union', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'Which comparison operator checks both value and type?',
                answerOption: [
                    { answerText: '==', isCorrect: false },
                    { answerText: '===', isCorrect: true },
                    { answerText: '!=', isCorrect: false },
                    { answerText: '!==', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'How do you create an object in JavaScript?',
                answerOption: [
                    { answerText: 'let obj = {}', isCorrect: true },
                    { answerText: 'let obj = ()', isCorrect: false },
                    { answerText: 'let obj = []', isCorrect: false },
                    { answerText: 'let obj = <>', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is closure in JavaScript?',
                answerOption: [
                    {
                        answerText:
                            'A function that has access to its external function by lexical environment',
                        isCorrect: true,
                    },
                    { answerText: 'A function that calls itself', isCorrect: false },
                    { answerText: 'A function that executes asynchronously', isCorrect: false },
                    { answerText: 'A function that has no parameters', isCorrect: false },
                ],
            },
            {
                titleQuestions:
                    'What will the following code output: console.log(0.1 + 0.2 === 0.3)?',
                answerOption: [
                    { answerText: 'false', isCorrect: true },
                    { answerText: 'true', isCorrect: false },
                    { answerText: 'undefined', isCorrect: false },
                    { answerText: 'null', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is "this" in JavaScript?',
                answerOption: [
                    { answerText: 'Function execution context', isCorrect: true },
                    { answerText: 'A variable with global visibility', isCorrect: false },
                    { answerText: 'A function that is called automatically', isCorrect: false },
                    {
                        answerText: 'An array that contains the function arguments',
                        isCorrect: false,
                    },
                ],
            },
            {
                titleQuestions: 'What are promises in JavaScript?',
                answerOption: [
                    {
                        answerText: 'An object for tracking asynchronous operations',
                        isCorrect: true,
                    },
                    { answerText: 'A function that is executed synchronously', isCorrect: false },
                    {
                        answerText: 'An array containing the result of an asynchronous operation',
                        isCorrect: false,
                    },
                    { answerText: 'A method for manipulating the DOM', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What will the following code output: console.log([] + [])?',
                answerOption: [
                    { answerText: '""', isCorrect: true },
                    { answerText: '[]', isCorrect: false },
                    { answerText: 'undefined', isCorrect: false },
                    { answerText: 'null', isCorrect: false },
                ],
            },
            {
                titleQuestions: 'What is async/await in JavaScript?',
                answerOption: [
                    { answerText: 'Syntactic sugar for working with promises', isCorrect: true },
                    { answerText: 'Function for working with arrays', isCorrect: false },
                    { answerText: 'A method for manipulating the DOM', isCorrect: false },
                    {
                        answerText: 'A framework for creating server applications',
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
];
