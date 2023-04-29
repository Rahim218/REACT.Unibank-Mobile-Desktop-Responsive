import React from 'react'

function CardHead(props) {
    return (
        <div className="card-head row align-items-center g-2">
            <div className="col-lg-4">
                <div className="card-head-image">
                    <img className='personal-image' src={props.photo} alt="" />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card-head-content">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardHead
