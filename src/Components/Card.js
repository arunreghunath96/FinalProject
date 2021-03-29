import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

function Card(props) {
    return (
        <div className="cardStyle d-flex align-items-center">
                <div className={`cardIcon d-flex align-items-center justify-content-center ${props.colorVarient}-card`} >{props.icon}</div>
            <div className="card-text">
                <h4>{props.ticketNo}</h4>
                <p>{props.cardType}</p>
            </div>
            
        </div>
    )
}

export default Card
