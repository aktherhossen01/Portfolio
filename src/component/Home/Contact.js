import React from 'react';
import '../Style/Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='text1'>
                <h1>Get in Touch</h1>
                <h1 style={{color:'gold'}}>Contact me</h1>
            </div>
            <div className='input'>
                <input type="text" placeholder='Name' /> <br />
                <input type="email" name="" id="" placeholder='Email' /> <br />
                <textarea name="" id="" cols="22" rows="1" placeholder='Messege'>

                </textarea>
                <br />
                <button className='submit'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;