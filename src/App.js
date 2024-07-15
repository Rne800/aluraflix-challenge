import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
