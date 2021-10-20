// import pakages
import React from 'react';

// import files 
import fit_formula from '../Navbar/images/fit-formula.png';

const Footer = () => {
    return ( 
        <div className='bg-gray-600 pt-8'>
          <div className='container mx-auto flex justify-around items-center'>
            {/* site name with logo */}
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-3xl text-blue-300 font-semibold pl-2 '>
                <img src={fit_formula} alt="" className="nav-logo" />
              </h3>

              {/* Social Links */}
              <div className='flex items-center justify-center py-4'>
                <i class='fab fa-facebook text-black text-3xl cursor-pointer'></i>
                <i class='fab fa-twitter text-black text-3xl px-6 cursor-pointer'></i>
                <i class='fab fa-linkedin text-black text-3xl cursor-pointer'></i>
              </div>
            </div>
          </div>
          <h3 className='text-lg text-blue-400 text-center'>
            {" "}
            “Nothing truly great comes from a comfort zone”
          </h3>
          <p className='text-black font-normal text-center py-8 m-0'>
            Fit Formula © 2021. All Rights Reserved.
          </p>
      </div>
     );
}
 
export default Footer;