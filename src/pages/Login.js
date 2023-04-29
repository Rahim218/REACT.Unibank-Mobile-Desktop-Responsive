import React, { useState } from 'react'

function Login() {
  const [toggle, setToggle] = useState(1)
  const [toggle2, setToggle2] = useState(1)
  const [nonActiveClass, setNonActiveClass] = useState("fin-code")

  function updateToggle(id) {
    setToggle(id)
  }
  function updateToggle2(id) {
    setToggle2(id)
  }
  function activeInput(event) {
    setNonActiveClass('fin-code-active')
    

  }
  return (
    <div className='login'>

      <div className="container">
        <div className="internet-banking">
          <div className="login-tab-menu">
            <div className={toggle === 1 ? 'login-tab-content-active' : 'login-tab-content-nonactive'}>
              <div className="login-tab-content-img">
                <img src="https://online.unibank.az/ibank/resources/imgs/icons/cards/slide-img-1.png" alt="" />
              </div>
              <div className="login-tab-content-title">
                <h2>Bir ekranda hər şeyi idarə et!</h2>
                <p>Filiala getmədən, UBank-la bank əməliyyatlarını bir ekranda et!</p>
              </div>
            </div>

            <div className={toggle === 2 ? 'login-tab-content-active' : 'login-tab-content-nonactive'}>
              <div className="login-tab-content-img">
                <img src="https://online.unibank.az/ibank/resources/imgs/icons/cards/slide-img-2.png" alt="" />
              </div>
              <div className="login-tab-content-title">
                <h2>Bir toxunuşla istənilən yerə köçürmə et!</h2>
                <p>UBank vasitəsilə Western Union, Zolotaya Korona, CONTACT pul köçürmə sistemləri üzərindən bir toxunuşla dünyanın istənilən nöqtəsinə sürətli pul göndər!</p>
              </div>
            </div>


            <div className="login-tab-dots">
              <div className={toggle === 1 ? 'dot-active' : 'dot-nonactive'} onClick={() => updateToggle(1)}></div>
              <div className={toggle === 2 ? 'dot-active' : 'dot-nonactive'} onClick={() => updateToggle(2)} ></div>
            </div>

          </div>
          <div className="login-info">
            <div className="login-info-header">
              <h2>İnternet Bankçılığa giriş</h2>
              <a href="/#">Qeydiyyat</a>
            </div>
            <div className="login-qr">
              <div className="login-qr-img">
                <img src="https://online.unibank.az/ibank/qrCode?attr=bf904983f6" alt="" />

              </div>
              <div className="login-direction">
                <p><img src="	https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" /> <span className={toggle2 === 1 ? 'direct-des' : ''} onClick={() => updateToggle2(1)}>FİN kod ilə</span></p>
                <p><img src="https://online.unibank.az/ibank/resources/imgs/icons/asan.png" alt="" /> <span className={toggle2 === 2 ? 'direct-des' : ''} onClick={() => updateToggle2(2)}>Asan İmza</span></p>
              </div>
            </div>
            <div className="login-warn">
              <img src="	https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
              <p>QR kod ilə giriş üçün UBank-dan istifadə et</p>
            </div>
            <div className="form">
              <div className={nonActiveClass}>
                <img src="	https://online.unibank.az/ibank/resources/imgs/icons/account.png" alt="" />
                <input onClick={activeInput} type="text" />
                <p  onClick={activeInput} >Şəxsiyyət vəsiqəsinin FİN kodu</p>
                <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
              </div>
              <div className={nonActiveClass}>
                <img src="	https://online.unibank.az/ibank/resources/imgs/icons/lock.png" alt="" />
                <input onClick={activeInput} type="text" />
                <p  onClick={activeInput} >Şifrə</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login
