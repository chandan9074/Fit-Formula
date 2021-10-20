// import pakages
import React from 'react';
import { Carousel } from 'react-bootstrap';

// import files 
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import './homepage.css'

const Header = () => {
    return ( 
        <Carousel fade >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="md:text-3xl text-sm">Success usually comes to those who are too busy to be looking for it</h3>
                <p className="md:text-xl text-xs">— Henry David Thoreau</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="md:text-3xl text-sm">If you think lifting is dangerous, try being weak. Being weak is dangerous</h3>
                <p className="md:text-xl text-xs">— Bret Contreras</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="md:text-3xl text-sm">Things may come to those who wait, but only the things left by those who hustle</h3>
                <p className="md:text-xl text-xs">— Abraham Lincoln</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default Header;