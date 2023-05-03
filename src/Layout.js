import React, { useState,useEffect } from 'react'
import Header from './layouts/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer/Footer'

function Layout() {
  const [productCount, setProductCount] = useState(0)
  useEffect(() => {
    const countFromLocalStorage = JSON.parse(localStorage.getItem('basket'));
    if (countFromLocalStorage != null) {
      setProductCount(countFromLocalStorage.length)
    }
    else {
      setProductCount(0)
    }
  }, []);

  return (
    <div>
      <Header productCount={productCount} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
