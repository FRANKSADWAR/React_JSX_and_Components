// function validateEmail(email){
//     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(String(email).toLowerCase());
// }
// console.log(validateEmail('adwarbilll@gmail.com'));

const validator = require('email-validator');
console.log(validator.validate('namegmail.com'));