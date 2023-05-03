
import Header from './layouts/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer/Footer'

function Layout({cartCount}) {
 


  return (
    <div>
      <Header cartCount={cartCount}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
