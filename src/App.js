
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FilmDetails from './FilmDetails';
import NavBar from './NavBar';
 /*const Films = () => <div>Page des films</div>;
const Series = () => <div>Page des séries</div>;
const Contact = () => <div>Page de contact</div>;

const App = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<FilmDetails />} />
  
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<filmDetails />} />
        
      </Routes>
    </Router>
  );
};

export default App;*/
const Films = () => {
  return <div>Liste des Films</div>;
};

const Series = () => {
  return <div>Liste des Séries</div>;
};

const Contact = () => {
  return <div>Contactez-nous</div>;
};

const About = () => {
  return <div>À Propos de Nous</div>;
};

const Services = () => {
  return <div>Nos Services</div>;
};

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/film/:id" element={<FilmDetails />} />
      </Routes>
    </Router>
  );
};

export default App;