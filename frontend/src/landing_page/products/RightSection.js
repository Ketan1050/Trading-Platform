import React from 'react'; 


function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5 p-5">
            <div className='row' mt-5 p-5>
                <div className='col-6 mt-5 p-5'>
                    <h2>
                        {productName} 
                    </h2>
                        <p>{productDescription}</p>
                            <div className='mb-3'>
                                <a href={learnMore} className='mt-3 mb-3'>Learn More</a> 
                            </div>
                        
                </div>
                    <div className='col-6'>
                        <img src={imageURL} />
                    </div>
            </div>    
        </div> 
    ); 
}
export default RightSection; 
