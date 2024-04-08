// Importamos express y hanblebars
const express = require('express');
const exphbs = require('express-handlebars');
// Instanciamos express
const app = express();
// Creamos la variable PORT para configurar el puerto en el que se ejecutará el servidor
const PORT = 3000;

// Definimos handlebars como motor de plantillas
app.set("view engine", "handlebars");

// Configuramos el motor de plantillas
app.engine('handlebars', exphbs.engine({
    extname: '.handlebars', // Extensiones de los archivos de plantillas
    defaultLayout: 'main', // Plantilla principal
    layoutsDir: __dirname + '/views', // Directorio de las plantillas principales
    partialsDir: __dirname + '/views/partials' // Directorio de los partials
}));

// Definiciones de Rutas:
// Definimos rutas de bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// Definimos ruta de jquery
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
// Definimos la ruta de los archivos estáticos para imágenes
app.use(express.static(__dirname + "/img"));
// Definimos la ruta de los archivos estáticos para frontend
app.use("/front", express.static(__dirname + "/frontend"));

// Creamos la ruta raiz y su funcion a ejecutar
app.get("/", function (req, res) {
    // Respuesta de la ruta con uso del metodo render
    res.render("main", {
        layout: "main",
        // Creamos el arreglo productos para ser utilizado por los partials
        productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
    });
});

// Levantamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});