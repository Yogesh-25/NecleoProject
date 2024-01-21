import React, { useState } from 'react';
import './Crudcss/CrudCard.css';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import EditCardForm from './EditCardForm';

const CrudCard = ({ card, onClick, onUpdateCard, onDeleteCard }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(true);
    };

    const handleDeleteConfirmation = () => {
        onDeleteCard(card);
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    const handleUpdateCard = (updatedCard) => {
        onUpdateCard(updatedCard);
        setShowEditForm(false);
    };

    const handleCancelEdit = () => {
        setShowEditForm(false);
    };

    const SplitStringWithFixedLength = ({ originalString, totalCharacters, chunkSize }) => {
        const splitStringIntoLines = (str, totalCharacters, chunkSize) => {
            let remainingCharacters = totalCharacters;
            let lines = [];

            while (remainingCharacters > 0) {
                const currentChunkSize = Math.min(remainingCharacters, chunkSize);
                const currentLine = str.substring(totalCharacters - remainingCharacters, totalCharacters - remainingCharacters + currentChunkSize);
                lines.push(currentLine);
                remainingCharacters -= currentChunkSize;
            }

            return lines;
        };

        const stringLines = splitStringIntoLines(originalString, totalCharacters, chunkSize);

        return (
            <div>
                <span>
                    {stringLines.map((line, index) => (
                        <span key={index}>{line}</span>
                    ))}
                </span>
                <span>{originalString.length >= 260 ? <span>....</span> : null}</span>
            </div>
        );
    };

    const desc = <SplitStringWithFixedLength originalString={card.description} totalCharacters={200} chunkSize={28} />;
    const tit = <SplitStringWithFixedLength originalString={card.title} totalCharacters={84} chunkSize={28} />;
    return (
        <div className='new-added-card' >
            <h3 style={{ margin: '1px' }}>{tit}</h3>
            <span><h5 style={{ marginTop: '0.4rem' }}> Description:</h5>
                <p style={{ marginTop: '-1.3rem' }}>{desc}</p></span>
            <div className='crud-button'>
                <button className="update" onClick={handleEditClick}>Update</button>
                <button className="delete" onClick={handleDeleteConfirmation}>Delete</button>
                <button className="view-more" onClick={onClick}> view more</button>

            </div>
            {showDeleteModal && (
                <DeleteConfirmationModal onDelete={handleDeleteConfirmation} onClose={handleCancelDelete} />
            )}
            {showEditForm && (
                <EditCardForm
                    card={card}
                    onUpdateCard={handleUpdateCard}
                    onClose={handleCancelEdit}
                />
            )}
        </div>
    );
};

export default CrudCard;