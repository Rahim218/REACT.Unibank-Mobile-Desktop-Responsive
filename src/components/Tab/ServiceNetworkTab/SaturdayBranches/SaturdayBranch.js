import React, { useEffect, useRef } from 'react'
import AllBranchCards from '../AllBranches/AllBranchCards'
import info from '../../../../assets/image/info.png'

function SaturdayBranch() {
 
    return (
        <div className='saturdaybranch'>

        

            <div className="container">
                <div className="branches row g-4">
                    <AllBranchCards title="Rəqəmsal filial" description="S.S.Axundov küç., 42" />
                    <AllBranchCards title="Neftçilər filialı" description="Bakı, Nizami r-nu., Qara Qarayev pr., 66, AZ1096" />
                    <AllBranchCards title="Sumqayıt filialı" description="N.Nərimanov küç, ev.2/59, AZ5007" />
                    <AllBranchCards title="N.Nərimanov küç, ev.2/59, AZ5007" description="Bakı ş., 5-ci mkr, A. Məhərrəmov 21B, AZ1102" />
                    <AllBranchCards title="15 saylı filial (28 May)" description="Bakı ş., Nəsimi r-nu, D. Əliyeva küç., 243 , AZ1010" />
                    <AllBranchCards title="13 saylı filial (İnşaatçılar)" description="Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138" />
                    <AllBranchCards title="19 saylı (Bakıxanov) filial" description="Bakı ş., Bakıxanov qəs., Sülh küç., 14/2, AZ1132" />
                    <AllBranchCards title="Mərdəkan filialı" description="Xəzər r-nu., Mərdəkan qəs., Sergey Yesenin küç., 100" />

                    <div className="warn">
                        <img src={info} alt="" />
                        <p>Qeyd: 17:00-dan sonra kart və kredit üzrə xidmətlər göstərilir.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default SaturdayBranch
