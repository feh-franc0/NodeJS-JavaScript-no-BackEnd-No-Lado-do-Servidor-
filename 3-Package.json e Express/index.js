const express = require('express');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();

app.use(routesIndex);
app.use('/users', routesUsers); //* as rotas de users começam com /users

app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');

})