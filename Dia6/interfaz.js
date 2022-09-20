console.clear();
const interfaz = require("readline");

var data = interfaz.createInterface({
    input: process.stdin, 
    output: process.stdout
});



    data.question("Ingresa tu edad : ", (res) =>{
        console.log(res);
    });

