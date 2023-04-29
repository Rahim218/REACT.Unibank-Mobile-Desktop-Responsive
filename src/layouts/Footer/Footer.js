import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="footer-menu ">
          <ul>
            <li className='footer-menu-head' ><a href="/#">Kartlar</a></li>
            <li className='footer-menu-body'><a href="/#">Kartlar</a></li>
            <li className='footer-menu-body'><a href="/#">Debet kartlar</a></li>
            <li className='footer-menu-body'><a href="/#">Digər</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Kreditlər</a></li>
            <li className='footer-menu-body'><a href="/#">Nağd</a></li>
            <li className='footer-menu-body'><a href="/#">Mikro</a></li>
            <li className='footer-menu-body'><a href="/#">İpoteka</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Əmanətlər</a></li>
            <li className='footer-menu-body'><a href="/#">Müddətli</a></li>
            <li className='footer-menu-body'><a href="/#">Proqressiv</a></li>
            <li className='footer-menu-body'><a href="/#">Yığım</a></li>
            <li className='footer-menu-body'><a href="/#">Faizlər əvvəlcədən</a></li>
            <li className='footer-menu-body'><a href="/#">Topla</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Köçürmələr</a></li>
            <li className='footer-menu-body'><a href="/#">Ölkə xarici</a></li>
            <li className='footer-menu-body'><a href="/#">Ölkə daxili</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Rəqəmsal bankçılıq</a></li>
            <li className='footer-menu-body'><a href="/#">Ubank</a></li>
            <li className='footer-menu-body'><a href="/#">İnternet bankçılıq</a></li>
            <li className='footer-menu-body'><a href="/#">Şəxsi kabinet</a></li>
            <li className='footer-menu-body'><a href="/#">Unimiles şəxsi kabinet</a></li>
            <li className='footer-menu-body'><a href="/#">Onlayn kredit ödənişi</a></li>
            <li className='footer-menu-body'><a href="/#">Onlayn kredit müraciəti</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Əlavə xidmətlər</a></li>
            <li className='footer-menu-body'><a href="/#">Hesablaşma-kassa xidməti</a></li>
            <li className='footer-menu-body'><a href="/#">Post terminal / Smart kassa</a></li>
            <li className='footer-menu-body'><a href="/#">Depozit qutuları</a></li>
            <li className='footer-menu-body'><a href="/#">Onlayn ticarət (eCommerce)</a></li>
          </ul>
          <ul>
            <li className='footer-menu-head' ><a href="/#">Bank haqqında</a></li>
            <li className='footer-menu-body'><a href="/#">Rəhbərlik</a></li>
            <li className='footer-menu-body'><a href="/#">Müxbir hesablar</a></li>
            <li className='footer-menu-body'><a href="/#">Təklif və Şikayətlər</a></li>
            <li className='footer-menu-body'><a href="/#">İnsan resursları</a></li>
            <li className='footer-menu-body'><a href="/#">Hesabatlar</a></li>
            <li className='footer-menu-body'><a href="/#">Digər sənədlər</a></li>
          </ul>
        </div>

        <div className="footer-int-platform">
          <a id='one' href="/#"><i className="fa-brands fa-apple"></i></a>
          <a id='two' href="/#"><i class="fa-solid fa-person"></i></a>
          <a id='other' href="/#"> <i className="fa-brands fa-facebook-f"></i></a>
          <a id='other' href="/#"><i className="fa-brands fa-twitter"></i></a>
          <a id='other' href="/#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a id='other' href="/#"><i className="fa-brands fa-square-youtube"></i></a>
          <a id='other' href="/#"><i className="fa-brands fa-instagram"></i></a>
          <a id='other' href="/#"><i className="fa-brands fa-telegram"></i></a>
        </div>
        <hr />

        <div className="footer-brand">
          <div className="col-lg-3">
            <div className="left-side">
              <p>© 2023, Unibank - Sənin Bankın </p>
              <span>Bütun hüquqlar qorunur.</span>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="right-side">
              <img className='small-img' src="https://unibank.az/assets/images/adif.png" alt="" />
              <img className='other-img' src="https://avciya.az/wp-content/uploads/2021/02/Elektron-hokumet-1.jpg" alt="" />
              <img className='small-img' src="https://unibank.az/assets/images/infobank.png?v4" alt="" />
              <img className='small-img' src="https://unibank.az/assets/images/msp.png?v5" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
