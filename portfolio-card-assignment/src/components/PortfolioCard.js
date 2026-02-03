import React, { useState } from 'react';
import { FaSun, FaMoon, FaChevronLeft, FaChevronRight, FaEnvelope, FaHeart, FaCheckCircle } from 'react-icons/fa';
import Header from './Header';
import Avatar from './Avatar';
import Bio from './Bio';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import './PortfolioCard.css';

function PortfolioCard(props) {
    const [theme, setTheme] = useState('light');
    const [photoIndex, setPhotoIndex] = useState(0);
    const [likes, setLikes] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');

    const photos = props.images;

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    const nextPhoto = () => setPhotoIndex((photoIndex + 1) % photos.length);
    const prevPhoto = () => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);
    const showAlert = () => {
        setAlertMessage(<span>Hello! you can contact me at <strong>{props.email}</strong></span>);
        setTimeout(() => setAlertMessage(''), 3000);
    };
    const like = () => setLikes(likes + 1);

    return (
        <>
            <div className={`portfolio-card ${theme}`}>
                <Header name={props.name} title={props.title} />
                <Avatar src={photos[photoIndex]} />
                <Bio text={props.bio} />
                <PersonalInfo email={props.email} phone={props.phone} />
                <Skills skills={props.skills} />
                <div className="buttons">
                    <button onClick={toggleTheme} className="btn-theme">
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>
                    <button onClick={prevPhoto} className="btn-photo">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextPhoto} className="btn-photo">
                        <FaChevronRight />
                    </button>
                    <button onClick={like} className="btn-like">
                        <FaHeart /> {likes}
                    </button>
                    <button onClick={showAlert} className="btn-alert">
                        <FaEnvelope /> Contact
                    </button>
                </div>
            </div>
            {alertMessage && <div className="alert"><FaCheckCircle /> {alertMessage}</div>}
        </>
    );
}

export default PortfolioCard;