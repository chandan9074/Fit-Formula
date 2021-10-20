import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import Navigation from '../../shared/Navbar/Navbar';
import Details from './Details';
import homebg from '../images/hm-bg.png'
import { serviceData } from './data.json';


const ServiceDetails = (props) => {

    // const [loadServices , setLoadServices] = useState([]);
    // const [ services ] = useServices();
    // console.log("krishno", services);
    const { services } = props;
    const {id} = useParams();
    const singleService = serviceData.filter(service => service.id == id);
    const {img, name, description, price, duration, day} = singleService[0];
    console.log(services)

    // useEffect(()=>{
    //     props.handleReload();
    // }, [])


    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            <div className="my-20 container flex service-details-part">
                <img src={img} alt=""  className="details-img"/>
                <div className="p-12 details-align">
                    <h1 className="text-4xl text-yellow-400 font-bold">{name}</h1>
                    <p className="text-2xl mt-4 text-gray-300 details-des font-semibold">{description}</p>
                    <div className="flex justify-between container mt-5">
                        <div>
                            <p className="text-xl details-part font-semibold"><i class="fas fa-clock"></i> {duration}</p>
                            <p className="text-xl details-part font-semibold"><i class="fas fa-calendar-alt"></i> {day}</p>
                        </div>
                        <div>
                            <p className="text-xl details-part"><i class="fas fa-money-bill-alt"></i> {price}</p>
                            <button className="visit-btn rounded-full font-semibold">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceDetails;