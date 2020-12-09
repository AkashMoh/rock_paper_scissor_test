import React, { useState } from 'react'
import './Navbar.css'
import HamMenu from './HamMenu'
import burgerIcon from '../icons/hamburger.svg'
import userIcon from '../icons/user.svg'

function Navbar() {
    const [burger, setBurger] = useState(false);

    const burgerSetter = () => {
        setBurger(!burger);
    }

    return (
        <ul className="Navbar">
            <HamMenu burger={burger} burgerSetter={burgerSetter}/>
            <li onClick={burgerSetter}><img src={burgerIcon} className="ham" alt="burgerIcon"/></li>
            <ul className="mainLogo">
                <li className="logo">Rock Paper Scissor</li>
                <div id="underLine" className="underLine"></div>
            </ul>
            <ul className="userAddressArea">
                <li className="userAddress">userAdress</li>
                <li><img src={userIcon} alt="userIcon" className="user" /></li>
            </ul>
            
        </ul>
        
    )
}

export default Navbar
