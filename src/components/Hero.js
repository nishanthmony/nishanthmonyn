import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Hi, I am</p>
                <p>Nishanth Mony N</p>
                <p>React Developer</p>
                <p></p>
                <button className='button' style={{color:'white'}}><a href='#about'>Let's go</a></button>
            </div>
        </div>
    )
}

export default Hero