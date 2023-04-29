import React from 'react'

function Personal(props) {
  return (
    <div className="col-lg-6 col-12">
        <div className="personal-box">
            <div className="image">
                <img src={props.photo} alt="" />
            </div>
            <div className="personal-content">
                <h2>{props.name}</h2>
                <span>{props.due}</span>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Personal
