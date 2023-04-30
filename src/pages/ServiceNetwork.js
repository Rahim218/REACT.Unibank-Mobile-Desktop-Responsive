import React, { useState} from 'react'
import AllBranch from '../components/Tab/ServiceNetworkTab/AllBranches/AllBranch';
import SaturdayBranch from '../components/Tab/ServiceNetworkTab/SaturdayBranches/SaturdayBranch';

function ServiceNetwork() {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }



    return (
        <div className='servicenetwork' >
            <div className="container">
                <h1 >Xidmət şəbəkəsi</h1>
                <div className="tab-links">
                    <p className={toggle === 1 ? 'active' : 'noactive'} onClick={() => updateToggle(1)}> Bütün filiallar</p>
                    <p className={toggle === 2 ? 'active' : 'noactive'} onClick={() => updateToggle(2)} >Şənbə filialları</p>
                    <p className={toggle === 3 ? 'active' : 'noactive'} onClick={() => updateToggle(3)}>Biznes filiallar</p>
                    <p className={toggle === 4 ? 'active' : 'noactive'} onClick={() => updateToggle(4)}>UTM</p>
                    <p className={toggle === 5 ? 'active' : 'noactive'} onClick={() => updateToggle(5)}>Terminallar</p>
                </div>


                <div className={toggle === 1 ? 'showcontent' : 'hidecontent'}>
                    <AllBranch/>
                </div>
                <div className={toggle === 2 ? 'showcontent' : 'hidecontent'}>
                    <SaturdayBranch/>
                </div>

                <div className={toggle === 3 ? 'showcontent' : 'hidecontent'}>

                </div>
                <div className={toggle === 4 ? 'showcontent' : 'hidecontent'}>
                </div>
                <div className={toggle === 5 ? 'showcontent' : 'hidecontent'}>
                </div>

            </div>
        </div>
    )
}

export default ServiceNetwork
