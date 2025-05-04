// Calcular el promedio de calificacion de los productos

export const calculateAverageRating = (ratings: number[]): number => {
    if (!ratings || ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return parseFloat(average.toFixed(1)); // redondea a 1 decimal
  };  