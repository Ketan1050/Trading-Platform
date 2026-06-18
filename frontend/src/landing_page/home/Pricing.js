import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 mt-5'> 
            <div className='row'> 
                <div className='col-4'> 
                    <h3 className='mb-3'> Pricing </h3> 
                    <p> We offer competitive pricing for our trading platform, with no hidden fees or commissions. Our pricing is transparent and easy to understand, so you can focus on trading without worrying about costs. </p>
                </div> 
                <div className='col-2'></div> 
                <div className='col-6'> 
                    <div className='row'> 
                        <div className='col-6 border p-4'> 
                            <h1 style={{textAlign: 'center'}}>0</h1> 
                            <p style={{textAlign: 'center'}}> Commission on Stocks and ETFs </p>
                        </div> 
                        <div className='col-6 border p-4'> 
                            <h1 style={{textAlign: 'center'}}>0.25%</h1> 
                            <p style={{textAlign: 'center'}}> Commission on Options </p>
                        </div>
                            </div> 
                </div> 
            </div> 
        </div> 
     );
}

export default Pricing; 