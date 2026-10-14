//archivo princiapl en torno a el gira todo
//definir la app, middleware y rutas
//configura endpoint y express



const express = require('express');// esto es para crear la app de express
const User = require('./user');        // importa el modelo 

const app = express();// crea la app de express
app.use(express.json());// middleware para pasar a JSON

// Endpoint get con mensaje hello world
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});


//endpoint post para recibir un mensaje y devolverlo
app.post('/api/echo', (req, res) => { //endpoint post para recibir un mensaje y devolverlo
  const { message } = req.body;// con req.body lo q hacemos es buscar el mensaje que nos llega en el body 
  res.status(200).json({ message });//devolvemos el mensaje que nos llega en el body en formato json con status 200
});
//endpoint get para devolver un mensaje de saludo
app.get('/api/greeting', (req, res) => {//esto se lee como: cuando se haga un get a la ruta /api/greeting, ejecuta la funcion que recibe req y res
  res.status(200).send('Greeting');//devuelve un mensaje 200 con greeting
});

// e ndpoints de usuarios
app.post('/api/users', async (req, res) => {//asincrona esto dice que cuando se haga un post a la ruta /api/users, ejecuta la funcion que recibe req y res
  const { name, email } = req.body;//esto dice que de req.body, extrae name y email
  try {//usamos un try catch para erores
    const user = new User({ name, email });//en la const user creamos un nuevo usuario con naem y email
    await user.save();//usamos await y con el metodo save guardamos en la bdd
    res.status(201).json(user); //si todo ok return un 201 con el user en 201
  } catch (error) {//si hay uiun error
    res.status(400).json({ error: error.message });//devolvemos un 400 en json
  }
});
//codigo minimo para superar el test o prueba
app.get('/api/users', async (req, res) => {//asincrona cuando se haga un get para obtener usuarios  ejecuta funcion con parametros req res
  const users = await User.find();//buscamos en User y guardamos en la const 
  res.status(200).json(users);//si es ok devolvemos un 200 con los users en json
});

module.exports = app;//esto es para exportar la app y poder usarla en otros archivos, como en los tests.
















/*
 Regla mental para recordar
server.js = "enciende el motor"

app.js = "el motor" (rutas + middleware)

user.js = "las piezas internas" (lógica)

*.test.js = "los inspectores" que verifican cada parte

*/