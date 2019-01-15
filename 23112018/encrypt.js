const crypto = require('crypto');
const fs = require('fs');
/*Natalya Kuznetsova*/
const result = crypto.publicEncrypt(fs.readFileSync("./key"), fs.readFileSync("./decrypt.js"));
fs.writeFile('./result.txt', result, () => {});