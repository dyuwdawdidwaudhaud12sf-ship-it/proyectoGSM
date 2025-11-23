const express = require('express')
const cors = require('cors')
const login = require('./services/login')
const items = require('./services/items');  
const port  = 3030

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(cors())

app.get('/', function (req, res) {
    res.json({message: 'Custom message!'})
})

app.get('/login', async function(req, res, next) {
    console.log(req.query)
    console.log(req.query.user)
    console.log(req.query.password)
    try {
        res.json(await login.getUserData(req.query.user, req.query.password))
    } catch (err) {
        console.error(`Error while getting data `, err.message);
        next(err);
    }
})

app.get('/insertar', async function(req, res, next) {
    console.log(req.query); 
    console.log(req.query.nombre); 
    console.log(req.query.marca);  
    console.log(req.query.tipo);   
    console.log(req.query.precio); 

    try {
        res.json(await items.insertData(req, res));
    } catch (err) {
        console.error('Error while inserting data', err.message);
        next(err);  
    }
});

app.get('/obtener', async function(req, res, next) {
    console.log(req.query); 

    try {
        res.json(await items.getData(req, res));
    } catch (err) {
        console.error('Error while getting data', err.message);
        next(err);  
    }
});


app.get('/eliminar', async function(req, res, next) {
    console.log(req.query);  
    console.log(req.query.id);  

    try {
        res.json(await items.deleteData(req, res));
    } catch (err) {
        console.error('Error while deleting data', err.message);
        next(err); 
    }
});

//Iniciamos la API
app.listen(port)
console.log('API escuchando en el puerto ' + port)