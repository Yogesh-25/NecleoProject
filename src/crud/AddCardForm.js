import React, { useState } from 'react';
import './Crudcss/AddCardForm.css'; 
import './Crudcss/CrudDashboard.css'

const AddCardForm = ({ onAddCard }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddClick = () => {
        if (title && description) {
            const newCard = {
                title: title,
                description: description,
            };
            onAddCard(newCard);

            // Clear the form inputs
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div className="add-card-form-container">
            <h2>Add New Card</h2>
            <div className="form-group">
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button id='add-card' onClick={handleAddClick}>Add Card</button>
        </div>
    );
};

export default AddCardForm;
