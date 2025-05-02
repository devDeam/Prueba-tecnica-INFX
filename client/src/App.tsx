import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import MainSection from './components/MainSection/MainSection';

import Home from './pages/Home.tsx';
import SearchResult from './pages/SearchResult.tsx';
import CreateItem from './pages/CreateItem.tsx';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResult />} />
          <Route path="/create" element={<CreateItem />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
