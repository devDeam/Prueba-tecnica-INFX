export function formatPrice(
    value: number,
    locale: string = 'es-CO',
    currency: string = 'COP'
  ): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(value);
  }
  