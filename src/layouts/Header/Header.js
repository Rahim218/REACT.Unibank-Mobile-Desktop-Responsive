import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import DarkMode from '../../components/DarkMode/DarkMode'


function Header({ productCount }) {

  const [special, setSpecial] = useState(false);
  const [biznes, setBiznes] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [modal, setModal] = useState(false);





  const turnOffSideBar = (e) => {
    if (sideBar === true) {
      setSideBar(false);
    }
    else {
      setSideBar(true)
    }
  }
  const toggleModal = (e) => {
    e.preventDefault();
    if (modal === false) {
      setModal(true)
    }
    else {
      setModal(false)
    }
  }



  const specialClick = (event) => {
    event.preventDefault();
    setBiznes(false);
    setSpecial(false);
  }

  const biznesClick = (e) => {
    setSpecial(true);
    setBiznes(true);
    e.preventDefault();

  }

  const clickBar = () => {
    if (sideBar === true) {
      setSideBar(false);
    }
    else {
      setSideBar(true)
    }
  }

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const countFromLocalStorage = JSON.parse(localStorage.getItem('basket'));
    if (countFromLocalStorage != null) {
      setItemCount(countFromLocalStorage.length)
    }
    else {
      setItemCount(0)
    }
  }, []);

  console.log(itemCount);





  return (
    <div id="header" >
      <div className="container">
        <div id="top-header">
          <div className="container">
            <div className="media-header row align-items-center justify-content-between ">
              <div className="col-lg-7 col-9 ">
                <div className="box d-flex gap-1">
                  <div className="col-lg-1">
                    <div className="logo">
                      <Link to='/'> <img src="https://unibank.az/assets/images/orange.png" alt="" /> </Link>
                    </div>
                  </div>
                  <div className="col-lg-11">
                    <div className="nav d-flex align-items-center gap-4">
                      <p ><Link to='/ServiceNetwork'>
                        Xidmət şəbəkəsi </Link></p>
                      <p><a href="/#">Bank Haqqında</a></p>
                      <p><a href="/#">Keşbek</a></p>
                      <p><a href="/#">Tariflər</a></p>
                      <p><Link to='/HumanResource'>
                        İnsan Resursları </Link></p>
                      <p><a href="/#">Bankla əlaqə və təkliflər</a></p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-3 ">
                <div className="d-flex align-items-center  ">
                  <div id="options" className="col-lg-5">
                    <div className="type d-flex gap-2">
                      <a className={special ? 'nonactive' : 'active'} onClick={specialClick} href="/#">Fərdi</a>
                      <a className={biznes ? 'active' : 'nonactive'} onClick={biznesClick} href="/#" >Biznes</a>
                    </div>
                  </div>
                  <div id="media-lang" className="col-lg-7">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="theme">
                          <DarkMode />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="lang d-flex gap-1">
                          <a href="/#">ENG</a>
                          <a href="/#">RUS</a>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="search">
                          <a onClick={toggleModal} href=""><i className="fa-solid fa-magnifying-glass fa-rotate-90"></i></a>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className="media-phone d-none">
                      <a className=" contact d-flex align-items-center gap-2" href="/#"><i className="fa-solid fa-phone"></i> <span>117</span></a>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


          <div className="top-header2 d-none">
            <div className="container">
              <div className="top-header2-content ">
                <div className="col-3">

                  <div onClick={clickBar} className=" ham-menu">
                    <i className="fa-solid fa-bars-staggered"></i>
                  </div>

                </div>
                <div className="col-3">
                  <div className="logo">
                    <Link to='/'> <img src="https://unibank.az/assets/images/orange.png" alt="" /> </Link>
                  </div>
                </div>
                <div className="col-3">
                  <a className=" contact d-flex align-items-center gap-2" href="/#"><i className="fa-solid fa-phone"></i> <span>117</span></a>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="bottom-header">
          <div className="container">
            <div className="d-flex align-items-center  justify-content-between">

              <nav className="d-flex align-items-center gap-4">
                <p><Link to='/Kartlar'>Kartlar</Link></p>
                <p><a href="/#">Kreditlər</a></p>
                <p><a href="/#">Əmanətlər</a></p>
                <p><a href="/#">Köçürmələr</a></p>
                <p><a href="/#">Rəqəmsal bankçılıq</a></p>
                <p><a href="/#">Əlavə xidmətlər</a></p>
              </nav>



              <div className="botom-right d-flex align-items-center gap-3">
                <Link className="basket" to="/wishlist"><i className="fa-solid fa-cart-shopping"></i> <span className="cart-count">{productCount}</span></Link>

                <a className=" contact d-flex align-items-center gap-2" href="/#"><i className="fa-solid fa-phone"></i> <span>117</span></a>
                <Link className="internet d-flex align-items-center gap-2" to="/Login"><i className="fa-solid fa-circle-right" ></i> <span>İnternet bankçılıq</span></Link>
              </div>


            </div>
          </div>
        </div>

        <div id="side-bar" className={sideBar ? 'd-flex' : 'd-none'}>
          <div className="type d-flex gap-2">
            <a className={special ? 'nonactive' : 'active'} onClick={specialClick} href="/#">Fərdi</a>
            <a className={biznes ? 'active' : 'nonactive'} onClick={biznesClick} href="/#" >Biznes</a>
          </div>
          <nav className="nav-drop">
            <p onClick={turnOffSideBar} ><Link to='/Kartlar'>Kartlar</Link></p>
            <p><a href="/#">Kreditlər</a></p>
            <p><a href="/#">Əmanətlər</a></p>
            <p><a href="/#">Köçürmələr</a></p>
            <p><a href="/#">Rəqəmsal bankçılıq</a></p>
            <p><a href="/#">Əlavə xidmətlər</a></p>
          </nav>

          <div className="nav-2-drop d-flex flex-column align-items-center ">
            <p><Link onClick={turnOffSideBar} to='/ServiceNetwork'>
              Xidmət şəbəkəsi </Link></p>
            <p><a href="/#">Bank Haqqında</a></p>
            <p><a href="/#">Keşbek</a></p>
            <p><a href="/#">Tariflər</a></p>
            <p><Link onClick={turnOffSideBar} to='/HumanResource'>
              İnsan Resursları </Link></p>
            <p><a href="/#">Bankla əlaqə və təkliflər</a></p>
          </div>
          <div className="d-flex  align-items-center">
            <div className="col-lg-3">
              <div className="theme-drop">
                <a href="/#"><i className="fa-brands fa-affiliatetheme" ></i></a>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="lang-drop d-flex gap-1">
                <a href="/#">ENG</a>
                <a href="/#">RUS</a>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="search-drop">
                <a onClick={toggleModal} href=""><i className="fa-solid fa-magnifying-glass fa-rotate-90"></i></a>

              </div>
            </div>
          </div>
        </div>
        <div className={modal ? 'modal-own' : 'd-none'}>
          <div className='modal-own-inner'>
            <div className="modal-own-content">
              <i onClick={toggleModal} id='x' class="fa-solid fa-xmark"></i>
              <h2>Axtarış</h2>
              <div className="search">
                <input type="text" />
                <i id='search-icon' class="fa-solid fa-magnifying-glass" style={{ color: "#ff6400" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>

  )
}

export default Header
