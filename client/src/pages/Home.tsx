import SearchBar from '../components/SearchBar/SearchBar.tsx';

/**
 * Este componente `Home` es la página principal de la tienda.
 * Muestra un saludo y un componente de barra de búsqueda donde el usuario puede buscar productos.
 */

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a MobileStore SMR</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
