import React from 'react';

function Education() {
    return ( 
        <div className='container p-2  mt-5'> 
            <div className='row'> 
                <div className='col-6'> 
                    <img src = 'media/images/education.svg' style ={{width:'80%'}} alt = 'Education' /> 
                    
                </div> 
                <div className='col-6 p-10 mt-5'> 
                    <h3 style={{textAlign: 'center'}}> Education </h3> 
                    <p> We provide a wide range of educational resources to help you learn about investing and trading. Our resources include articles, videos, webinars, and more. </p> 
                        <ul> 
                            <li> Beginner's Guide to Investing </li> 
                            <li> Advanced Trading Strategies </li> 
                            <li> Market Analysis Techniques </li> 
                        </ul> 
                     </div> 
            </div> 
        </div> 
     ); 
}

export default Education; 