import React from 'react';

function Footer() {
    return ( 
        <footer className='bg-light text-center text-lg-start'>     
        <div className='container border-top mt-5 pt-3' style={{ backgroundColor: '#f8f9fa' }}> 
            <div className='row'>
                <div className='col-3'>
                    <img src="media\images\logo.png" style={{ width: '70%' }} /> 
                        <p> &copy; 2023 Your Company Name. All rights reserved.</p> 
                        {/* <p> Making the world a better place through constructing elegant hierarchies.</p>  */} 

                </div>
                <div className='col-3 '>
                    <p>Company Info</p>
                    <a href='' >About Us </a>  <br /> <br />
                    <a href='' >Careers </a>    <br />   <br /> 
                    <a href='' >Press   </a>    <br />  <br /> 


                </div>
                <div className='col-3'>
                    <p>Support</p>
                    <a href='' >About Us </a>   <br /> <br /> 
                    <a href='' >Careers </a>    <br />   <br />
                    <a href='' >Press   </a>    <br />  <br /> 

                </div>
                <div className='col-3'>
                    <p>Contact</p>
                    <a href='' >About Us </a>  <br /> <br /> 
                    <a href='' >Careers </a>    <br />   <br />
                    <a href='' >Press   </a>    <br />  <br /> 


                </div> 
            </div> 

            <div className='row mt-4 '> 
                <p> 
                    Company Info :- TradeHub is a modern trading and investment platform dedicated to empowering individuals and businesses with seamless access to financial markets. We provide innovative trading solutions, real-time market insights, and advanced analytical tools that help investors make informed decisions. Our mission is to simplify trading, enhance financial growth, and create opportunities for everyone to participate confidently in global markets. At TradeHub, we combine technology, security, and expertise to deliver a reliable platform where users can trade, invest, and grow their wealth efficiently.  </p> </div> 

        </div> 
    </footer> 
    );
}

export default Footer; 