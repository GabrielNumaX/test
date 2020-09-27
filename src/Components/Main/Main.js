import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Main.scss';

import cellPhone from '../../Utils/imgs/cellPhone.png';

const Main = () => {
    return ( 
        <div className="Main">

            <div className="MainLeft">
                
                <h1> The Most Powerful Checking Account</h1>

                <p>Our checking account gives you higher returns
                    than a savings account with no hidden fees.</p>

                <form>
                    <FontAwesomeIcon icon={faEnvelope} className="FormIcon"/>

                    <input type="text" placeholder="Enter Email Address"></input>
                    
                    <input type="submit" value="Join Now"></input>
                </form>

            </div>

            <div className="MainRight">

                <img src={cellPhone} alt="cell phone"></img>

            </div>


        </div>
     );
}
 
export default Main;