import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {  
        "message": "Typpe your URL",
        "name": "URL"
     }
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var img = qr.image(url);
    img.pipe(require('fs').createWriteStream('your-qr.svg'));

  })
  .catch((error) => { if (error.isTtyError) { } else { } });