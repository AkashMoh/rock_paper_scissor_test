import React, { useState } from 'react'
import './Cards.css'
import rock from '../icons/rock.svg'
import paper from '../icons/paper.svg'
import scissor from '../icons/scissor.svg'

function Cards() {
    const [cardCSS, setCardCSS] = useState(
        {
            "rock":false,
            "paper":false,
            "scissor":false,
        }
    );

    const defCard = {
        "rock":false,
        "paper":false,
        "scissor":false,
    };

    const cardSetter = (e) => {
        let b = e.currentTarget.id;
        //console.log(cardCSS[b]);
        if(cardCSS[b] === true){
            setCardCSS({defCard});
        } else {
        setCardCSS({ ...defCard, [b] : true });
        //console.log(cardCSS);
        }
        //console.log(cardCSS[b]);
    }

    return (
        <div className="cardContainer">
            <h5>Choose your hand</h5>
            <div className="cardRow">
                <div id="rock" className = {cardCSS.rock ? "cardClicked" : "hvr-bob"} onClick={cardSetter}>
                    <div className="indiCard">
                        <img src={rock} alt="rock" />
                        <p>Rock</p>
                    </div>
                </div>
                <div id="paper" className = {cardCSS.paper ? "cardClicked" : "hvr-bob"} onClick={cardSetter}>
                    <div className="indiCard">
                    <img src={paper} alt="paper" />
                        <p>Paper</p>
                    </div>
                </div>
                <div id="scissor" className = {cardCSS.scissor ? "cardClicked" : "hvr-bob"} onClick={cardSetter}>
                    <div className="indiCard">
                    <img src={scissor} alt="scissor" />
                        <p>Scissor</p>
                    </div>
                </div>
            </div>
            <button className="hvr-glow">Play</button>
        </div>
    )
}

export default Cards
