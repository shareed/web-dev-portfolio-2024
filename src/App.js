import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavigationBar from './components/navigationBar';
import Home from './components/home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./styles/theme";
import FullStackProjects from './components/projects/fullstackprojects/FullStackProjects';
import Desgins from './components/projects/designs/Desgins';
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer';
const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <ThemeProvider theme={ theme }>
        <NavigationBar navLinks={navLinks} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/designs' element={<Desgins />} />
          <Route path='/full-stack-projects' element={<FullStackProjects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

          <Footer />
          </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
