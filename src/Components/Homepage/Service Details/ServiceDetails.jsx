import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import Details from './Details';


const ServiceDetails = () => {

    const [loadServices , setLoadServices] = useState([]);
    const [services] = useServices();
    const {id} = useParams();
    // console.log(id)
    console.log(services);

    useEffect(()=>{
        // const service = services.find(service=> service.id == id)
        // console.log("ajsdhfkajsdhf", service);
        fetch("./fake.json")
            .then(res => res.json())
            .then(res => console.log("alkdfjalsdaksd",res))
    }, [])

    return ( 
        <div>
            {
                // loadServices.map(service => {service.id===id ? <Details /> : null })
            }
        </div>
     );
}
 
export default ServiceDetails;