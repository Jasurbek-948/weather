import React from 'react';
import img from '../img/cloudy.png'
export const Card=()=> {
    return (
        <div className="Card">
            <div className="MainInfo">
                <img className="Icon" src={img} alt="icon"/>
                <div className="Title">Andijon</div>
                <div className="Description">Bulutli</div>
                <div className="Temperatura">20</div>
            </div>
            <div className="Information">
                <div>Namlik: 15</div>
                <div>Like: 19</div>
            </div>
        </div>
    );
}

