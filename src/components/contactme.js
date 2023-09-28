import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoPhonePortraitOutline } from 'react-icons/io5'

const Contact = () => {
    return (
        <div className='testimonials' id='contact'>
            <div className='container'>
                <h2>Contact</h2>
                <div className='content'>
                    <div className='card'>
                        <span><HiOutlineMail size={30}/>   E-Mail</span>
                        <p>nishanth19007shady@gmail.com</p>
                    </div>
                    <div className='card'>
                        <span><IoPhonePortraitOutline size={30}/>   Phone</span>
                        <p>7358015647</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact