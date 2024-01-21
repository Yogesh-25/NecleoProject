import React from 'react';

const DeleteConfirmationModal = ({ onDelete, onClose }) => {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <div>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this card?</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteConfirmationModal;
