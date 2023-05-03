import { useState } from 'react'
import Slide from '../components/Slide/Slide'
import Card from '../components/PercentCard/Card'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


function Home() {
  const [key, setKey] = useState('nağd');

  const [cash, setCash] = useState(false);
  const [cashless, setCashless] = useState(false);
  const [card, setCard] = useState(false);

  const [amount, setAmount] = useState(0)
  const [selectCountry, setSelectCountry] = useState('USD')
  const [fromCountry, setFromCountry] = useState('USD')
  const [result, setResult] = useState(0)


  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }



  const clickCash = () => {
    setCash(false);
    setCashless(false)
    setCard(false)
  }
  const clickCashless = () => {
    setCash(true);
    setCashless(true);
    setCard(false);
  }
  const clickCard = () => {
    setCash(true);
    setCashless(false)
    setCard(true)
  }

  function handleCountryChange(event) {
    setSelectCountry(event.target.value);
  }
  function handleChangeAmount(event) {
    setAmount(event.target.value);
    if (selectCountry == 'USD' && fromCountry == 'AZN') {
      setResult(event.target.value * 1.6970)
    }
    else if (selectCountry == 'EUR' && fromCountry == 'AZN') {
      setResult(event.target.value * 1.83)
    }
    else if (selectCountry == 'RUB' && fromCountry == 'AZN') {
      setResult(event.target.value * 0.0199)
    }
    else if (selectCountry == 'GBP' && fromCountry == 'AZN') {
      setResult(event.target.value * 2.08)
    }
  }
  function handleFromCountryChange(event) {
    setFromCountry(event.target.value);
  }






  console.log(amount);
  console.log(selectCountry);




  return (
    <div className="home-body">
      <div className='container'  >
        <Slide />
        <Card />

        <div className="yourCard">
          <div className="container">
            <div className="yourCard-content row align-items-center ">
              <div className="col-lg-6">
                <div className="yourCard-content-img">
                  <img src="https://unibank.az/assets/static/Ucard/ucard.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="yourCard-content-title">
                  <div className="yourCard-content-description">
                    <h1>Sənin kartın - UCarddır!</h1>
                    <p>Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz kredit xətti, 30%-dək keşbek və illik 6%-dək gəlir əldə etmək imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!</p>
                  </div>

                  <div className="yourCard-content-btns row align-items-center justify-content-center  gap-3 ">
                    <div className="col-lg-2 col-12"><a href="">Ətraflı</a></div>
                    <div className="col-lg-3 col-5"><a href="">Partnyorlar</a></div>
                    <div className="col-lg-3 col-5"><a href="">Şəxsi kabinet</a></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="Ubank">
          <div className="container">
            <div className="ubank-content ">
              <div className="col-lg-6 col-12">
                <div className="ubank-title">
                  <h1>UBank</h1>
                  <p>
                    UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil əlavədir. Ödənişlərini banka gəlmədən, telefonunuzda bir toxunuşla həyata keçir! </p>
                  <div className="mobile-market">
                    <img src="https://unibank.az/assets/images/playstore.svg" alt="" />
                    <img src="https://unibank.az/assets/images/appstore.svg" alt="" />
                    <img src="https://unibank.az/assets/images/app-gallery.svg" alt="" />
                  </div>
                  <a href="/#">Haqqında</a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="ubank-image">
                  <img src="https://unibank.az/assets/images/appbar2.png" alt="" />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Currency">
          <div className="container">
            <div className="currency-content">
              <h1>Valyuta məzənnələri</h1>
              <div className="currency-title row align-items-center">
                <div className="col-lg-4 col-12">
                  <div className="cash">
                    <div className="cash-header">
                      <p className='currency-header' >Nağd</p>
                      <span className='update-time' >Yeniləndi 20.04.2023</span>
                    </div>
                    <div className="cash-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Valyuta</th>
                            <th>Alış</th>
                            <th>Satış</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>USD</td>
                            <td>1.6970 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.7015 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>1.8313 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.8886 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>RUB</td>
                            <td>0.0199 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>0.0212 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>GBP</td>
                            <td>2.0816 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>2.1492 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="cash">
                    <div className="cash-header">
                      <p className='currency-header' >Nağdsız</p>
                      <span className='update-time' >Yeniləndi 20.04.2023</span>
                    </div>
                    <div className="cash-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Valyuta</th>
                            <th>Alış</th>
                            <th>Satış</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>USD</td>
                            <td>1.6900 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.7025 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>1.8373 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.8962 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>RUB</td>
                            <td>0.0199 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>0.0215 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>GBP</td>
                            <td>2.0753 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>2.1503 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="cash">
                    <div className="cash-header">
                      <p className='currency-header' >Kart</p>
                      <span className='update-time' >Yeniləndi 20.04.2023</span>
                    </div>
                    <div className="cash-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Valyuta</th>
                            <th>Alış</th>
                            <th>Satış</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>USD</td>
                            <td>1.6915 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.7100 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>1.8448 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>1.8820 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>RUB</td>
                            <td>0.0204 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>0.0212 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                          <tr>
                            <td>GBP</td>
                            <td>2.0922 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            <td>2.1344 <span><i class="fa-solid fa-angle-down"></i></span></td>
                          </tr>
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="currencyMedia d-none">
                <div className="currency-tab-menu">
                  <p className={toggle === 1 ? 'tab-title-active' : 'tab-title-nonactive'} onClick={() => updateToggle(1)}>Nağd</p>
                  <p className={toggle === 2 ? 'tab-title-active' : 'tab-title-nonactive'} onClick={() => updateToggle(2)} >Nağdsız</p>
                  <p className={toggle === 3 ? 'tab-title-active' : 'tab-title-nonactive'} onClick={() => updateToggle(3)}>Kart</p>
                </div>

                <span className='update-time' >Yeniləndi 20.04.2023</span>


                <div className={toggle === 1 ? '.showTab' : 'hideTab'}>
                  <div className="col-lg-4 col-12">
                    <div className="cash">
                      <div className="cash-table">
                        <table>
                          <thead>
                            <tr>
                              <th>Valyuta</th>
                              <th>Alış</th>
                              <th>Satış</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>USD</td>
                              <td>1.6970 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.7015 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>EUR</td>
                              <td>1.8313 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.8886 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>RUB</td>
                              <td>0.0199 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>0.0212 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>GBP</td>
                              <td>2.0816 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>2.1492 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggle === 2 ? '.showTab' : 'hideTab'}>
                  <div className="col-lg-4 col-12">
                    <div className="cash">
                      <div className="cash-table">
                        <table>
                          <thead>
                            <tr>
                              <th>Valyuta</th>
                              <th>Alış</th>
                              <th>Satış</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>USD</td>
                              <td>1.6900 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.7025 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>EUR</td>
                              <td>1.8373 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.8962 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>RUB</td>
                              <td>0.0199 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>0.0215 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>GBP</td>
                              <td>2.0753 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>2.1503 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggle === 3 ? '.showTab' : 'hideTab'}>
                  <div className="col-lg-4 col-12">
                    <div className="cash">
                      <div className="cash-table">
                        <table>
                          <thead>
                            <tr>
                              <th>Valyuta</th>
                              <th>Alış</th>
                              <th>Satış</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>USD</td>
                              <td>1.6915 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.7100 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>EUR</td>
                              <td>1.8448 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>1.8820 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>RUB</td>
                              <td>0.0204 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>0.0212 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                            <tr>
                              <td>GBP</td>
                              <td>2.0922 <span><i class="fa-solid fa-angle-down"></i></span></td>
                              <td>2.1344 <span><i class="fa-solid fa-angle-down"></i></span></td>
                            </tr>
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className="calculator ">
                <div className="col-lg-4">
                  <div className="calculator-title">
                    <p className="currency-header">
                      Valyuta kalkulyatoru
                    </p>
                    <p className='update-time'>Nağd məzənnə əsasında hesablanır</p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="exchange-currency ">
                    <div className="exchange-from">
                      <input type="number" value={amount} onChange={handleChangeAmount} name="" id="" />
                      <select name="country" value={selectCountry} onChange={handleCountryChange}>
                        <option value="USD"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>USD</span></option>
                        <option value="RUB"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>RUB</span></option>
                        <option value="GBP"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>GBP</span></option>
                        <option value="AZN"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>AZN</span></option>
                        <option value="EUR"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>EUR</span></option>

                      </select>
                    </div>
                    <i class="fa-solid fa-arrow-right-long"></i>
                    <div className="exchange-to">
                      <input type="number" value={result} name="" id="" />
                      <select name="country" value={fromCountry} onChange={handleFromCountryChange} >
                        <option value="USD"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>USD</span></option>
                        <option value="RUB"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>RUB</span></option>
                        <option value="GBP"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>GBP</span></option>
                        <option value="AZN"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>AZN</span></option>
                        <option value="EUR"> <img src="https://unibank.az/assets/images/usd.png" alt="" /> <span>EUR</span></option>

                      </select>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="Information">
          <div className="container">
            <div className="information-content row align-baseline g-4">
              <div className="col-lg-4 col-12">
                <div className="information-box">
                  <h4>Sənin kartın 1 yaşını qeyd edir</h4>
                  <p>
                    Ölkə bank bazarında ilk olaraq kredit və multivalyutalı debet kartını özündə birləşdirən tək kartın – “Unibank”ın UCard məhsulunun müştərilərin istifadəsinə verilməsindən 1 il ötür. Dörd fərqli valyutada hesabları olan (AZN, USD, EUR, GBP) debet kartını və AZN valyutalı kredit xəttini birləşdirən UCard, hər parametri ilə ... </p>
                  <span>13.04.2023</span>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="information-box">
                  <h4>Unibank kartlarında 200 AZN dövriyyə tələbi ləğv edildi </h4>
                  <p>
                    İndi Unibank kart sahiblərinin ay ərzində yüksək keşbek qazanmaq imkanı daha da artıb. Çünki artıq UCard-la yanacaqdoldurma, kafe-restoran və marketlərdə 5% keşbek qazanmaq üçün 200 manat dövriyyə tələbi yoxdur. Qeyd olunan xidmət və ticarət obyektlərində Apple Pay və Google... </p>
                  <span>11.04.2023</span>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="information-box">
                  <h4>Unibank storage alınması üçün tender keçirir</h4>
                  <p>

                    Unibank KB storage alınması üçün tender keçirir. Tenderdə iştirak etmək istəyənlər qiymət təkliflərini bağlı və möhürlənmiş zərfdə Tender komissiyasının sədri Faiq Zeynalovun adına göndərməlidirlər. Zərflərin qəbulu üçün son tarix 14.04.2023 il, saat 12.00-dır.
                  </p>
                  <span>04.04.2023</span>
                </div>
              </div>
            </div>
            <div className='news'><a className='all-news' href="/#">Bütün xəbərlər</a>
            </div>
          </div>
        </div>

        <div className="ContactUs">
          <div className="container">
            <div className="contactUs-content row  g-3">
              <div className="col-lg-7 col-12">
                <div className="contactUs-left-con row align-items-center">
                  <div className="col-lg-7 col-7">
                    <div className="servis-content ">
                      <h1>Xidmət <br /> şəbəkəsi</h1>
                      <p>Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.</p>
                      <a href="">Daha ətraflı</a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-5">
                    <div className="servis-location">
                      <img src="https://unibank.az/assets/images/Bitmap.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="contactUs-right-con">
                  <img src="https://unibank.az/assets/images/callcenter.svg" alt="" />
                  <h1>Sualın var? <br />
                    Bizimlə əlaqə saxla!</h1>
                  <p>Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!</p>
                  <a href="">Daha ətraflı</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
