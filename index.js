import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {  
        "message": "Typpe your URL",
        "name": "URL"
     }
  ])
  .then((answers) => {
    const url = answers.URL;
    var img = qr.image(url);
    img.pipe(fs.createWriteStream("qr_img.png"));

  })
  .catch((error) => { if (error.isTtyError) { } else { } });