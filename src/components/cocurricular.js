import React from 'react'
const Cocurricular = () => {
  return (
    <>
    <div className='testimonials' id='activities'>
      <div className='container'>
        <h2>Activities</h2>
        <span className='line'></span>
      </div>
    </div>
    <div className='demo'>
      <div className='col-1'>
        <p></p>
        <h2>Co-Curricular</h2>
        <p><ul style={{listStyleType: 'disc'}}>
          <li>Karate Black Belt</li>
          <li>Silambam</li>
          <li>Digital Sketch</li>
          <li>Pencil Sketch</li>
        </ul></p>
      </div>
      <div className='col-2'>
        <h2>Sports</h2>
        <p><ul style={{listStyleType: 'disc'}}>
          <li style={{alignContent:'center'}}>Badminton</li>
          <li style={{alignContent:'center'}}>Cricket</li>
        </ul></p>
      </div>
    </div>
    </>
  )
}
export default Cocurricular