// import pakages
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import files
import Navigation from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import homebg from './images/hm-bg.png';
import './homepage.css';
import Header from './Header';
import useServices from '../../hooks/useServices';
import Services from './Services';
import f_1 from './images/f-1.jpg'; 
import f_2 from './images/f-2.jpg'; 
import f_3 from './images/f-3.jpg'; 
import f_4 from './images/f-4.jpg'; 
import f_5 from './images/f-5.jpg'; 
import f_6 from './images/f-6.jpg'; 
import f_7 from './images/f-7.jpg'; 
import o_1 from './images/o-1.jpg'; 
import o_2 from './images/o-2.jpg'; 


const Homepage = () => {
    const [services] = useServices();
    console.log("chandan",services);
    

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
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h1 className="text-gray-200">Services</h1>
                        <div className="hm-topic-underline"></div>
                    </div>
                    <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {services.map(service => <Services key={service.id} service={service} />)}
                </div>
            </section>

            {/* food part  */}

            <section className="food-part container mt-8">
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h1 className="text-gray-200">Healthy Food</h1>
                        <div className="hm-topic-underline"></div>
                    </div>
                    <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={f_5} alt="f_1" className="w-full food-big food-img" />
                            <img src={f_3} alt="f_1" className="w-full mt-2 food-img" />
                        </div>
                        <div className="col-md-4">
                            <img src={f_1} alt="f_1" className="w-full food-img"/>
                            <img src={f_2} alt="f_1" className="w-full w-full mt-2 food-img"/>
                            <img src={f_4} alt="f_1" className="w-full w-full mt-2 food-img"/>
                        </div>
                        <div className="col-md-4">
                            <img src={f_6} alt="f_1" className="w-full food-big food-img"/>
                            <img src={f_7} alt="f_1" className="w-full w-full mt-2 food-img"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* offer part  */}

            <section className="offer-part container mt-8">
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h1 className="text-gray-200">Spacial Offer</h1>
                        <div className="hm-topic-underline"></div>
                    </div>
                    <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
                </div>
                <div>
                    <img src={o_1} alt="o-1" className="offer-img-1 rounded-full" />
                    <img src={o_2} alt="o-2" className="offer-img-2 rounded-full"/>
                    <div className="bg-gray-600 offer-des flex flex-col items-center">
                        <h1 className="md:text-2xl text-xl font-bold text-gray-300">MONTHLY</h1>
                        <p className="md:text-3xl text-2xl font-extrabold text-gray-300">30%</p>
                        <Link to="" className="visit-btn p-2 rounded-lg font-semibold">See more</Link>
                    </div>
                </div>

            </section>

            {/* footer part 
            <div className="footer-part" >
            <Footer />
            </div> */}
        </div>
     );
}
 
export default Homepage;