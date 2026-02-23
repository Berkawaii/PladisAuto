import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AppointmentForm from './components/AppointmentForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { DataProvider } from './context/DataContext';

const Hizmetler = () => <Services />;
const Randevu = () => (
  <div className="pt-32 pb-24 min-h-screen">
    <AppointmentForm />
  </div>
);
const Iletisim = () => (
  <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
    <h1 className="text-6xl font-bold mb-12 tracking-tighter">İletişim</h1>
    <div className="grid md:grid-cols-2 gap-16">
      <div className="glass p-12 border border-glass-border">
        <h3 className="text-2xl font-bold mb-6">Merkez Şube</h3>
        <p className="text-secondary mb-4 leading-relaxed">
          Atatürk Oto Sanayi Sitesi, 2. Kısım 15. Sokak No: 456<br />
          Maslak, Sarıyer / İstanbul
        </p>
        <p className="text-white font-bold mb-2">+90 (212) 555 01 00</p>
        <p className="text-white">info@pladisauto.com</p>
      </div>
      <div className="h-[400px] glass grayscale">
        <img src="https://images.unsplash.com/photo-1567536303371-0841339650ad?auto=format&fit=crop&q=80&w=1000" alt="Pladis Workshop" className="w-full h-full object-cover opacity-50" />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <DataProvider>
      <Router basename="/PladisAuto">
        <div className="min-h-screen bg-primary text-primary selection:bg-white selection:text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<Hizmetler />} />
            <Route path="/randevu" element={<Randevu />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>

          <footer className="py-20 border-t border-glass-border glass mt-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-4xl font-black text-gradient mb-6 tracking-tighter">PLADIS AUTO</h3>
              <p className="text-muted text-sm uppercase tracking-[0.4em] mb-12">Premium Mercedes-Benz Specialists</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs font-bold uppercase tracking-widest text-secondary">
                <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <Link to="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
                <Link to="/randevu" className="hover:text-white transition-colors">Randevu</Link>
                <Link to="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
              </div>
              <div className="pt-8 border-t border-glass-border text-[10px] text-muted uppercase tracking-widest">
                © 2024 Pladis Auto Excellence. Tüm Hakları Saklıdır.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
