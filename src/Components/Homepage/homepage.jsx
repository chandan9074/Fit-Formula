// import pakages
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import files
import Navigation from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import homebg from './images/hm-bg.jpg';
import './homepage.css';
import Header from './Header';
import useServices from '../../hooks/useServices';
import Services from './Services';

const Homepage = () => {
    const [services] = useServices();
    // console.log("chandan",service);
    

    // useEffect(()=>{
    //     fetch("./fake.json")
    //         .then(res => res.json())
    //         .then(res => console.log("hello", res))
    // }, [])

    return ( 
        <div className="homapage-part">
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            {/* navigation part  */}

            {/* header part  */}
            <Header />

            {/* services part  */}
            <section className="services-part container mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-gray-200">Services</h1>
                    <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {services.map(service => <Services key={service.id} service={service} />)}
                </div>
            </section>

            {/* footer part  */}
            <Footer />
        </div>
     );
}
 
export default Homepage;