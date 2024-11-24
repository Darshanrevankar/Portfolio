import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Project' element={<Projects/>}/>
        <Route path='/Skill' element={<Skills/>}/>
        <Route path='/Contact_Us' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
