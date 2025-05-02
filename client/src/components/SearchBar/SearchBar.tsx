import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Importa el archivo CSS

import { Input, Space } from 'antd';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (value?: string) => {
    const searchValue = value ?? query;
    if (searchValue.trim() === '') return;
    navigate(`/items?search=${encodeURIComponent(searchValue.trim())}`);
  };

  const { Search } = Input;

  return (
    /*<form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar producto..."
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">
        Buscar
      </button>
    </form> */

    <Space direction = "vertical">
      <Search
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
