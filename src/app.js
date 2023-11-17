//import path from "path";: Importa el módulo path para trabajar con rutas de archivos.

//import express from "express";: Importa el framework Express.

//import { engine } from "express-handlebars";: Importa el motor de vistas Handlebars para Express.

//import { getDirname } from "./helpers/utils.js";: Importa la función getDirname desde un archivo de utilidades llamado utils.js. Esta función probablemente se utiliza para obtener el directorio actual del script en ejecución.

//import { indexRouter, courseRouter, taskRouter } from "./routes/index.js";: Importa los routers definidos en el archivo index.js dentro de la carpeta routes. Estos routers probablemente contienen las definiciones de las rutas para diferentes partes de la aplicación.

//const app = express();: Crea una instancia de la aplicación Express.

//app.use(express.json());: Configura Express para decodificar los datos JSON en las solicitudes.

//app.use(express.urlencoded({ extended: true }));: Configura Express para decodificar los datos codificados en formato URL en las solicitudes.
//Configuración de vistas:

//app.set("views", path.join(getDirname(import.meta.url), "views"));: Configura el directorio de vistas para la aplicación. Utiliza la función getDirname para obtener el directorio actual del script y luego lo combina con el subdirectorio "views".

//app.engine(".hbs", engine({ extname: ".hbs" }));: Configura el motor de vistas Handlebars con Express y especifica la extensión de los archivos de plantilla como ".hbs".

//app.set("view engine", ".hbs");: Configura Express para usar el motor de vistas Handlebars.

//Configuración de rutas:

//app.use("/", indexRouter);: Utiliza el router indexRouter para las rutas raíz ("/").
//app.use("/courses", courseRouter);: Utiliza el router courseRouter para las rutas que comienzan con "/courses".
//app.use("/tasks", taskRouter);: Utiliza el router taskRouter para las rutas que comienzan con "/tasks".
//export default app;: Exporta la instancia de la aplicación Express para que pueda ser utilizada en otros archivos.
//import.meta: Es un objeto especial proporcionado por el entorno de ejecución de módulos ESM. Contiene información sobre el módulo actual.

//import.meta.url: Especifica la URL del módulo actual. Esta URL es una cadena que representa la ubicación del archivo del módulo en el sistema de archivos o en una red.

import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { getDirname } from "./helpers/utils.js";
import { indexRouter, courseRouter, taskRouter } from "./routes/index.js";

// Create app instance
const app = express();

// Decode JSON data
app.use(express.json());

// Decode Form URL Encoded data
app.use(express.urlencoded({ extended: true }));

// Views
app.set("views", path.join(getDirname(import.meta.url), "views"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Routes
app.use("/", indexRouter);
app.use("/courses", courseRouter);
app.use("/tasks", taskRouter);

export default app;
