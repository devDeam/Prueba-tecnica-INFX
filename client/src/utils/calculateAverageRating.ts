/**
 * Función para calcular el promedio de calificación de un producto.
 *
 * @param {number[]} ratings - Arreglo de números que representan las calificaciones traidas de la DB.
 * @returns {number} - El promedio de las calificaciones, redondeado a un decimal. Si no hay calificaciones, retorna 0.
 */
export const calculateAverageRating = (ratings: number[]): number => {
    if (!ratings || ratings.length === 0) return 0; // Se valida si el arreglo está vacío
    const total = ratings.reduce((acc, rating) => acc + rating, 0); // Se suman todas las calificaciones y se guardan en total
    const average = total / ratings.length; // Se saca promedio
    return parseFloat(average.toFixed(1)); // Se redondea a 1 decimal, adicional se parsea a Float porque toFixed() regresa string
  };