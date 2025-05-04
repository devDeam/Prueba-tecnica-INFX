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
