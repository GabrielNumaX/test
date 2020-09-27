import React from 'react';

import '../../Sass/Logos.scss';

import sequoia from '../../Utils/imgs/sequoia.png';
import consensys from '../../Utils/imgs/consensys.png';
import polychain from '../../Utils/imgs/polychain.png';


const Logos = () => {
    return ( 
        <div className="Logos">

            <h3>BACKED BY THE BEST</h3>

            <div>
                <img src={sequoia} alt="logo"></img>
                <img src={consensys} alt="logo"></img>
                <img src={polychain} alt="logo"></img>
            </div>

        </div>
     );
}
 
export default Logos;