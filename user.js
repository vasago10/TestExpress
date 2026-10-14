//creacion del modelo o esquema de creacion de usuarios y su logica

//representar al usuario: esquema, validaciones
//importamos la lbreria mongoose

const mongoose = require('mongoose');

//definimos como sera el esquema de mongoose (el "modelo")
const userSchema = new mongoose.Schema({ //el esquema tendra
  name: { type: String, required: true },//un nombre tipo string q sera requerido
  email: { type: String, required: true, unique: true }//un email q sera un string  q sera requerido y unico
});

const User = mongoose.model('User', userSchema);//esto se lee creamos un modelo de mongoose llamado User con el esquema userSchema que hemos echo antes,
                                                //esto nos permite interactuar con la coleccion de usuarios en la base de datos.

module.exports = User;      //exportamos el modelo User para poder usarlo en otros archivos
