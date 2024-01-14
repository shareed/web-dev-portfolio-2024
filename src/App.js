import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import Home from './components/home/home-breakpoints/Home';
import { CssBaseline } from '@mui/material';
import FullStackProjects from './components/projects/fullstackprojects/FullStackProjects';
import Desgins from './components/projects/designs/Desgins';

const navLinks = [
  {
  name: 'Home',
  path: '/'
  },
  {
    name: 'Designs',
    path: '/designs'
  },
  {
    name: 'Full Stack Projects',
    path: '/full-stack-projects'
  },
]

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <NavigationBar navLinks={ navLinks } />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/designs' element={<Desgins />} />
          <Route path='/full-stack-projects' element={<FullStackProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
