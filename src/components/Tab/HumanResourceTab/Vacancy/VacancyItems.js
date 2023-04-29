import React from 'react'

function VacancyItems(props) {
    return (
        <div className="col-lg-12 col-12">
            <div className="vacany-box d-flex align-items-center justify-content-between g-4">
                <div className="left-info">
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                </div>
                <div className="right-info">
                    <a href="/#"><span>Müraciət et</span> <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}

export default VacancyItems
