import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Home from './pages/Home';
import BankCards from './pages/BankCards';
import Basket from './pages/Basket';
import HumanResource from './pages/HumanResource';
import ServiceNetwork from './pages/ServiceNetwork';
import Login from './pages/Login';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Kartlar' element={<BankCards />} />
            <Route path='/wishlist' element={<Basket />} />
            <Route path='/HumanResource' element={<HumanResource/>} />
            <Route path='/ServiceNetwork' element={<ServiceNetwork/>} />
          </Route>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
