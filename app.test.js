//Test de la app y de los endpoints

//importamos libreria supertest y la app de express
const request = require('supertest');
const app = require('./app');


describe('GET /api/hello', () => {//agrupamos los test para el endpoitn GET /api/hello
  it('responds with Hello World', async () => { //con it definimos un tesy unitario q debe hacer...
    const response = await request(app).get('/api/hello');//la respuesta  debe ser un await q sera una req a app con un get a la ruta api/hello
    expect(response.statusCode).toBe(200);//se espera q la respuesta en status code  sea un 200
    expect(response.body.message).toBe('Hello World'); // se espera q la respuesta en el body sea un mensaje  q sea HEllo world
  });
});

describe('POST /api/echo', () => {//se define un bloque de test para ola ruta postapiecho
  it('responds with the same message', async () => {//con it definimos un tesy unitario q debe hacer... y es asyncrono
    const message = 'Test Message';//el mensage sera Test message
    const response = await request(app).post('/api/echo').send({ message });//la respuesta  debe ser un await q sera una req a app con un post a la ruta api/echo
    expect(response.statusCode).toBe(200);//se espera q la respuesta en un status copde sea un 200 
    expect(response.body.message).toBe(message);//se espera q la respuesta en el body sea un message q sea  message
  });
});
//Prueba para que falle
describe('TDD for Greeting Endpoint', () => { //bloque de test para el endpoint GET /api/grreting 
  it('should return a greeting message', async () => {// el test debde devolver un greeting message y sera asyncrono
    const response = await request(app).get('/api/greeting');//la respuesta hace una peticion get a la app con la ruta api/greeting
    expect(response.statusCode).toBe(200);// se espera q el status code sea 200 osea copmo en los anteriores 
    expect(response.text).toBe('Greeting');//se espera q en el response el text sea greeting   //osea q coincida si no lo es falla, si lo es pasaara 
  });
});