/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Card = ({ card }) => {
    return (
        <div className="cardimage">
            <img src={card.download_url} alt={`Image ${card.id}`} />
            <div className="card-content">
                <h3>{card.author}</h3>
            </div>
        </div>
    );
};

export default Card;
