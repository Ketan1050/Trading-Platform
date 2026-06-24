import React from 'react';

function Universe({imageURL}) {
    return ( 
        // <h1>Universe</h1> 

        <div className = "container"> 
            <h1 className = "text-center">Universe</h1>  
            <div className = "row mt-5 p-5 text-center"> 
                <div className = "col-4"> 
                    <img src = "./media/images/smallcaseLogo.png" /> 
                    <p className = 'text-small text-muted'>Smallcase is a platform</p> 
                </div> 
                <div className = "col-4"><img src = "./media/images/smallcaseLogo.png" /> <p className = 'text-small text-muted'>Smallcase is a platform</p>  </div> 
                <div className = "col-4"><img src = "./media/images/smallcaseLogo.png" /> <p className = 'text-small text-muted'>Smallcase is a platform</p>  </div>   
            </div> 

        
        </div>
     );
}

export default Universe; 