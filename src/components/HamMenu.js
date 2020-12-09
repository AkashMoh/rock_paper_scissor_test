import React from 'react'
import './HamMenu.css'
import closeBtn from '../icons/close.svg'
import githubIcon from '../icons/github.svg'
import linkedinIcon from '../icons/linkedin.svg'
import instagramIcon from '../icons/instagram.svg'

function HamMenu(props) {

    return (
        <div className={props.burger ? "hamMenu" : "hamMenuHidden"}>
            <img onClick={props.burgerSetter} id="Capa_1" src={closeBtn} alt="close" />
            <p>From <strong>Kashmoh</strong></p>
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="akashmoh"><a class="LI-simple-link" href='https://in.linkedin.com/in/akashmoh?trk=profile-badge'>Akash T M</a></div>
            <div className="social">
            <a href="https://github.com/AkashMoh" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github"/></a>
            <a href="https://www.linkedin.com/in/akashmoh/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn"/></a>
            <a href="https://www.instagram.com/capn_davy.jones/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram"/></a>
            </div>
        </div>
    )
}

export default HamMenu
