import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500}>Internships</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='demo' spy={true} smooth={true} offset={50} duration={500}>Demo</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
