import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Team from './pages/team';
import Work from './pages/work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
