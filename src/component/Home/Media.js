import React from 'react';
import '../Style/Media.css'
import images from '../Images/newsweek-amplify-best-programming-languages.png'

const Media = () => {
    return (
        <div className='media'>
            <div className='bloges-section'>
                <h1>Works for All these</h1>
                <h1 style={{color: 'gold'}}>Brands $ Clients</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque debitis sunt vitae porro cumque doloribus, omnis similique? Ea voluptatem aliquam vero repellat voluptatibus aut qui corrupti mollitia iure dignissimos.</p>
                <button className='button'> Hire me</button>
            </div>
            <div className='imagess'>
                <img src={images} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Media;