import React from 'react'

function AllBranchCards(props) {
    return (
        <div className='col-12 col-lg-12'>
            <div className="branches-card-box">
                <div className="col-lg-5 col-12">
                    <div className="branches-left-con">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <div className="branches-right-con row align-items-center">
                        <div className="col-lg-6 col-6">
                            <div className="branch-clock">
                                <i class="fa-regular fa-clock"></i>
                                <span>
                                    Bazar ertəsi - Cümə 9:00 – 18:00* <br />
                                    Şənbə: 10:00 –15:00 <br />
                                    Bazar: fəaliyyət göstərmir.</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-6">
                            <div className="branch-info">
                                <i class="fa-solid fa-circle-info"></i>
                                <span>Fiziki və hüquqi şəxslər üçün bank <br /> xidmətləri. VİP-bankçılıq.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBranchCards
