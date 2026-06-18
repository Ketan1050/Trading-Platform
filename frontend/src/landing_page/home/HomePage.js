import React from 'react';
import Awards from './Awards'; 
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';

function HomePage() {
    return (
        <div>   
            <Hero />
            <Awards /> 
            <Stats /> 
            <Pricing /> 
            <Education /> 
             
        </div> 

    ); 
}

export default HomePage; 