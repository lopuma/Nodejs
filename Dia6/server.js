// Crear servidor con el modulo HTTP

const express = require('express');
const mysql = require('mysql');
const url = require('url');

const app = express();

const port = 3000;

app.get("/", (req, res) =>{
    res.send(`Quieres entrar a la API http://localhost:${port}/api`);
});

app.get("/api", (req, res) =>{
    res.send("HOLA MUNDO");
});

app.use(function(req, res){
    res.end("Not FOUND");
});

app.listen(port, () =>{
    console.log(`Server in port ${port}, http://localhost:${port}`)
})