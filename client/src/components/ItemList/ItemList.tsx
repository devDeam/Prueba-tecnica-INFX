import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../types/item.d.tsx";
import "./ItemList.css";
import SearchBar from '..//SearchBar/SearchBar.tsx';
import BackButton from "../BackButton/BackButton.tsx";
import { formatPrice } from "../../utils/formatPrice.tsx";

const ItemList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://prueba-tecnica-infx.onrender.com/api/items?q=${query}`);
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
        <SearchBar/>
        <p className="result-count">Total resultados: {items.length}</p>
        <BackButton label="Inicio" />
    </div>
      {loading && <p className="loading">Cargando...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <>
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="category-group">
              <h3 className="category-title">{category}</h3>
              <div className="card-grid">
                {items.map((item) => (
                  <div key={item._id} className="item-card">
                    <p className="item-title">{item.brand}</p>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="item-image"
                    />
                    <h4 className="item-title">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <p className="item-price">{formatPrice(item.price)}</p>
                    <p className="item-rating">Puntuación: {'\u2605'.repeat(item.rating)}</p>
                    <p className="item-category">Categoría: {item.category}</p>
                  </div>
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
