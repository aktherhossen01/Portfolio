import React from 'react';
import Blogs from './Blogs';
import Circule from './Circule';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Media from './Media';
import Nabbar from './Nabbar';
import Project from './Project';
import Service from './Service';


const Home = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Header></Header>
            <Service></Service>
            <Circule></Circule>
            <Media></Media>
            <Project></Project>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;