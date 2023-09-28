import React from 'react'
import './demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <br></br>
            <div className='container'> 
                <div className='col-1'>
                    <p></p>
                    <p>Fruit - O - Licious Mobile</p>
                    <p>It is an ecommerce application developed using Thunkable. A No Code Platform to create Application for Android and iOs</p>
                </div>
                <div className='col-2'>
                    <iframe width='570' 
                    height='320' 
                    src='https://www.youtube.com/embed/cNI1jn7_tNw' 
                    title='Thunkable App' 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen />
                </div>
            </div>
            <div className='container'> 
                <div className='col-1'>
                    <p></p><p>Demo of my portfolio</p>
                    <p></p>
                </div>
                <div className='col-2'>
                    <iframe width='570' 
                    height='320' 
                    src='https://www.youtube.com/embed/qwPBLldwBfQ' 
                    title='Thunkable App' 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen />
                </div>
            </div>
            <div className='container'> 
                <div className='col-1'>
                    <p></p><p>Happy Tears</p>
                    <p>E Commerce Application for an Entrepreneur. It is a web application developed using React JS. Here react hooks like useState, useEffect are used.</p>
                </div>
                <div className='col-2'>
                    <iframe width='570' 
                    height='320' 
                    src='https://www.youtube.com/embed/SQxS0WOx6gg' 
                    title='Thunkable App' 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo