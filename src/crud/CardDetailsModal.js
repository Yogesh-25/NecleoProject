import './Crudcss/CardDetailsModal.css';
const CardDetailsModal = ({ card, onClose }) => {
    return (
        <div className="showCardDetail">
            <div className='heading-row'>
                <h2 className='heading-card-details'>Card Details</h2>
                <button className='close-buttonc' onClick={onClose}>X</button>
            </div>
            <p><b>Title: </b> {card.title}</p>
            <p><b>Description: </b> {card.description}</p>

        </div>
    );
};

export default CardDetailsModal;
