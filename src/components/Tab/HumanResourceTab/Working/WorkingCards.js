import React from 'react'

function WorkingCards(props) {
  return (
      <div className="col-lg-3 col-12">
        <div className="measure-card-image">
            <img src={props.photo} alt="" />
        </div>
        <div className="measure-card-content">
            <h3>{props.title}</h3>
            <span>{props.date}</span>
        </div>
      </div>
  )
}

export default WorkingCards
