const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What are your company intials?',
        name:'initials',
        default: 'AAA',
    },
    {
        type: 'input',
        name: 'initials_color',
        message : 'What color would you like to make the intials?',
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

.then((data) => {
    //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile('logo.svg', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
