// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
return questions.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like to title your ReadMe?',
        },

        {
            type: 'input',
            name: 'Table of Contents',
            message: "What all goes in your table of content?",
        },
        {
            type: 'input',
            name: 'Description',
            message: "How would you describe your work?",
        },
        {
            type: 'input',
            name: 'Installation',
            message: "What installations did you have to go through?",
        },
        {
            type: 'input',
            name: 'Usage',
            message: "How do you use the application?",
        },
        {
            type: 'input',
            name: 'Contributing',
            message: "What are the contributions?",
        },
        {
            type: 'input',
            name: 'Tests',
            message: "What test did you run in order to get this ourcome?",
        },
        
    ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
