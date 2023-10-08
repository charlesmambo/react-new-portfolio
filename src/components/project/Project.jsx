import React from 'react';
import styles from './Project.css';
import {BiRightArrowAlt} from 'react-icons/bi';
import{BsGithub} from 'react-icons/bs';
import{ Projects} from './ProjectData';


function TruncateText(text, maxLength){
    if(text.legnth <= maxLength){
        return text
    }

    return text.slice(0, maxLength) + '....';
}


function Project() {
  return (
    <section className='projects'>
        <div className="container projects-container">
            <h2>feature project</h2>
            <div className="cards-container">
             
             {
                Projects && Projects.map((project) =>{
                 return (
                    <div className="card" key={project.name}>
                    <div className="card-img">
                        <img src={project.img} alt="" />
                    </div>
                    <div className="card-content">
                        <h5>{project.name}</h5>
                        <p>{TruncateText(project.description, 240)}</p>

                        <div className='card-links'>
                            <a href={project.url} target="_blank" className='live-link'>see more 
                            <i><BiRightArrowAlt/></i>
                            </a>

                            <a href={project.github} target="_blank" >
                            <i><BsGithub className='github-icon'/></i>
                            </a>
                        </div>
                        
                    </div>
                </div>
                 );
                })
             }

            </div>
        </div>
    </section>
  )
}

export default Project
