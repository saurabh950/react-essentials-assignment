//components/portfolioCard.js

import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";

import './PortfolioCard.css'

function PortfolioCard(){
    return(
        <div className="portfolio-card">
            <Header/>
            <div className="card-content">
                <Avatar/>
                <PersonalInfo/>
                <Bio/>
            </div>
        </div>
    )
}

export default PortfolioCard;