import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import Home from './components/home/home-breakpoints/Home';
import { CssBaseline } from '@mui/material';
import Projects from './components/projects/Projects';

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
    name: 'Material Ui',
    path: '/materialUI'
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
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
