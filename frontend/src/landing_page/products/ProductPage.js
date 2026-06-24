import React from 'react'; 
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';  
import Universe from './Universe'; 

function ProductPage() {
    return (
        <div className="container">
            {/* <h1>Products Page</h1> */}
            <Hero />
            <LeftSection imageURL="./media/images/kite.png"
                productName="Kite"
                productDescription="Product description goes here."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#" />  

                <RightSection imageURL="./media/images/kite.png" 
                productName="Console" 
                productDescription="Product description goes here." 
                learnMore="#" />  

                <LeftSection imageURL="./media/images/kite.png"
                productName="Kite"
                productDescription="Product description goes here."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#" /> 
                <RightSection imageURL="./media/images/varsity.png" 
                productName="Console" 
                productDescription="Product description goes here." 
                learnMore="#" />  

                <LeftSection imageURL="./media/images/kite.png"
                productName="Kite"
                productDescription="Product description goes here."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#" />  
                

                <Universe /> 

        </div> 
    );
}

export default ProductPage; 