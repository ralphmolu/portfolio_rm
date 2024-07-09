import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route  path='/' element={<AboutMe />} />
          <Route  path='/portfolio' element={<Portfolio />} />
          <Route  path='/contact' element={<Contact />} /> 
          <Route  path='/resume' element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
