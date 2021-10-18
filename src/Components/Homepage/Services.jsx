// import pakages
import React from 'react';
import { Link } from 'react-router-dom';

//import files

import './homepage.css';

const Services = (props) => {
    const {name, img, description} = props.service;
    return ( 
        <div className="service-card pb-4 flex flex-col items-center">
            <img src={img} alt="" className="service-card-img" />
            <div className="px-4 pt-2 service-details">
                <h1 className="text-3xl font-bold service-title">{name}</h1>
                <h3 className="text-xl">{description}</h3>
            </div>
            <Link to="" className="visit-btn rounded-full font-semibold">Details</Link>
        </div>
     );
}
 
export default Services;