import React from 'react';
import '../Style/Header.css'
import img from '../Images/akter1.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='text-session'>
                <h1>HY! | Am</h1>
                <h1 style={{color: 'gold'}}>Akter Hossen</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Cum fugit maiores autem beatae,<br /> itaque soluta.</p>
                <button>Here me</button><br />
                <span>

                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-github"></i>
                </span>
            </div>
            <div className='imge'>
                <img src={img} alt=""  />
            </div>
        </div>
    );
};

export default Header;