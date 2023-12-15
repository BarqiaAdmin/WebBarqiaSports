import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.tsx';

import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import WhatWeDo from './pages/WhatWeDo.tsx';
import RaceWithUs from './pages/RaceWithUs.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import Events from './pages/Events.tsx';
import DecemberHackJam from './pages/Events/DecemberHackJam.tsx';
import Contact from './pages/Contact.tsx';
import World from './pages/World.tsx';
import BarqiaSportsWorld from './pages/BarqiaSportsWorld.tsx';

function App() {
  return (
    <div className="App" style={{background: 'black'}}>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      { window.location.pathname != "/Events/DecemberHackJam" && <NavBar /> }
      <Routes>
          <Route path='Home' index element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='WhatWeDo' element={<WhatWeDo />} />
          <Route path='RaceWithUs' element={<RaceWithUs />} />
          <Route path='CaseStudies' element={<CaseStudies />} />
          <Route path='Events' element={<Events />} />
          <Route path='Events/DecemberHackJam' element={<DecemberHackJam />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='World' element={<World />} />
          <Route path='BarqiaSportsWorld' element={<BarqiaSportsWorld />} />
      </Routes>
    </div>
  );
}

export default App;
