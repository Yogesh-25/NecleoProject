import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card';
import Sidebar from './Sidebar';
import MyProjectsComponent from './Components/MyProjectsComponent';
import SampleProjectsComponent from './Components/SampleProjectsComponent';
import AppsComponent from './Components/AppsComponent';
import IntroComponent from './Components/IntroComponent';
import HelpComponent from './Components/HelpComponent';
import FeedbackComponent from './Components/FeedbackComponent';

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetch random images
        axios.get('https://picsum.photos/v2/list?page=1&limit=6')
            .then(response => setCards(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <div className="dashboard">
                <Sidebar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<div className="image-container">
                            {cards.map((card, index) => (
                                <React.Fragment key={card.id}>
                                    <Card card={card} />
                                    {(index + 1) % 3 === 0 && <div className="clearfix" />}
                                </React.Fragment>
                            ))}
                        </div>} />
                        <Route path="/myProjects" element={<MyProjectsComponent />} />
                        <Route path="/sampleProjects" element={<SampleProjectsComponent />} />
                        <Route path="/apps" element={<AppsComponent />} />
                        <Route path="/intro" element={<IntroComponent />} />
                        <Route path="/help" element={<HelpComponent />} />
                        <Route path="/feedback" element={<FeedbackComponent />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;
