import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Importa el archivo CSS
import { Input, Space } from 'antd';

/**
 * Este componente `SearchBar` proporciona una barra de búsqueda interactiva para buscar productos por texto.
 * - Al presionar Enter o hacer clic en el botón de búsqueda, redirige a la ruta `/items?search=...` con el término ingresado.
 * - El término de búsqueda se codifica para evitar errores con caracteres especiales.
 */

const SearchBar = () => {
  const [query, setQuery] = useState(''); // Donde se guardara el query
  const navigate = useNavigate();

  const handleSubmit = (value?: string) => {
    const searchValue = value ?? query; // Se guarda el valor enviado por props o el que se encuente en el query
    if (searchValue.trim() === '') return; // No se realiza busqueda si el campo está vacío
    /**
    * En este navigate se redirige a la página `SearchResult` donde se ejecuta ItemList por un useEffect().
    * - Se usa encodeURIComponent() asegura que la búsqueda funcione correctamente, sin errores por caracteres ilegales.
    *   por ejemplo si se escribe televisor 4k: sin codificar /items?search=televisor 4k, codificado: /items?search=televisor%204k
    * - Se usa .trim() para eliminar espacio al principio y al final del texto.
    */
    navigate(`/items?search=${encodeURIComponent(searchValue.trim())}`);
  };

  const { Search } = Input; // Se extrae el componente Input.Search de ant

  return (

    <Space direction = "vertical">
      <Search
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Va actualizando el valor para el query a medida que se escribe
        placeholder="Buscar producto..."
        allowClear
        enterButton="Buscar"
        size="large"
        onSearch={handleSubmit}
      />
    </Space>

    
  );
};

export default SearchBar;
