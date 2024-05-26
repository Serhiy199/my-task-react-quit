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
                // id: 'id-1',

                titleQuestions: 'Which company created React.js?',
                answerOption: [
                    { answerText: 'A. Google', isCorrect: false },
                    { answerText: 'B. Facebook', isCorrect: true },
                    { answerText: 'C. Microsoft', isCorrect: false },
                    { answerText: 'D. Twitter', isCorrect: false },
                ],
            },
            {
                // id: 'id-2',

                titleQuestions: 'What is JSX in React?',
                answerOption: [
                    { answerText: 'JavaScript XML', isCorrect: true },
                    { answerText: 'JavaScript Extension', isCorrect: false },
                    { answerText: 'JavaScript eXample', isCorrect: false },
                    { answerText: 'JavaScript eXperience', isCorrect: false },
                ],
            },
            {
                // id: 'id-3',

                titleQuestions: 'Which command is used to create a new React project?',
                answerOption: [
                    { answerText: 'npx create-react-app', isCorrect: true },
                    { answerText: 'npm init react-app', isCorrect: false },
                    { answerText: 'npm create-react-app', isCorrect: false },
                    { answerText: 'npx init react-app', isCorrect: false },
                ],
            },
            {
                // id: 'id-4',

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
                titleQuestions: 'How to create a state in a class component in React?',
                answerOption: [
                    { answerText: 'setState({})', isCorrect: false },
                    { answerText: 'state = {}', isCorrect: false },
                    { answerText: 'this.setState({})', isCorrect: false },
                    { answerText: 'this.state = {}', isCorrect: true },
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
                titleQuestions: 'How to create a state in a class component in React?',
                answerOption: [
                    { answerText: 'setState({})', isCorrect: false },
                    { answerText: 'state = {}', isCorrect: false },
                    { answerText: 'this.setState({})', isCorrect: false },
                    { answerText: 'this.state = {}', isCorrect: true },
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
        ],
    },
    {
        id: 'id-4',
        title: 'Quiz JavaScript',
        questions: [
            {
                // id: 'id-1',

                titleQuestions: 'Which company created React.js?',
                answerOption: [
                    { answerText: 'A. Google', isCorrect: false },
                    { answerText: 'B. Facebook', isCorrect: true },
                    { answerText: 'C. Microsoft', isCorrect: false },
                    { answerText: 'D. Twitter', isCorrect: false },
                ],
            },
            {
                // id: 'id-2',

                titleQuestions: 'What is JSX in React?',
                answerOption: [
                    { answerText: 'JavaScript XML', isCorrect: true },
                    { answerText: 'JavaScript Extension', isCorrect: false },
                    { answerText: 'JavaScript eXample', isCorrect: false },
                    { answerText: 'JavaScript eXperience', isCorrect: false },
                ],
            },
            {
                // id: 'id-3',

                titleQuestions: 'Which command is used to create a new React project?',
                answerOption: [
                    { answerText: 'npx create-react-app', isCorrect: true },
                    { answerText: 'npm init react-app', isCorrect: false },
                    { answerText: 'npm create-react-app', isCorrect: false },
                    { answerText: 'npx init react-app', isCorrect: false },
                ],
            },
            {
                // id: 'id-4',

                titleQuestions: 'What is a component in React?',
                answerOption: [
                    { answerText: 'A function or class that returns HTML', isCorrect: true },
                    { answerText: 'Data storage module', isCorrect: false },
                    { answerText: 'Function for handling events', isCorrect: false },
                    { answerText: 'Library for state management', isCorrect: false },
                ],
            },
            {
                // id: 'id-5',

                titleQuestions: 'How to create a state in a class component in React?',
                answerOption: [
                    { answerText: 'setState({})', isCorrect: false },
                    { answerText: 'state = {}', isCorrect: false },
                    { answerText: 'this.setState({})', isCorrect: false },
                    { answerText: 'this.state = {}', isCorrect: true },
                ],
                // option1: 'setState({})',
                // option2: 'state = {}',
                // option3: 'this.setState({})',
                // option4: 'this.state = {}',
                // ans: 4,
            },
        ],
    },
];
