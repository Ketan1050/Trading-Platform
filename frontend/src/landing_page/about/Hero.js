import React from 'react'; 

function Hero() { 
    return ( 
        <div className="container"> 
            <div className='row'>
                <div className='col-md-12 text-center mt-4'> 
                    <h1>About Us</h1>
                    <p>Welcome to our company!</p>
                </div>
            </div> 

            <div className='row mt-4 mt-5 border-top'> 
                <div className='col-6 p-4' style={{textAlign: 'justify'}}> 
                    <p>Learn more about our mission and values. At <b>Trade Hub</b>, we are a trusted trading company dedicated to providing high-quality products and reliable trading solutions to customers across domestic and international markets. With a strong commitment to excellence, integrity, and customer satisfaction, we specialize in sourcing, importing, exporting, and distributing a wide range of products to meet diverse industry needs. Our experienced team works closely with suppliers and clients to ensure competitive pricing, consistent quality, and timely delivery. By building long-term partnerships and embracing innovation, we strive to create value for our customers while contributing to sustainable business growth. At [Company Name], our goal is to connect markets, foster strong business relationships, and deliver excellence in every transaction. 
                    </p>
                </div>
                <div className='col-6 p-4' style={{textAlign: 'justify'}} > 
                    <p>Discover how we can help you achieve your goals. At <b>Trade Hub</b>, we are a trusted trading company dedicated to providing high-quality products and reliable trading solutions to customers across domestic and international markets. With a strong commitment to excellence, integrity, and customer satisfaction, we specialize in sourcing, importing, exporting, and distributing a wide range of products to meet diverse industry needs. Our experienced team works closely with suppliers and clients to ensure competitive pricing, consistent quality, and timely delivery. By building long-term partnerships and embracing innovation, we strive to create value for our customers while contributing to sustainable business growth. At [Company Name], our goal is to connect markets, foster strong business relationships, and deliver excellence in every transaction. </p> 
                </div> 
            </div>
        </div>
    ); 
} 
export default Hero; 