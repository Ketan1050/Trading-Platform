import React from 'react';

function Awards() {
    return (
        <div className = 'container p-5'>   
            <div className = 'row mt-5 mb-5'> 
                <div className = 'col-6 mb-5 mt-5 '> 
                    <img src = 'media/images/largestBroker.svg' alt = 'Largest Broker' /> 
                </div> 
                <div className='col-6 mt-5 p-5'>
                    <h2 style={{textAlign: 'center'}}> Largest Broker in the World </h2>  
                    <p> We are proud to be the largest broker in the world, with over 10 million customers and $1 trillion in assets under management. </p> 
                    <div className='row'>
                        <div className= 'col-6' mt-5> 
                            <ul>
                                <li> 10 Million Customers </li>
                                <li> $1 Trillion in Assets Under Management </li>
                                <li> 100+ Countries Served </li> 
                            </ul>
                        </div>
                        <div className= 'col-6' > 
                            <ul>
                                <li> 24/7 Customer Support </li>
                                <li> Competitive Pricing </li>
                                <li> Advanced Trading Tools </li>
                            </ul>
                        </div>
                    </div>
                <img src = 'media/images/pressLogos.png' alt = 'Awards' width = '90%' /> 
                </div> 
            </div>
        </div> 
    );
}

export default Awards; 