// import pakages
import React from 'react';
import { useParams } from 'react-router';

// import files
import Navigation from '../../shared/Navbar/Navbar';
import homebg from '../images/hm-bg.png'
import { serviceData } from './data.json';


const ServiceDetails = () => {
    // get id from route 
    const {id} = useParams();
    
    // filter spacific service 
    const singleService = serviceData.filter(service => service.id == id);
    const {img, name, description, price, duration, day} = singleService[0];

    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            <div className="md:my-20 my-10 container md:flex service-details-part">
                <img src={img} alt=""  className="details-img"/>
                <div className="md:p-12 p-9 details-align">
                    <h1 className="md:text-4xl text-3xl text-yellow-400 font-bold">{name}</h1>
                    <p className="md:text-2xl text-xl md:mt-4 mt-2 text-gray-300 details-des font-semibold">{description}</p>
                    <div className="flex justify-between container md:mt-5 mt-3">
                        <div>
                            <p className="md:text-xl text-lg details-part font-semibold"><i class="fas fa-clock"></i> {duration}</p>
                            <p className="md:text-xl text-lg details-part font-semibold"><i class="fas fa-calendar-alt"></i> {day}</p>
                        </div>
                        <div>
                            <p className="md:text-xl text-lg details-part"><i class="fas fa-money-bill-alt"></i> {price}</p>
                            <button className="visit-btn rounded-full font-semibold">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceDetails;