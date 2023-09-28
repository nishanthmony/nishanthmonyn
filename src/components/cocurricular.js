import React from 'react'
const Cocurricular = () => {
  return (
    <>
    <div className='testimonials' id='activities'>
      <div className='container'>
        <h2>Activities</h2>
        <span className='line'></span>
      <div className='content'>
        <div className='card'>
          <h3>Co-Curricular</h3>
          <p><ul style={{listStyleType: 'number'}}>
            <li>Photoshop</li>
            <li>Digital Sketch</li>
            <li>Pencil Sketch</li>
          </ul></p>
        </div>
        <div className='card'>
          <h3>Sports</h3>
          <p><ul style={{listStyleType: 'number'}}>
            <li>Badminton</li>
            <li>Cricket</li>
          </ul></p>
        </div>
        <div className='card'>
          <h3>Extra curricular Activities</h3>
          <p><ul style={{listStyleType: 'number'}}>
            <li>karate</li>
            <li>silambam</li>
          </ul></p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Cocurricular