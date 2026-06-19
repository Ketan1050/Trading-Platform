import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';

function ProductPage() {
    return (
        <div className="container">
            <h1>Products Page</h1>
            <Hero />
            <LeftSection imageURL="./media/images/kite.png"
                productName="Kite"
                productDescription="Product description goes here."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#" />
        </div> 
    );
}

export default ProductPage; 