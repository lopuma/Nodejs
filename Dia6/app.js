const fs = require('fs');

let lista = fs.readdirSync(__dirname, {withFileTypes: true});

console.log(lista);

