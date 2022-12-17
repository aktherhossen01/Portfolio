import React from 'react';
import '../Style/Nabbar.css'

const Nabbar = () => {
    return (
        <div className='top-bar'>
            <div className='nabbar'>
                <div>
                <h4 style={{textAlign: 'center'}}>Andrew</h4>
                </div>
                <div className='navbar'>
                    <ul>
                        <li>Home</li>
                        <li>Serivces</li>
                        <li>Experience</li>
                        <li>Protolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div>
                    <button className='button1'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Nabbar;