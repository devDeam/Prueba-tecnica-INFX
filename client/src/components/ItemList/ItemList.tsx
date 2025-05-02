import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../types/item.d.tsx";
import "./ItemList.css";
import SearchBar from "..//SearchBar/SearchBar.tsx";
import BackButton from "../BackButton/BackButton.tsx";
import ItemCard from "../ItemCard/ItemCard.tsx";

const ItemList = () => {
  const [searchParams] = useSearchParams(); // Obtiene los parámetros de búsqueda de la URL
  const query = searchParams.get("search") || ""; // Obtiene el valor del parámetro "search" o una cadena vacía si no existe
  const [items, setItems] = useState<Item[]>([]); // Estado para almacenar los items a crear
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // Calcular promedio calificaciones
  const calculateAverageRating = (ratings: number[]) => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return parseFloat(average.toFixed(1)); // redondea a 1 decimal (ej: 3.5)
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        //const res = await fetch(`https://prueba-tecnica-infx.onrender.com/api/items?q=${query}`);
        const res = await fetch(`http://localhost:3000/api/items?q=${query}`); // Cambia la URL a la de tu servidor local
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Error al buscar");
        }
        const data = await res.json();
        setItems(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchItems();
    }
  }, [query]);

  const groupedByCategory = items.reduce(
    (acc: Record<string, Item[]>, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className="search-results">
      <div>
        <h2 className="title">Resultados para: "{query}"</h2>
        <SearchBar />
        <p className="result-count">Total resultados: {items.length}</p>
        <BackButton label="Inicio" />
      </div>
      {loading && <p className="loading">Cargando...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <>
          {Object.entries(groupedByCategory).map(([category, items]) => (
            // Agrupa los items por categoría
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
