import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import SiteFooter from './components/SiteFooter/component';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Team from './pages/team';
import Work from './pages/work';

function App() {

  const [ currentActive, setCurrentActive ] = useState("");

  useEffect(() => {
    const currentPage = window.location.pathname.substring(1);
    currentPage==="" ? setCurrentActive("home") : setCurrentActive(currentPage);
    window.scroll({top: 0, behavior: "smooth"});
  }, [ currentActive ]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentActive={currentActive} setCurrentActive={setCurrentActive}/>
        <Routes>
          <Route path='/' element={<Home setCurrentActive={setCurrentActive}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {currentActive==="team" ? <Footer setCurrentActive={setCurrentActive}/> : null}
        <SiteFooter setCurrentActive={setCurrentActive}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
