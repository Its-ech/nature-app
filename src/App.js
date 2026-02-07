import { BrowserRouter,Router, Route, } from 'react-router-dom'
import './App.css';

import Home from './pages/Home/Home'
import Serch from './pages/Serch/Serch'
import Sports from './pages/Sports/Sports'

function App() {
  return (
    <div className="App">

      {/* End-points */}
      <BrowserRouter>
      <Routes>
        <route path = '/' element ={<Home/>}/>
        <route path = '/Serch' element ={<Serch/>}/>
        <route path = '/Sports/:id' element ={<Sports/>}/>
      </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
