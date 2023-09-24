import React from 'react'
import './skills.css'
import { FaReact, FaPython,FaDev,FaDatabase } from 'react-icons/fa'

export const Skills = () => {
  return (
    
    <section>
      <div className='testimonials'>
        <div className='container' id='skills' style={{width:'320px'}}>
          <h1 className='heading1'>Technical Skills</h1>
          <div className='Technical-bars'>
            <div className='bar'><FaPython color='blue'/>
              <div className='info'>
                <span>Python</span>
              </div>
              <div className='progress-line Python'>
                <span></span>
              </div>
            </div>
            <div className='bar'><FaReact color='darkblue'/>
              <div className='info'>
                <span>React JS</span>
              </div>
              <div className='progress-line ReactJS'>
                <span></span>
              </div>
            </div>
            <div className='bar'><FaDatabase color='black'/>
              <div className='info'>
                <span>Data Science</span>
              </div>
              <div className='progress-line DataScience'>
                <span></span>
              </div>
            </div>
            <div className='bar'><FaDatabase color='black' />
              <div className='info'>
                <span>Deep Learning</span>
              </div>
              <div className='progress-line DeepLearning'>
                <span></span>
              </div>
            </div>
            <div className='bar'><FaDev color='grey'/>
              <div className='info'>
                <span>Web Application Development</span>
              </div>
              <div className='progress-line WebApplicationDevelopment'>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    {/*
    <div className='container1'>
      <h1 className='heading1'>Skills</h1>
      <div className='radial-bars'>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-1' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>90%</div>
          <div className='text'>Python</div>
        </div>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-2' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>60%</div>
          <div className='text'>React JS</div>
        </div>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-3' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>70%</div>
          <div className='text'>Data Science</div>
        </div>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-4' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>65%</div>
          <div className='text'>Deep Learning</div>
        </div>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-5' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>55%</div>
          <div className='text'>Image Processing</div>
        </div>
        <div className='radial-bar'>
          <svg x={0} viewBox='0 0 200 200'>
            <circle className='progress-bar' cx={100} cy={100} r={80} ></circle>
            <circle className='path path-6' cx={100} cy={100} r={80}></circle>
          </svg>
          <div className='percentage'>65%</div>
          <div className='text'>Web Application Development</div>
        </div>
      </div> 
    </div>*/}
    </section>    
  )
}
