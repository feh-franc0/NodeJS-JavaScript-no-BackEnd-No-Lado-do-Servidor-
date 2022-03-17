let express = require('express')
let routes = express.Router();

// routes.get('/users', (req,res) => {
routes.get('/', (req,res) => { //? app.use('/users', routesUsers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name:'Hcode',
            email:'contato@hcode.com.br',
            id:1
        }]
    });

});

// routes.get('/users/admin', (req,res)=>{
routes.get('/admin', (req,res)=>{ //? app.use('/users', routesUsers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[]
    });

})

module.exports = routes;