const crypto = require('crypto');
const fs = require('fs');
/*Natalya Kuznetsova*/
console.log(crypto.publicDecrypt(fs.readFileSync('./key'), fs.readFileSync('./secret')).toString());