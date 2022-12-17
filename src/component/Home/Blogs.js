import React from 'react';
import '../Style/Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='heading'>Blogs <span className='span'>Section</span></h1>
            <div className='box-section'>
                <div className='box-size'> 
                    <h1>HTML</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p>
                </div>
                <div className='box-size'><h1>CSS </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p></div>
                <div className='box-size'><h1>JAVASCRIPT </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p></div>
                <div className='box-size'><h1>REACT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p></div>
                <div className='box-size'><h1>PYTHON</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p></div>
                <div className='box-size'><h1>JAVA</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p></div>
            </div>
        </div>
    );
};

export default Blogs;