import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='nav-item' style={{color:'white'}}>
                    <p>Nishanth Mony N</p>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#education' onClick={closeMenu}>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#internships' onClick={closeMenu}>Internships</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#workshops' onClick={closeMenu}>Workshops</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#activities' onClick={closeMenu}>Activities</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar