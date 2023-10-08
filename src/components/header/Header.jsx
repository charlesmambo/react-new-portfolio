import React from 'react';
import styles from './Header.css'
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {SiFrontendmentor} from 'react-icons/si';
import {AiOutlinePhone} from 'react-icons/ai';
import {MdMenuOpen} from 'react-icons/md';
import {MdCloseFullscreen} from 'react-icons/md';
import Intro from './intro/Intro';



const Header = () => {
  return (
    <header className='hero'>

        <div className="container">
        <nav>
                <ul className='nav-link-icon'>
                    <li>
                        <a href="#">
                            <AiOutlineMail className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillGithub className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillLinkedin className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsInstagram className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SiFrontendmentor className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#"></a>
                    </li>
                </ul>

                <ul className='nav-link-item'>
                    <li>
                        <a href="#">projects</a>
                    </li>
                    <li>
                        <a href="#">contact me</a>
                        <span><AiOutlinePhone className='contact-icon'/></span>
                    </li>
                </ul>

                <div className="mobile-nav-btn">
                    <i><MdMenuOpen  className='open-icon'/></i>
                    <i><MdCloseFullscreen  className='close-icon'/></i>
                </div>
            </nav>

            <div className="pop-nav">
             <ul className='nav-link-icon pop-up'>
                    <li>
                        <a href="#">
                            <AiOutlineMail className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillGithub className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillLinkedin className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsInstagram className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SiFrontendmentor className='nav-social-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="#"></a>
                    </li>
                </ul>

                <ul className='pop-nav-link'>
                    <li>
                        <a href="#">projects</a>
                    </li>
                    <li className='contact'>
                        <a href="#">contact me</a>
                        <span className='con-icon'><AiOutlinePhone className='pop-up-icon'/></span>
                    </li>
                </ul>
        </div>

        {/* INTRO SECTION COMPONENT */}
        <div className="intro-section-container">
         <Intro />
        </div>
      
        </div>

 

    </header>
  )
}

export default Header