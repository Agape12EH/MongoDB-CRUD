//import { Schema, model } from "mongoose";: Importa las clases Schema y model del paquete mongoose. Schema se utiliza para definir la estructura del documento, y model se utiliza para crear un modelo basado en esa estructura.
//export const Course = model("Course", new Schema({ title: String, category: String }));: Exporta una constante llamada Course que es el modelo de Mongoose.
//model("Course", new Schema({ title: String, category: String }));: Utiliza la función model para crear un modelo llamado "Course". El segundo argumento de model es un nuevo Schema que define la estructura de los documentos en la colección "Course". En este caso, se define que cada documento debe tener propiedades title y category, ambas del tipo String.
//export const Course = ...;: Exporta este modelo Course para que pueda ser utilizado en otros archivos.
import { Schema, model } from "mongoose";

export const Course = model(
  "Course",
  new Schema({
    title: String,
    category: String,
  })
);
