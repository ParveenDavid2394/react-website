import React from 'react'
import CardItem from './CardItem'

function Cards(props){
    return(
        <div className="cards">
            <h1>Check Out these Epic DESTINATIONS! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}