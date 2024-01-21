import React, { useState } from 'react';
import CrudCard from './CrudCard';
import AddCardForm from './AddCardForm';
import CardDetailsModal from './CardDetailsModal';
import './Crudcss/CrudDashboard.css';

const CrudDashboard = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleAddCard = (newCard) => {
        
        newCard.id = Date.now();
        setCards([...cards, newCard]);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleUpdateCard = (updatedCard) => {
        const updatedCards = cards.map((c) => (c.id === updatedCard.id ? updatedCard : c));
        setCards(updatedCards);
    };

    const handleDeleteCard = (cardToDelete) => {
        const updatedCards = cards.filter((c) => c.id !== cardToDelete.id);
        setCards(updatedCards);
        setSelectedCard(null); 
    };

    return (
        <div className="dashboard-container">

            <div className="card-container">
                <AddCardForm onAddCard={handleAddCard} />
                {cards.map((card) => (
                    <CrudCard
                        key={card.id}
                        card={card}
                        onClick={() => handleCardClick(card)}
                        onUpdateCard={handleUpdateCard}
                        onDeleteCard={handleDeleteCard}
                    />
                ))}
            </div>
           
            {selectedCard && <CardDetailsModal card={selectedCard} onClose={() => setSelectedCard(null)} />}
        </div>
    );
};

export default CrudDashboard;
