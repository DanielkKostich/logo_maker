const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What are your company initials?',
        name:'initials',
        default: 'AAA'
    },
    {
        type: 'input',
        name: 'initials_color',
        message : 'What color would you like to make the initials?',
        default : 'black',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like?',
        choices: ['circle', 'triangle','square'],
    }, 
    {
        type: 'input',
        name: 'shape_color',
        message: 'What color do you want to make the shape?',
        default: 'blue',
    },
])
.then(answers => {
    // Process the user's answers
    const initials = answers.initials;
    const initialsColor = answers.initials_color;
    const shape = answers.shape;
    const shapeColor = answers.shape_color;

    // Generate SVG based on the user's choices
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                    <${shape} fill="${shapeColor}">
                      ${shape === 'triangle' ? `<polygon points="50,10 90,90 10,90" />` : ''}
                      ${shape === 'circle' ? `<circle cx="50" cy="50" r="40" />` : ''}
                      ${shape === 'square' ? `<rect x="10" y="10" width="80" height="80" />` : ''}
                    </${shape}>
                    <text x="50" y="60" text-anchor="middle" fill="${initialsColor}">${initials}</text>
                 </svg>`;

    // Save the generated SVG to a file
    fs.writeFileSync('./examples/company_logo.svg', svg);
    console.log('Logo generated successfully!');
})
.catch(error => {
    console.error(error);
});

