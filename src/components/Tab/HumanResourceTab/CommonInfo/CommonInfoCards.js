import React from 'react'


function CommonInfoCards({ photo, title, description }) {

  return (
    <div className="col-lg-4 col-12">
      <div className="info-card">
        <div className="col-2">
          <div className="image">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="col-10">
          <div className="info-card-content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonInfoCards
