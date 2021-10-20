// import pakages
import React, { useEffect, useState } from 'react';
import Navigation from '../shared/Navbar/Navbar';

// import files 
import './product.css'; 
import homebg from "../Homepage/images/hm-bg.png";
import { Link } from 'react-router-dom';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch("./product.json")
        .then(res=>res.json())
        .then(res=>setProduct(res));
    }, [])

    const instrument = product.slice(0, 3);
    const shoes = product.slice(3, 6);
    const pant = product.slice(6, 9);

    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
        <div  className="container mb-5">
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-3xl text-gray-200 font-bold">Equipment</h1>
                    <div className="pro-topic-underline"></div>
                </div>
                <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                instrument.map(instru =>(
                    <div className="bg-gray-600 product-card p-5 rounded-lg">
                        <img src={instru.img} alt="" className="product-img mx-auto" />
                        <h1 className="text-gray-300 product-title text-3xl mt-3" title={instru.name}>{instru.name}</h1>
                        <div className="text-yellow-500 flex justify-between items-center" >
                            <h1 className="text-2xl"><i class="fas fa-money-bill-wave"></i> {instru.price}</h1>
                            <i class="fas fa-arrow-circle-right prod-icon text-3xl"></i>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-3xl text-gray-200 font-bold">Shoes</h1>
                    <div className="pro-topic-underline"></div>
                </div>
                <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                shoes.map(shoe =>(
                    <div className="bg-gray-600 product-card p-5 rounded-lg">
                        <img src={shoe.img} alt="" className="product-img mx-auto" />
                        <h1 className="text-gray-300 product-title" title={shoe.name}>{shoe.name}</h1>
                        <div className="text-yellow-500 flex justify-between items-center" >
                            <h1 className="text-3xl"><i class="fas fa-money-bill-wave"></i> {shoe.price}</h1>
                            <i class="fas fa-arrow-circle-right prod-icon text-3xl"></i>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-3xl text-gray-200 font-bold">Gym Suit</h1>
                    <div className="pro-topic-underline"></div>
                </div>
                <Link to="" className="visit-btn rounded-full font-semibold">See more</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                pant.map(pan =>(
                    <div className="bg-gray-600 product-card p-5 rounded-lg">
                        <img src={pan.img} alt="" className="product-img mx-auto" />
                        <h1 className="text-gray-300 product-title" title={pan.name}>{pan.name}</h1>
                        <div className="text-yellow-500 flex justify-between items-center" >
                            <h1 className="text-3xl"><i class="fas fa-money-bill-wave"></i> {pan.price}</h1>
                            <i class="fas fa-arrow-circle-right prod-icon text-3xl"></i>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
     );
}
 
export default Product;