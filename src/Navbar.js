import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Navbar = ({ websiteName, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const modalStyle = {
        content: {
            top: '4rem',
            transform: 'translate(calc(50%+1rem), 0)', 
        },
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>{websiteName}</h1>
            </div>
            <div className="navbar-right">
                <div className="user-info" >
                    <span>{user.name}</span>
                    <img src={user.avatar} alt={`${user.name}'s Avatar`} />
                    <div className="dropdown-triangle" onClick={openModal}></div>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="User Information Modal"
                    className="user-info-modal"
                    overlayClassName="user-info-overlay"
                    style={modalStyle} 
                >
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <button className="close-button" onClick={closeModal}>
                        X
                    </button>
                </Modal>
            </div>
        </nav>
    );
};

export default Navbar;
