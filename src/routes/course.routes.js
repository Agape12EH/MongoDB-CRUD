//import { Router } from "express";: Importa la clase Router del paquete express. La clase Router se utiliza para definir rutas en una aplicación Express
//import courseController from "../Controllers/CourseController.js";: Importa un módulo courseController que contiene funciones para manejar las operaciones CRUD relacionadas con los cursos.
//const router = new Router();: Crea una nueva instancia de Router. Esto se utiliza para definir y organizar rutas en la aplicación.
//Definición de rutas:
//router.get("/", courseController.getAll);: Define una ruta HTTP GET para la raíz ("/") que llama a la función getAll del controlador de cursos cuando se recibe una solicitud en esa ruta.
//router.get("/:id", courseController.getOne);: Define una ruta HTTP GET que espera un parámetro id en la URL y llama a la función getOne del controlador de cursos.
//router.post("/", courseController.create);: Define una ruta HTTP POST en la raíz ("/") que llama a la función create del controlador de cursos.
//router.put("/:id", courseController.update);: Define una ruta HTTP PUT que espera un parámetro id en la URL y llama a la función update del controlador de cursos.
//router.delete("/:id", courseController.destroy);: Define una ruta HTTP DELETE que espera un parámetro id en la URL y llama a la función destroy del controlador de cursos.
//export default router;: Exporta el router para que pueda ser utilizado en otros archivos. Esto es común en la estructura de una aplicación Express modular.

import { Router } from "express";
import courseController from "../Controllers/CourseController.js";

const router = new Router();

router.get("/", courseController.getAll);
router.get("/:id", courseController.getOne);
router.post("/", courseController.create);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.destroy);

export default router;
