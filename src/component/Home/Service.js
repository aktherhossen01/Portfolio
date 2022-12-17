import React from 'react';
import '../Style/Service.css'

const Service = () => {
    return (
        <div className='section'>
            <div className='first-section'>
                <h1>My Awesome</h1>
                <h1 style={{color: 'gold'}}>Services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Fugiat enim laborum necessitatibus rem.

                </p>
                <button className='button'>Download CV</button>
            </div>
            <div className='box'> 
                <div className='box-1 first'>
                <i class="fa-brands fa-html5"></i>
                    <h1>HTML</h1>
                    <p>Html, Css, JavaScript, React, Node js, Express</p>
                    <button id='more'>LEARN MORE</button>
                </div>
                <div className='box-1 midel'>
                <i class="fa-brands fa-square-js"></i>
                <h2>JAVASCRIPT</h2>
                    <p>Html, Css, JavaScript, React, Node js, Express</p>
                    <button id='more'>LEARN MORE</button>
                </div>
                <div className='box-1 lasti'>
                <i class="fa-brands fa-react"></i>
                <h2>REACT</h2>
                    <p>Html, Css, JavaScript, React, Node js, Express</p>
                    <button id='more'>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Service;