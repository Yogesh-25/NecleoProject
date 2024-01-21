import React, { useState, useEffect } from 'react';
import './Crudcss/EditCardForm.css';

const EditCardForm = ({ card, onUpdateCard, onClose }) => {

    const [editedTitle, setEditedTitle] = useState(card.title);
    const [editedDescription, setEditedDescription] = useState(card.description);

    useEffect(() => {
        setEditedTitle(card.title);
        setEditedDescription(card.description);
    }, [card]);

    const handleUpdateCard = () => {

        if (editedTitle && editedDescription) {
            const updatedCard = { ...card, title: editedTitle, description: editedDescription };
            onUpdateCard(updatedCard);
            onClose(); 
        } else {
            alert('Please fill in both title and description');
        }
    };

    return (
        <div>
            <h2>Edit Card</h2>
            <label>Title:</label>
            <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            <br />
            <label>Description:</label>
            <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
            <br />
            <button
                className='update-borm-button'
                onClick={handleUpdateCard}

            >Update Card</button>
        </div>
    );
};

export default EditCardForm;
