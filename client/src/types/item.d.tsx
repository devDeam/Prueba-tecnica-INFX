
/**
 * La interfaz `Item` Representa un producto completo obtenido desde la base de datos,
 * incluyendo su identificador único y todos los campos necesarios para mostrar o manipular el producto.
 *
 * @property {string} _id - Identificador único del producto (asignado por MongoDB).
 * @property {string} name - Nombre del producto.
 * @property {string} description - Descripción detallada del producto.
 * @property {number} price - Precio del producto.
 * @property {number} [stock] - Cantidad disponible en inventario (opcional).
 * @property {string} category - Categoría del producto (por ejemplo: "celulares", "accesorios").
 * @property {string} brand - Marca del producto.
 * @property {string[]} imageUrl - Arreglo de URLs con imágenes del producto.
 * @property {number[]} rating - Arreglo de calificaciones (números del 1 al 5) dadas por los usuarios.
 */

export interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock?: number;
  category: string;
  brand: string;
  imageUrl: string[];
  rating: number[];
}

/**
 * La interfaz `ItemPayload` Representa los datos necesarios para crear o actualizar un producto en el sistema.
 * A diferencia de `Item`, no contiene `_id` porque es generado por la base de datos.
 *
 * @property {string} brand - Marca del producto.
 * @property {string} name - Nombre del producto.
 * @property {number} stock - Cantidad disponible en inventario.
 * @property {string} description - Descripción detallada del producto.
 * @property {number} price - Precio del producto.
 * @property {string[]} imageUrl - Arreglo de URLs con imágenes del producto.
 * @property {string} category - Categoría a la que pertenece el producto.
 * @property {number[]} [rating] - Calificaciones opcionales (si se envían al crear).
 */
export interface ItemPayload {
  brand: string;
  name: string;
  stock: number;
  description: string;
  price: number;
  imageUrl: string[];
  category: string;
  rating?: number[];
}

/**
 * La interfaz `ItemCardProps` Define las propiedades que debe recibir un componente de tarjeta de producto (`ItemCard`).
 *
 * @property {Item} item - Objeto completo con los datos del producto.
 * @property {number} averageRating - Calificación promedio calculada para el producto.
 */

export interface ItemCardProps {
  item: Item;
  averageRating: number;
}