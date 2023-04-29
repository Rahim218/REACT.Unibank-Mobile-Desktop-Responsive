import React from 'react'

function Prosses1(props) {
  return (
    
      <div className="col-lg-3">
        <div className="prosses-first-box">
            <div className="prosses-first-image">
                <img src={props.photo} alt="" />
            </div>
            <div className="prosses-first-content">
                <h2>{props.title}</h2>
                <a href="">{props.link}</a>
            </div>
        </div>
      </div>
   
  )
}

export default Prosses1
