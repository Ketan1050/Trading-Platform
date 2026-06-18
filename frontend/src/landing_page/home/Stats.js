import React from 'react';

function Stats() {
    return ( 
        <div className = 'container'> 
            <div className = 'row mt-5 mb-5'> 
                <div className = 'col-6'>  
                    <h1 className = 'text-center'>Trust us</h1> 

                        <h2 className = 'mt-5'> Customer Satisfaction </h2> 
                        <p> We are committed to providing our customers with the best possible experience. Our customer satisfaction rating is 4.8 out of 5 stars, and we have a 95% customer retention rate. </p>
                        <h2> Security </h2> 
                        <p> We take security seriously. Our platform is protected by state-of-the-art security measures, and we are constantly monitoring for potential threats. </p> 
                        <h2> Transparency </h2> 
                        <p> We believe in transparency. We provide our customers with clear and concise information about our products and services, and we are always available to answer any questions. </p> 
                    
                </div> 
                <div className = 'col-6 mb-5'>  
                    <img src = 'media/images/ecosystem.png' alt = 'Trust' width = '90%' /> 
                        <div className = 'text-center'>  
                            <a href = '' style={{textDecoration: 'none'}}> Explore Our Products and Services <i class="fa-solid fa-right-long"></i> </a>
                        </div>   
                    </div>
             </div> 
        </div> 
    );
}

export default Stats; 