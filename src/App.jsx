import { useState, useRef, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AOS from 'aos';
import Header from './components/Header';
import Index from './pages/Index';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Trading from './pages/Trading';
import Management from './pages/Management';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registro from './pages/registro';
import Test from './pages/Test';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-out-back',
      duration: 850,
      // startEvent: 'DOMContentLoaded',
      useClassNames: true,
      // once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/management" element={<Management />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
