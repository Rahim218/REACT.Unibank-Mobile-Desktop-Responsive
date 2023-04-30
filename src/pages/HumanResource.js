import React, { useState } from 'react'
import CommonInfo from '../components/Tab/HumanResourceTab/CommonInfo/CommonInfo'
import Vacancy from '../components/Tab/HumanResourceTab/Vacancy/Vacancy'
import Working from '../components/Tab/HumanResourceTab/Working/Working'
import Prosses from '../components/Tab/HumanResourceTab/Prosses/Prosses'
import Training from '../components/Tab/HumanResourceTab/Training/Training'

function HumanResource() {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='humanresource'>
            <div className="container">
                <h1 >Insan resursları</h1>
                <div className="tab-links">
                    <p className={toggle === 1 ? 'active' : 'noactive'} onClick={() => updateToggle(1)}> Ümumi məlumatlar</p>
                    <p className={toggle === 2 ? 'active' : 'noactive'} onClick={() => updateToggle(2)} >Vakansiyalar</p>
                    <p className={toggle === 3 ? 'active' : 'noactive'} onClick={() => updateToggle(3)}>Unibankda çalışmaq</p>
                    <p className={toggle === 4 ? 'active' : 'noactive'} onClick={() => updateToggle(4)}>İşə qəbul prosesi</p>
                    <p className={toggle === 5 ? 'active' : 'noactive'} onClick={() => updateToggle(5)}>Təlim və inkişaf</p>
                </div>

                <div className={toggle === 1 ? 'showcontent' : 'hidecontent'}>
                    <CommonInfo />
                </div>
                <div className={toggle === 2 ? 'showcontent' : 'hidecontent'}>
                    <Vacancy />
                </div>
                
                <div className={toggle === 3 ? 'showcontent' : 'hidecontent'}>
                    <Working/>

                </div>
                <div className={toggle === 4 ? 'showcontent' : 'hidecontent'}>
                    <Prosses/>
                </div>
                <div className={toggle === 5 ? 'showcontent' : 'hidecontent'}>
                    <Training/>
                </div>

            </div>
        </div>
    )
}

export default HumanResource
