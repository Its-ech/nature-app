import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home'
import Create from './pages/create/Create'
import Serch from './pages/Serch/Serch'
import Sports from './pages/Sports/Sports'

// componenrs
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">

      {/* End-points */}
      <BrowserRouter>
      {/* nav */}
      <Navbar />
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = '/Serch' element ={<Serch/>} />
        <Route path = '/Sports/:id' element ={<Sports/>} />
        <Route path = '/newSport' element ={<Create/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
 