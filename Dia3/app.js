// Crear servidor con el modulo HTTP

const http = require('http');
const mysql = require('mysql');
const url = require('url');

const app = http.createServer((req, res) =>{
    console.log(req.url);
    console.log(req.method);
    console.log(res.statusCode);

    const path = url.parse(req.url, true);
    var data = {
        name: "Jose",
        fullname: "Cedeño",
        age: 32
    }

    var err = {
        error : "Not found",
        status : "404"
    }

    if(path.pathname === '/api'){
        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(data));
    }

    if(path.pathname === '/*'){
        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(err));
    }

});

database = {
    host : 'localhost',
    user : 'root',
    password : 'Dopracau4000lopo',
    database : 'cosas',
}

const conexion = mysql.createConnection(database);

conexion.connect((error)=>{
    if (error){
        throw error;
    }
    console.log("Conected database");
})

conexion.query("SELECT * FROM geo_municipios", (err, result) =>{
    if (err){
        throw err;
    }
    // console.log(result);
})
const port = 3000;

app.listen(port, () =>{
    console.log(`Server in port ${port}, http://localhost:${port}`)
})