import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {

  return (
    <>
      {/* BrowserRouter se encarga de tener actualizadas las diferentes rutas mientras esten en su "scope" */}
      <BrowserRouter>
        <Navbar />
        {/* Dentro del componente Routes se crean las diferentes rutas */}
        <Routes>
          {/* rutas: primero la ruta y segundo el componente (o vista) */}
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App