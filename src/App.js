import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import NavigationBar from './components/navigation/NavigationBar';

const navLinks = [
  {
  name: 'Home',
  path: '/'
  },
  {
    name: 'Grids',
    path: '/grids'
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
        <NavigationBar navLinks={ navLinks } />
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
