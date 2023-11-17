//import path from "path";: Importa el módulo path que proporciona utilidades para manejar y transformar rutas de archivos.
//import { fileURLToPath } from "url";: Importa la función fileURLToPath del módulo url. Esta función se utiliza para convertir una URL a una ruta de sistema de archivos.
//export function getFilename(metaUrl) {: Exporta una función llamada getFilename que toma una URL (metaUrl) como argumento.
//const __filename = fileURLToPath(metaUrl);: Utiliza la función fileURLToPath para convertir la URL a la ruta del sistema de archivos y asigna el resultado a la variable __filename.
//return __filename;: Retorna la ruta del sistema de archivos que representa el nombre del archivo.

//export function getDirname(metaUrl) {: Exporta otra función llamada getDirname que también toma una URL (metaUrl) como argumento.
//const __dirname = path.dirname(getFilename(metaUrl));: Utiliza la función getFilename para obtener la ruta del sistema de archivos del nombre del archivo y luego utiliza path.dirname para obtener el directorio de esa ruta. El resultado se asigna a la variable __dirname.
//return __dirname;: Retorna la ruta del sistema de archivos que representa el directorio actual del archivo.

import path from "path";
import { fileURLToPath } from "url";

export function getFilename(metaUrl) {
  const __filename = fileURLToPath(metaUrl);
  return __filename;
}

export function getDirname(metaUrl) {
  const __dirname = path.dirname(getFilename(metaUrl));
  return __dirname;
}
