import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import Navigation from '../../shared/Navbar/Navbar';
import Details from './Details';


const ServiceDetails = (props) => {

    // const [loadServices , setLoadServices] = useState([]);
    const [ services ] = useServices();
    console.log("krishno", services);
    // const { services } = props;
    const {id} = useParams();
    const singleService = services.filter(service => service.id == id);
    // const {img} = singleService[0];

    // useEffect(()=>{
    //     props.handleReload();
    // }, [])


    return ( 
        <div>
            <Navigation />
            <div>
                {/* <img src={img} alt="" /> */}
            </div>
        </div>
     );
}
 
export default ServiceDetails;