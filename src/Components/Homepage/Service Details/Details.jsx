import React from 'react';
import { useLocation } from 'react-router';

const Details = () => {

    const location = useLocation
    const { from } = location.state;
    console.log("hell0", from)
    
    console.log("nice")
    return ( 
        <div>hello chandan</div>
     );
}
 
export default Details;