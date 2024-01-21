import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('myProjects');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="sidebar">
            <div className="topContent">
                <hr />
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'myProjects' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('myProjects')}
                >
                    <b>My Projects</b>
                </Link>
                <Link
                    to="/sampleProjects"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'sampleProjects' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('sampleProjects')}
                >
                    <h4>Sample Projects</h4>
                </Link>
                <hr />
                <Link
                    to="/apps"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'apps' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('apps')}
                >
                    <b>CRUD App</b>
                </Link>
                <Link
                    to="/intro"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'intro' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('intro')}
                >
                    <h4>Intro to Necleo</h4>
                </Link>
            </div>
            <div className="bottomContent">
                <Link
                    to="/help"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'help' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('help')}
                >
                    <h4>Help & Support</h4>
                </Link>
                <Link
                    to="/feedback"
                    style={{
                        textDecoration: 'none',
                        color: activeSection === 'feedback' ? '#ff8c00' : 'grey',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleSectionClick('feedback')}
                >
                    <h4>Feedback</h4>
                </Link>
                <h4>Collapse</h4>
            </div>
        </div>
    );
};

export default Sidebar;
