import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5 p-5"> 
            <div className='row' mt-5 p-5>
                <div className='col-6'>
                    <img src={imageURL} />

                </div>
                <div className='col-6 mt-5 p-5'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='mb-3'> <a href={tryDemo} >Try Demo</a>
                        <a href={learnMore} className='margin-left mt-3 mb-3' style={{ marginLeft: '50px' }} >Learn More</a>  </div>



                    <a href={googlePlay} > <img src="./media/images/googlePlayBadge.svg" alt="Google Play Store" /> </a>
                    <a href={appStore} > <img src="./media/images/appStoreBadge.svg" alt="Apple App Store" /> </a>
                </div>
            </div>
        </div> 
    );

}

export default LeftSection; 