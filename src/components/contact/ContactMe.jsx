import React from 'react';
import styles from './Contact.css';
import Phone from '../../assets/phone.png'

const ContactMe = () => {
  return (
    <div className="container contact-container">
        <div className="form-container">
            <h2>Con<span>tact Me</span></h2>
            <div className="form-content">
            <form action="">
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" placeholder='Enter your name'/>
                    <small></small>
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder='Enter your email address'/>
                    <small></small>
                </div>
                <div className="form-control">
                    <label htmlFor="enquiry">type of enquiry</label>
                    <select>
                        <option selected disabled>Choose your proposal</option>
                        <option value="project">freelance project proposal</option>
                        <option value="project">freelance project proposal</option>
                        <option value="project">freelance project proposal</option>
                        <option value="project">freelance project proposal</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="message">your message</label>
                    <textarea name=""></textarea>
                </div>

                <div className="submit-btn">
                    <button>submit</button>
                </div>
            </form>

            <div className="phone">
                <div className="box top"></div>
                <img src={Phone} alt="" />
                <div className="box bottom"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe

