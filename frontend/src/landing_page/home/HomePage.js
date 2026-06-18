import React from 'react';
import Awards from './Awards'; 
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';

function HomePage() {
    return (
        <div className= 'container' > 
            <div className='row text-center'>  
                <img src = 'media/images/homeHero.png' alt = 'homeHero' className= 'mb-4' />  
          
           <h1 className = 'mt-4'> Invest in Everything </h1> 
           <p> Online Platform for Investing </p> 
           <button className='p-4' style={{width: '200px', margin: ' 0 auto '}}> Sign Up </button> 
 
        </div> 
    </div> 

    ); 
}

export default HomePage; 