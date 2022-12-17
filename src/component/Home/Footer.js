import React from 'react';
import '../Style/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            
           <div className="footer1">
           <h4>Company</h4>
           <p>About Us</p>
           <p> Our Services</p>
           <p>Privacy Policy</p>
           <p>Program</p>
           </div>
           <div className="footer1">
            <h4>Get Help</h4>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Returns</p>
            
            <p>Payment</p>
           </div>
           <div className="footer1">
            <h4>Online Shop</h4>
            <p>Watch</p>
            <p>Bag</p>
            <p>Shoos</p>
            <p>Dress</p>
           </div>
           <div className='follow'>
            <h4>Follow Us</h4>
            <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-github"></i>
           </div>
        </div>
    );
};

export default Footer;