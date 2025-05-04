import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../types/item.d.tsx";
import "./ItemList.css";
import SearchBar from "..//SearchBar/SearchBar.tsx";
import ItemCard from "../ItemCard/ItemCard.tsx";
import { calculateAverageRating } from "../../utils/calculateAverageRating.ts";
import { Spin } from "antd";
import NotFoundPage from "../../pages/NotFound.tsx";

/**
 * Este componente `ItemList` es responsable de mostrar una lista de productos basados en un término de búsqueda proporcionado en la URL.
 * Realiza la consulta al API para obtener los productos que coinciden con el término de búsqueda y los agrupa por categorías.
 *
 * Muestra un spinner mientras los datos se cargan, y una página de error en caso de que ocurra algún problema con la solicitud o si no se encuentran resultados.
 * Los productos se muestran en tarjetas utilizando el componente `ItemCard`, y la búsqueda se realiza a través de un parámetro de URL.
 *
 * @param {} - No recibe props explícitas, ya que utiliza `useSearchParams` para obtener el parámetro de búsqueda desde la URL.
 */

const ItemList = () => {
  const [searchParams] = useSearchParams(); // Obtiene los parámetros de búsqueda de la URL
  const query = searchParams.get("search") || ""; // Obtiene el valor del parámetro "search" o una cadena vacía si no existe
  const [items, setItems] = useState<Item[]>([]); // Estado para almacenar los items a crear
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // Efecto para buscar items al cargar el componente
  useEffect(() => {
    const fetchItems = async () => {
      setItems([]) // Se limpia por si en allguna busque no hay resultados y se vuelve a consultar
      setError(null);
      setLoading(true);

      try {
        const fetchData = fetch(`${import.meta.env.VITE_API_URL}/items?q=${query}`).then(
          async (res) => {
            if (!res.ok) {
              const errData = await res.json();
              throw new Error(errData.message || "Error al buscar");
            }
            return res.json();
          }
        );

        const [data] = await Promise.all([fetchData]); // Esperar la info mientras se muestra el spin
        setItems(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false); //  se oculta el spin despues del fetch
      }
    };

    if (query) {
      fetchItems();
    }
  }, [query]);

  const groupedByCategory = items.reduce(
    (acc: Record<string, Item[]>, item) => {  // La función de reducción toma dos parámetros: el acumulador (acc) y el item actual (item)
      if (!acc[item.category]) acc[item.category] = []; // Si no existe, se crea un array vacío para esa categoría.
      acc[item.category].push(item); // Agrega el item actual al array correspondiente a su categoría
      return acc; //Retornar el acumulador actualizado para la siguiente iteración
    },
    {}  // Valor inicial del acumulador es un objeto vacío, que irá acumulando los items agrupados por categoría.
  );

  return (
    <div className="search-results">
      <div>
        <h1 className="title">Resultados para: "{query}"</h1>
        <SearchBar />
        <p className="result-count">Total resultados: {items.length}</p>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <Spin size="large" />
        </div>
      ) : error ? (
        <NotFoundPage msg={error} btn={false}/>
      ) : (
        <>
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="category-group">
              <h3 className="category-title">{category}</h3>
              <div className="card-grid">
                {items.map((item) => (
                  <ItemCard
                    key={item._id}
                    item={item}
                    averageRating={calculateAverageRating(item.rating)}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemList;
