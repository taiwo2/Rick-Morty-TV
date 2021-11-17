import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WatchList from './components/WatchList/WatchList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='watchlist' element={<WatchList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
