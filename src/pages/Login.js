import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Login() {
  const [toggle, setToggle] = useState(1)
  const [toggle2, setToggle2] = useState(1)
  const [nonActiveClass, setNonActiveClass] = useState("field")
  const [nonActiveClass2, setNonActiveClass2] = useState("field2")
  const [nonActiveClass3, setNonActiveClass3] = useState("forgotPassword-left")
  const [nonActiveClass4, setNonActiveClass4] = useState("signature-field")
  const [nonActiveClass5, setNonActiveClass5] = useState("key")
  const [language, setLanguage] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }
  function updateToggle2(id) {
    setToggle2(id)
  }
  function changeClass(event) {
    setNonActiveClass('field-active')
    setNonActiveClass2('field2')
    setNonActiveClass3('forgotPassword-left')
    setNonActiveClass5('key')
    setNonActiveClass4('signature-field')


  }
  function changeClass2(event) {
    setNonActiveClass2('field-active2')
    setNonActiveClass('field')
    setNonActiveClass3('forgotPassword-left')
    setNonActiveClass5('key')
    setNonActiveClass4('signature-field')



  }
  function changeClass3(event) {
    setNonActiveClass2('field2')
    setNonActiveClass('field')
    setNonActiveClass3('forgotPassword-left-active')
    setNonActiveClass5('key')
    setNonActiveClass4('signature-field')



  }

  function changeClass4(event) {
    setNonActiveClass2('field2')
    setNonActiveClass('field')
    setNonActiveClass3('forgotPassword-left')
    setNonActiveClass4('signature-field2')
    setNonActiveClass5('key')

  }
  function changeClass5(event) {
    setNonActiveClass2('field2')
    setNonActiveClass('field')
    setNonActiveClass3('forgotPassword-left')
    setNonActiveClass4('signature-field')
    setNonActiveClass5('key2')


  }

  function toggleLanguage(id) {
    setLanguage(id)

  }
  return (
    <div className='login'>

      <div className="container">
        <div className="internet-banking-top">
          <div className="internet-banking-logo">
            <Link to='/' ><img src="https://online.unibank.az/ibank/resources/imgs/icons/main-logo.png" alt="" />
            </Link>

          </div>
          <div className="internet-banking-language">
            <span className={language === 1 ? 'span-active' : 'span-deactive'} onClick={() => toggleLanguage(1)} >AZ</span>
            <span className={language === 2 ? 'span-active' : 'span-deactive'} onClick={() => toggleLanguage(2)} >EN</span>
            <span className={language === 3 ? 'span-active' : 'span-deactive'} onClick={() => toggleLanguage(3)} >RU</span>
          </div>
        </div>


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
                <p className={toggle2 === 1 ? 'p-active' : 'p-none'} ><img src="	https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" /> <span className={toggle2 === 1 ? 'direct-des' : ''} onClick={() => updateToggle2(1)}>FİN kod ilə</span></p>
                <p className={toggle2 === 2 ? 'p-active' : 'p-none'}  ><img src="https://online.unibank.az/ibank/resources/imgs/icons/asan.png" alt="" /> <span className={toggle2 === 2 ? 'direct-des' : ''} onClick={() => updateToggle2(2)}>Asan İmza</span></p>
              </div>
            </div>
            <div className="login-warn">
              <img src="	https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
              <p>QR kod ilə giriş üçün UBank-dan istifadə et</p>
            </div>
            <div className={toggle2 === 1 ? 'form' : 'd-none'}>

              <div className={nonActiveClass}>
                <img src="	https://online.unibank.az/ibank/resources/imgs/icons/account.png" alt="" />
                <input onFocus={changeClass} type="text" required autocomplete="off" className="username" />
                <label htmlFor="">Şəxsiyyət vəsiqəsinin FİN kodu</label>
                <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
              </div>

              <div className="ll">
                <div className={nonActiveClass2}>
                  <img src="https://online.unibank.az/ibank/resources/imgs/icons/lock.png" alt="" />

                  <input onFocus={changeClass2} type="password" required autocomplete="off" className="password" />
                  <label htmlFor="">Şifrə</label>

                </div>
              </div>

              <div className="forgotPassword">
                <div className={nonActiveClass3}>
                  <div className="checkText">
                    <img src="https://online.unibank.az/ibank/captcha?attr=97d7d07f9d" alt="" />
                  </div>
                  <input onClick={changeClass3} type="text" className="text-number" />
                  <label htmlFor=""> Kodu daxil edin</label>
                </div>
                <div className="forgotPassword-right">
                  <a href="">Şifrəni unutmusuz?</a>
                </div>
              </div>

              <div className="enter">
                <a href="">Daxil ol<i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className={toggle2 === 2 ? 'signature' : 'd-none'}>
              <div className={nonActiveClass4}>
                <img src="	https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" />

                <input onFocus={changeClass4} type="password" required autocomplete="off" className="password" />
                <label htmlFor="">Mobil nömrə</label>

              </div>
              <div className="ll">
                <div className={nonActiveClass5}>
                  <img src="https://online.unibank.az/ibank/resources/imgs/icons/asan-key.png" alt="" />

                  <input onFocus={changeClass5} type="password" required autocomplete="off" className="password" />
                  <label htmlFor="">İsdifadəçi ID-si</label>

                </div>

              </div>

              <div className="signature-enter">
                <a href="">Daxil ol<i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>
  )
}

export default Login
