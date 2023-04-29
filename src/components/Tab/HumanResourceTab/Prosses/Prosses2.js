import React from 'react'

function Prosses2(props) {
  return (
   <div className="col-lg-4">
    <div className="prosses-long-box">
        <div className="prosses-long-image">
            <img src={props.photo} alt="" />
        </div>
        <div className="prosses-long-content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
   </div>
  )
}

export default Prosses2
