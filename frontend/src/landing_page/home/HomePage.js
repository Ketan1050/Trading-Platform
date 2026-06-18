import React from 'react';
import Awards from './Awards'; 
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Our Website</h1>
            <Awards /> 
            <Education /> 
            <Hero /> 
            <Pricing /> 
            <Stats /> 

        </div> 

    );
}

export default HomePage; 