import React from 'react'


function SlideItem({ item }) {
  return (
    <div className='slide-items'>
      <div className="slide-item">
        <div className="rowlist row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="image">
              <img src={item.p_url} alt="my image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="slide-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <a href="/#">Ətraflı</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideItem
