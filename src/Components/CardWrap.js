import React from 'react';
import Card from './Card'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faTrash, faShoppingBag, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import './CardWrap.css'

function cardWrap() {
    return (
        <div className="cardWrap d-flex justify-content-around">
            <Card icon={<FontAwesomeIcon icon={faToggleOff}/>} ticketNo={83457} cardType={"Total Tickets"} colorVarient={"blue"}/>
            <Card icon={<FontAwesomeIcon icon={faHourglassStart}/>} ticketNo={21457} cardType={"Pending Tickets"} colorVarient={"orange"}/>
            <Card icon={<FontAwesomeIcon icon={faShoppingBag}/>} ticketNo={31457} cardType={"Closed Tickets"} colorVarient={"green"}/>
            <Card icon={<FontAwesomeIcon icon={faTrash}/>} ticketNo={23419} cardType={"Deleted Tickets"} colorVarient={"red"}/>
        </div>
    )
}

export default cardWrap
