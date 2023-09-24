import React from 'react'
import shady from './images/myself.jpeg'
import './about.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={shady} alt='Nishanth Mony N' height={500}/>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Dedicated React developer with a strong foundation in Computer Science, combining expertise in Python, Machine Learning, Deep Learning, Web Development, and Database Management. Seeking to contribute to and thrive within dynamic engineering teams.</p>
                    <p>I am Nishanth Mony N, a React Developer</p>
                    <button className='button' ><a href='#education' style={{color: 'white'}}>Explore More</a></button>
                </div>
            </div>
        </div>
    )
}

export default About