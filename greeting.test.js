//un test de saludo o greeting
//para probar la ruta /greeting
//importamos el supertest y la app del archivo de la ruta app
const request = require('supertest');
const app = require('./app');

describe('TDD for Greeting Endpoint', () => {//se define un bloque para ls tet de la ruta /api/greeting
  it('should return a greeting message', async () => {//con it definimos un tesy unitario q debe hacer... y es asyncrono
    const response = await request(app).get('/api/greeting');//la response es una proimesa a al api/greeting con un get 
    expect(response.statusCode).toBe(200);//se espèra q la respuesta sea un 200
    expect(response.text).toBe('Greeting');//se espera(osea q coincida)q el text sea Greeting para q pase el test sino coincide fallara
  });
});