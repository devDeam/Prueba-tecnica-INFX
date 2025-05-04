import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import MainSection from './components/MainSection/MainSection';

import Home from "./pages/Home.tsx";
import SearchResult from "./pages/SearchResult.tsx";
import CreateItem from "./pages/CreateItem.tsx";
import Nav from "./components/Nav/Nav.tsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.tsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<SearchResult />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            {/* Puedes agregar más rutas aquí */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
