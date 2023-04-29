import React from 'react'
import CardList from './CardList'

function Card() {

    const items = [

        {
            title: "Nağd kreditlər",
            percent: "16%",
            description: "-dən başlayaraq"
        },
        {
            title: "Əmanətlər",
            percent: "11%",
            description: "-dən illik gəlir"
        },
        {
            title: "Plastik kartlar",
            percent: "30%",
            description: "-dək keşbek xidməti"
        },
        {
            title: "Kredit kartı",
            percent: "40",
            description: "günədək güzəşt müddəti"
        },
    ]

  return (
    <div className='cards'>
      <div className="container">
        <div className="zz row">
            {
                items.map((item,index)=>{
                    return(
                        <div key={index} className="col-lg-3 col-6">
                            <CardList item={item}/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Card
