//import pakages
import React from 'react';
import Navigation from '../shared/Navbar/Navbar';

//import files
import not_found from "./images/not-found.jpg"

const NotFound = () => {
    return ( 
        <div className="bg-gray-900">
            <Navigation className="bg-red-900" />
            <img src={not_found} alt="not" className="w-full h-screen" />
        </div>
     );
}
 
export default NotFound;