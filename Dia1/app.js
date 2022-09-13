// Crear servidor con el modulo HTTP

const http = require('http');
const nodemon = require('nodemon');

const app = http.createServer((req, res) =>{
    console.log(req.url);
    console.log(req.method);
    console.log(res.statusCode);
    res.end("==> HOLA MUNDO");
});

const port = 4001;

app.listen(port, () =>{
    console.log(`Server in port ${port}, http://localhost:${port}`)
})