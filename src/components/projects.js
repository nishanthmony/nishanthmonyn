import React from 'react'
import happyTears from './images/logo-happytears-circle.png'
import goXart from './images/gokul.png'
import fruitOlicious from './images/fruitOlicious.png'
import './projects.css'

const Projects = () => {
    return (
        <div className='testimonials' id='projects'>
            <br></br>
            <div className='container'>
                <h2>Projects</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={happyTears} alt='project1'/>
                        <p><span>Happy Tears</span></p>
                        <p>E Commerce Application for an Entrepreneur. It is a web application developed using React JS. Here react hooks like useState, useEffect are used</p>
                        <p><span>Key Skills :</span> React JS, Node JS, Web Application Development, HTML, css, JScript, Firebase</p>
                        <p><span>Project Link : </span><a href='https://happy-tears.vercel.app/' target="_blank" rel='noreferrer'>Happy Tears</a></p>
                    </div>
                    <div className='card'>
                        <img src={goXart} alt='project2'/>
                        <p><span>Go X Art</span></p>
                        <p>A Wallpaper, Sketches downloading Application for a startup and is developed using React JS.</p>
                        <p><span>Key Skills :</span> React JS, Web Application Development, HTML, css, JScript</p>
                        <p><span>Project Link : </span><a href='https://goxart.vercel.app/' target="_blank" rel='noreferrer'>Go X Art</a></p>
                    </div>
                    <div className='card'>
                        <img src={fruitOlicious} alt='project3'/>
                        <p><span>Fruit - O - Licious</span></p>
                        <p>It is an ecommerce application developed using React to learn the basics of React</p>
                        <p><span>Key Skills :</span> React JS, Web Application Development, HTML, css, JScript</p>
                        <p><span>Project Link : </span><a href='https://lambent-cascaron-72d4c6.netlify.app/' target="_blank" rel='noreferrer'>Fruit - O - Licious</a></p>
                    </div>
                    <div className='card'>
                        <p><span> Plant Disease Prediction using Deep Learning and Image Processing</span></p>
                        <p>It is an internal funded project from SSN College of Engineering.To predict the type of plant disease using machine learning in real time using Drones for capturing and process using ML Algorithms. Currently doing this project.</p>
                        <p><span>Key Skills :</span> Deep Learning, Machine Learning, Image Processing, Drone Handling, Iot`</p>
                    </div>
                    <div className='card'>
                        <img src={fruitOlicious} alt='project3'/>
                        <p><span>Fruit - O - Licious Mobile</span></p>
                        <p>It is an ecommerce application developed using Thunkable. A No Code Platform to create Application for Android and iOs.</p>
                        <p><span>Key Skills :</span> Mobile Application Development, Database, Google Sheets, Firebase</p>
                        <p><span>Project Link : </span><a href='https://x.thunkable.com/projectPage/64cb3823f691e214631845d0' target="_blank" rel='noreferrer'>Fruit - O - Licious(Thunkable)</a></p>
                    </div>
                    <div className='card'>
                        <p><span>SALVLAS App</span></p>
                        <p>A Women's Safety Application which has both hardware and software integrations. We used Arduino Uno for the Communication between App and the hardware. When the mobile app gets the notification from the Hardware, It makes a panic sound for 15 seconds and if it is not turned off manually, it then sends the emergency call to the emergency contacts with the location of the Mobile Phone.</p>
                        <p><span>Key Skills :</span> Mobile Application Development, Android Studio, Firebase</p>
                    </div>
                    <div className='card'>
                        <p><span>Cyber attack prediction using Machine Learning</span></p>
                        <p>The project is about predicting the type of cyber attack based on the given parameters using Machine Learning.</p>
                        <p><span>Key Skills :</span> Machine Learning</p>
                    </div>
                    <div className='card'>
                        <p><span>GEEYES Solutions</span></p>
                        <p>A basic App for a private company which is done with the help of Android Studio and used Java.</p>
                        <p><span>Key Skills :</span> Mobile Application Development, Android Studio, Database, Java</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects