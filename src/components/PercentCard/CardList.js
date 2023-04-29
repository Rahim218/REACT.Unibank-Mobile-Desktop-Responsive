import React from 'react'

function CardList({ item }) {

    return (

        <div className="card">
            <h2>{item.title}
            </h2>
            <h1>{item.percent}</h1>
            <p>{item.description}</p>
            <a   href="">Ətraflı</a>
        </div>

    )
}

export default CardList
