//CONTROLADORES DE CURSOS 
import { Course } from "../Models/Course.js";


//const getAll: Define una función llamada getAll.
//async (req, res): Indica que la función es asíncrona y toma dos parámetros, req (objeto de solicitud) y res (objeto de respuesta).
//const courses = await Course.find({});: Utiliza la palabra clave await para esperar que la operación Course.find({}) se complete. Course es un modelo de base de datos, y find({}) busca todos los registros en ese modelo.
//res.json({ courses });: Responde a la solicitud con un objeto JSON que contiene un arreglo de cursos. Este resultado se envía como respuesta.
const getAll = async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
};

//const getOne: Define una función llamada getOne.
//async (req, res): Indica que la función es asíncrona y toma dos parámetros, req (objeto de solicitud) y res (objeto de respuesta).
//const course = await Course.findById(req.params.id);: Utiliza la palabra clave await para esperar que la operación Course.findById(req.params.id) se complete. req.params es un objeto en Express que contiene propiedades asignadas a los "parámetros" de la ruta especificada en la URL o en routes. En este caso, req.params.id se refiere al valor del parámetro con el nombre "id" en la ruta.
//Por ejemplo, si tienes una ruta como "/courses/:id", y alguien hace una solicitud a "/courses/123", entonces req.params.id sería igual a "123". 
//res.json({ course });: Responde a la solicitud con un objeto JSON que contiene la información del curso obtenido.
const getOne = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json({ course });
};

//const create: Define una función llamada create.
//async (req, res): Indica que la función es asíncrona y toma dos parámetros, req (objeto de solicitud) y res (objeto de respuesta).
//const course = Course({ title: req.body.title, category: req.body.category });: Crea un nuevo objeto course utilizando el modelo Course. Este modelo representa una estructura de datos en la base de datos. Los datos del nuevo curso se toman del cuerpo de la solicitud (req.body), específicamente los campos title y category, el body se envia por POST.
//const courseSaved = await course.save();: Utiliza await para esperar a que la operación course.save() se complete. Esto guarda el nuevo curso en la base de datos y devuelve el objeto guardado en la variable courseSaved.
//res.json({ message: "Course created successfully" });: Responde a la solicitud con un objeto JSON que contiene un mensaje indicando que el curso se creó exitosamente.
const create = async (req, res) => {
  const course = Course({ title: req.body.title, category: req.body.category });
  const courseSaved = await course.save();
  res.json({ message: "Course created successfully", courseSaved });
};

//const update: Define una función llamada update.
//async (req, res): Indica que la función es asíncrona y toma dos parámetros, req (objeto de solicitud) y res (objeto de respuesta).
//const course = await Course.findById(req.params.id);: Utiliza await para esperar a que la operación Course.findById(req.params.id) se complete. Esto busca el curso en la base de datos utilizando el identificador único proporcionado en la ruta y lo guarda en la variable course.
//Modificaciones del curso:
//course.title = req.body.title;: Actualiza la propiedad title del objeto course con el valor del campo title en el cuerpo de la solicitud (req.body.title).
//course.category = req.body.category;: Actualiza la propiedad category del objeto course con el valor del campo category en el cuerpo de la solicitud (req.body.category).
//course.save();: Guarda los cambios realizados en el objeto course en la base de datos.
//res.json({ message: "Course updated successfully" });: Responde a la solicitud con un objeto JSON que contiene un mensaje indicando que el curso se actualizó con éxito.
const update = async (req, res) => {
  const course = await Course.findById(req.params.id);

  course.title = req.body.title;
  course.category = req.body.category;
  course.save();

  res.json({ message: "Course updated successfully" });
};

//const destroy: Define una función llamada destroy.
//async (req, res): Indica que la función es asíncrona y toma dos parámetros, req (objeto de solicitud) y res (objeto de respuesta).
//const courseDeleted = await Course.deleteOne({ _id: req.params.id });: Utiliza await para esperar a que la operación Course.deleteOne({ _id: req.params.id }) se complete. Esto busca y elimina el curso de la base de datos utilizando el identificador único proporcionado en la ruta (req.params.id). El resultado de la operación (que incluye información sobre cuántos documentos fueron eliminados) se almacena en courseDeleted.
//res.json({ message: "Course deleted successfully", courseDeleted });: Responde a la solicitud con un objeto JSON que contiene un mensaje indicando que el curso se eliminó con éxito, y también proporciona detalles sobre la operación de eliminación a través de courseDeleted.
const destroy = async (req, res) => {
  const courseDeleted = await Course.deleteOne({ _id: req.params.id });
  res.json({ message: "Course deleted successfully", courseDeleted });
};

//exporta las funciones creadas
export default { getAll, getOne, create, update, destroy };
