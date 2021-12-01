//bajar node a la pc
//npm init npm install npm install express

const path = require('path');
const express = require ("express");
const app = express ();
const methodOverride = require('method-override');
const fs = require("fs") // fileSync (readFileSync(), Es un método que trae el paquete nativo file system que nos permite recuperar datos de un archivo para poder usarlos.
                        //Para poder decodificar los datos que el método devuelve es fundamental pasarle un segundo parámetro aclarando el tipo de encoding. "utf-8" ej.

const session = require('express-session'); //npm instal express-session
const auth = require('./src/middlewares/auth');

const cookieParser = require('cookie-parser');

const cors = require ("cors");

app.use(cors())

// Configuro el directorio de recursos estáticos
app.use(express.static('public'));
app.set('view engine', 'ejs'); //npm install ejs
app.set('views', 'src/views');

// Sessiones y cookies
app.use(session({
    secret: 'Mi sitio',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
  }));
  app.use(auth);
  //////

  // Formularios
app.use(express.urlencoded({ extended: false }));//De esta forma le estamos aclarando a la aplicación que todo aquello que llegue desde un formulario, queremos capturarlo en forma de objeto literal.
app.use(express.json());                         // Y a su vez, tener la posibilidad de convertir esa información en un formato JSON, en caso de necesitarlo
app.use(methodOverride('_method'));             //Para poder sobreescribir el método original y poder implementar los métodos PUT o DELETE



//Rutas
//Main
const mainRouter = require('./src/routes/mainRouter');
app.use('/', mainRouter);



//Not found
app.use((req,res,next)=> {
    res.status(404).render("404")
  });
  
//Servidor
app.listen(3000, () => {
    console.log("Servidor en puerto 3000")
})
