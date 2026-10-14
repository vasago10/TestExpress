//para levanta o arrancar el servidor



//se importa la app de la ruta /app

const app = require('./app');
//
app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));//levatnar servidor en puerto 3000 y q envie el texto servidor en el puerto 3000