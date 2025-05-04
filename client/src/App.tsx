import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// Se importan las paginas y componentes para las rutas
import Home from "./pages/Home.tsx";
import SearchResult from "./pages/SearchResult.tsx";
import CreateItem from "./pages/CreateItem.tsx";
import Nav from "./components/Nav/Nav.tsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.tsx";

/**
 * Componente principal que maneja las rutas y la estructura general de la aplicación.
 * Este componente utiliza el enrutador de React para renderizar diferentes vistas basadas en la URL.
 * Los usuarios pueden navegar entre la página de inicio, los resultados de búsqueda, la creación de productos y el detalle de los productos.
 *
 * @returns El componente App que renderiza las rutas de la aplicación y la barra de navegación.
 */

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Nav />}> {/* Para que se muestre el header y footer en todas las vistas */}
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<SearchResult />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/items/:id" element={<ItemDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
