import React from 'react';
import '../Style/Project.css'
import img1 from '../Images/blog-4-1.jpg'
import img2 from '../Images/React-Projects.png'
import img3 from '../Images/reactjs-project.jpg'

const Project = () => {
    return (
        <div>
            <h1>Recent Compleate</h1>
            <h1 style={{color: 'gold'}}>Project</h1>
            <div className='project-img'>
                <img className='a' src={img1} alt="" srcset="" />
                <img className='b' src={img2} alt="" srcset="" />
                <img className='c' src={img3} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Project;