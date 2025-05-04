import ItemList from '../components/ItemList/ItemList.tsx';

/**
 * Este componente es responsable de renderizar los resultados de la búsqueda.
 * Utiliza el componente `ItemList` para mostrar la lista de productos filtrados según la consulta de búsqueda.
 */

const SearchResult = () => {
  return (
    <div>
      <ItemList />
    </div>
  );
};

export default SearchResult;
