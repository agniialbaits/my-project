import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import DetailsPage from './Pages/details/detailsPage';
import HomePage from './Pages/HomePage';
import ScrollToTop from './Components/ScrollOnTop'; // <-- Tambahkan ini
import './index.css';
import MoreGallery from './Components/gallerySection/moregallery';
import ContactAgenPage from './Pages/ContactAgenPage/ContactAgenPage';
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop /> {/* <-- Tambahkan di sini */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detailsPage" element={<DetailsPage />} />
        <Route path="/semua-gambar" element={<MoreGallery />} />
        <Route path="/contact-agent" element={<ContactAgenPage />} />
      </Routes>
    </Router>
  );
}

export default App;

