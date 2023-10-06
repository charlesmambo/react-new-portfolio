import React from 'react';
import styles from './Intro.css';
import Me from '../../../assets/me.jpg';
import {BsFillPencilFill} from 'react-icons/bs'

function Intro() {
  return (
    <div className='intro-container'>
        <div className="profile-img-container">
                <img src={Me} alt="" />
            </div>

            <div className="profile-content">
                <p>Hello, I`m <span className='profile-name'>Charles Mambo</span></p>
                <h2>A software developer specializing in <span className='highlighted'>frontend development</span>. <span><BsFillPencilFill  className='profile-icon'/></span></h2>
            </div>
        </div>
  )
}

export default Intro