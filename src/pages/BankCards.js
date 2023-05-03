import React from 'react'
import DebetCardList from '../components/DebetCard/DebetCardList'
import OtherCardList from '../components/OtherCard/OtherCardList'

function BankCards({updateCartCount}) {



    return (
        <div className="bank-card-dark">
            <div className='container'>
                <div className="bankcards">
                    <h1>Kartlar</h1>
                    <div className="bankcard-content">
                        <div className="col-lg-4 col-12">
                            <div className="bankcard-image">
                                <img src="https://unibank.az/uploads/items/o_1g04kl6mn107c1a6lc6btp4pfda.gif" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="bankcard-title">
                                <h2>UCard</h2>
                                <p>UCard - kredit və multivalyutalı debet kartını özündə birləşdirən tək kartdır.</p>
                                <div className="bankcard-info">
                                    <div className="info-currency">
                                        <i className="fa-regular fa-paste"></i>
                                        <p>Multivalyutalı <br />
                                            tək kart
                                        </p>
                                    </div>
                                    <div className="info-percent">
                                        <i className="fa-solid fa-hourglass"></i>
                                        <p>40 günədək <br />
                                            faizsiz endirim
                                        </p>
                                    </div>
                                    <div className="info-cash">
                                        <i className="fa-solid fa-right-left"></i>
                                        <p>30%-dək
                                            <br />
                                            keşbek</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 col-12">
                            <button href="/#">Ətraflı</button>
                        </div>


                    </div>
                </div>

                <h1 className='outside'>Debet kartlar</h1>

                <DebetCardList updateCartCount={updateCartCount} />

                <h1 className='outside'>Digər</h1>

                <OtherCardList updateCartCount={updateCartCount} />



            </div>
        </div>
    )
}

export default BankCards
