import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
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
                        <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='education' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Education</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='internships' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Internships</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='activities' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Activities</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='demo' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar