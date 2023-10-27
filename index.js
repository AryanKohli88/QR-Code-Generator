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
    console.log(answers);
    const url = answers.URL;
    console.log("ot url");
    var img = qr.image(url);
    console.log("ot variable img");
    img.pipe(fs.createWriteStream("qr_img.png"));

  })
  .catch((error) => { if (error.isTtyError) { } else { } });