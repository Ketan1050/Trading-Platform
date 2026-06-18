import React from 'react';

function Footer() {
    return ( 
        <footer className='bg-light text-center text-lg-start'>     
        <div className='container border-top mt-5 pt-3' style={{ backgroundColor: '#f8f9fa' }}> 
            <div className='row'>
                <div className='col-3'>
                    <img src="media\images\logo.svg" style={{ width: '50%' }} /> 
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
                    Company Info </p> </div> 

        </div> 
    </footer> 
    );
}

export default Footer; 