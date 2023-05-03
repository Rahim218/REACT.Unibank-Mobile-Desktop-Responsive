import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Home from './pages/Home';
import BankCards from './pages/BankCards';
import Basket from './pages/Basket';
import HumanResource from './pages/HumanResource';
import ServiceNetwork from './pages/ServiceNetwork';
import Login from './pages/Login';
import {useState} from 'react'


function App() {

  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartCount={cartCount} />}>
            <Route path='/home' element={<Home />} />
            <Route path='/kartlar' element={<BankCards updateCartCount={updateCartCount} />} />
            <Route path='/wishlist' element={<Basket updateCartCount={updateCartCount} />} />
            <Route path='/humanresource' element={<HumanResource />} />
            <Route path='/servicenetwork' element={<ServiceNetwork />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
