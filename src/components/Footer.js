import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Internships</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Workshops</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#activities'>Activities</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
