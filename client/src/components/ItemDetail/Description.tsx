// Description.tsx
import { Badge, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { Item } from "../../types/item.d.tsx";
import { formatPrice } from "../../utils/formatPrice.ts";
import { calculateAverageRating } from "../../utils/calculateAverageRating.ts";

/**
 * Este componente `Description` muestra un resumen detallado de un producto utilizando el componente `Descriptions` de Ant Design.
 * Incluye información como marca, nombre, precio, stock, categoría, estado de disponibilidad, descripción y calificación promedio.
 * 
 * @param {{ item: Item }} props - Objeto que contiene la información del producto.
 * @param {Item} props.item - El producto que se va a mostrar en el resumen.
 * 
 */

const Description = ({ item }: { item: Item }) => {
  const isOutOfStock = item.stock == 0; // para saber si el equipo está sin stock
  const rating = calculateAverageRating(item.rating) // la califacion actual del producto

  const info: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Marca",
      children: item.brand,
    },
    {
      key: "2",
      label: "Nombre del equipo",
      children: item.name,
    },
    {
      key: "3",
      label: "Precio",
      children: `${formatPrice(item.price)}`,
    },
    {
      key: "4",
      label: "En stock",
      children: item.stock,
    },
    {
      key: "5",
      label: "Categoría",
      children: item.category,
    },
    {
      key: "6",
      label: "Estado",
      children: (
        <Badge
          status={isOutOfStock ? "error" : "processing"}
          text={isOutOfStock ? "Agotado" : "Disponible"}
        />
      ),
    },
    {
      key: "7",
      label: "Descripción",
      children: item.description,
      span: 3,
    },
    {
        key: "8",
        label: "Calificación",
        children: `${rating} / 5`,
        span: 3,
      },
  ];

  return <Descriptions title="Información del producto" bordered items={info} />;
};

export default Description;
