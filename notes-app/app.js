const getNotes = require("./notes.js");
const msg = getNotes()
console.log(msg)

const validator = require('validator')
console.log(validator.isEmail('leon71314@gmail.com'))
console.log(validator.isEmail('gmail.com'))
console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('mead'))

const chalk = require('chalk')
console.log(chalk.green.bgRed.bold.inverse("Success!"))