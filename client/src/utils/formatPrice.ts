/**
 * Formatea un número como precio en formato de pesos Colombianos.
 *
 * @param value - El valor numérico que se desea formatear.
 * @param locale - (Opcional) La configuración regional para el formato de número.
 *                 Por defecto es 'es-CO' (Español de Colombia).
 * @param currency - (Opcional) El tipo de moneda a utilizar.
 *                   Por defecto es 'COP' (Peso colombiano).
 * @returns Una cadena (string) con el valor formateado como precio en la moneda especificada.
 *
 * @example
 * formatPrice(15000); // "$15.000"
 * formatPrice(1000, 'en-US', 'USD'); // "$1,000"
 */

export function formatPrice(
    value: number,
    locale: string = 'es-CO',
    currency: string = 'COP'
  ): string {
    return new Intl.NumberFormat(
      // Intl.NumberFormat es una API incorporada en JavaScript para formatear números
      locale, {
        style: 'currency', // el numero se formatea a moneda
        currency, // Aqui se definio como COP
        minimumFractionDigits: 0,
      }).format(value);
  }
  