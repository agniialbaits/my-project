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
import RegisterForm from './Components/loginForm/RegisterForm';
import CariRumahPage from './Pages/CariRumahPage/CariRumahPage';
import RumahPage from './Components/rumah/RumahPage.jsx';
import ResultTipe from './Components/result/ResultTipe';
import RumahKosongPage from './Components/rumahkosong/RumahKosongPage';



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
        <Route path="/register" element={<RegisterForm /> } />
        <Route path="/cari-rumah" element={<CariRumahPage />} />
        <Route path="/rumah" element={<RumahPage />} />
         <Route path="/result" element={<ResultTipe />} />
        <Route path="/rumah-kosong" element={<RumahKosongPage />} />
      </Routes>
    </Router>
  );
}

export default App;

