const express = require('express');
const {faker} = require('@faker-js/faker');
 
const app = express();

app.get('/', (req, res)=>{
    const randomName = faker.name.fullName();
    res.end(randomName);
})

app.listen(3002, () =>{
    console.log("Server Listen http://localhost:3002");
})