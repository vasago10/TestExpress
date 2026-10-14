//Test del modelo user  probar la lógica de user.js de forma aislada

//importamos otros archivos como User y app,
//supertest mongoose para usar el esquema.y mongomemoryserver q es una base de datros en local de mongo para pruebas de test

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('./app');
const User = require('./user');

let mongoServer;//declaramos una variable mongoServerpara usarla despues y q no sea cosnt para si la tenemos q dar otro valor no falle

beforeAll (async () => {//antes de nada un async con funcion flecha 
  mongoServer = await MongoMemoryServer.create();//mongoServer va a decir un await q cree 
  await mongoose.connect(mongoServer.getUri());//una conexion de mongoose
}, 60000);   // 60s es el tiempo maximo para crear la conecxion y q se descargue los archivos necesario pjk me da fallo si pongo menos !!!!!preguntar porque!!!

afterEach (async () => {//con el aftereach es como despues de cada vez q  y aqui se usa para borrar los User
  await User.deleteMany();
}, 60000);//tiempo maximo 60 segundos para hacerlo

afterAll (async () => {//after all o despues q todo se haga  
  await mongoose.connection.dropDatabase();//se hara un drop de la bdd
  await mongoose.connection.close();//se cerrara la conexion importante para qu  no consuma recursos
  await mongoServer.stop();//se cerrara el servidor
}, 60000);//tioempo para hacerl otodo 60 segundos maximo

describe('POST /api/users', () => { //se define un bloque de test para la ruta POST /api/users
  it('creates a new user', async () => {//con it definimos un test unitario q debe hacer... y es asyncrono
    const newUser = { name: 'John Doe', email: 'john@example.com' };//creamosun nuevo usuario llamado newUser usando el squema de mongo
    const response = await request(app).post('/api/users').send(newUser);//esto se lee la respuesta es un await q sera una req a app con un post a la ruta api/users
    // y enviamos el newUser
    expect(response.statusCode).toBe(201);// espero q la response sea un stratus code de 200
    expect(response.body.name).toBe(newUser.name);//comparamos exactamente osea q esperamos q la respuesta del body sea el name q sea igual q el nombre del newUser sino
            //coincide el test fallara
  });
});

describe('GET /api/users', () => {//se define un bloque de test para la ruta get /api/users
  it('fetches all users', async () => {//con it definimos un test unitario q debe hacer... y es asyncrono

    await User.create({ name: 'Alice', email: 'alice@example.com' });//creamos el alice con el email tal y lo metemos en User
    const response = await request(app).get('/api/users');//la respuesta sera unawait q sera una req a app con un get de la api/users
    expect(response.statusCode).toBe(200);// espero q la response sea un stratus code de 200
    expect(response.body.length).toBe(1);//esperamos q la longitud en el body sea 1 (para evitar duplicidades ose q no este uno igual ya antes)
  });
});

describe('User API Functional Test', () => {//se define un bloque de test para la ruta get /api/users
  it('should create and fetch(obtener) a user', async () => {//con it definimos un test unitario q debe hacer... y es asyncrono

    const userData = { name: 'Juan', email: 'juan@example.com' };//creamos el user juan con email tal y lo guardamosen userData 
    const createResponse = await request(app).post('/api/users').send(userData);//esto se lee la respuesta es un await q sera una req a app con un post a la ruta api/users
                                                                                // y enviamos el createResponse
    expect(createResponse.statusCode).toBe(201);// espero q la response sea un stratus code de 201

    const fetchResponse = await request(app).get('/api/users');//la respuesta es un await q sera una req a app con un get a la ruta api/users
    expect(fetchResponse.statusCode).toBe(200); // esperamos q la response sea un stratus code de 200
    expect(fetchResponse.body[0].email).toBe(userData.email);//esperamos q la respuesta en el body en la posicion 0 sea un email q sea igual al email de userData
    // si no coincide  falla el test
  });
});