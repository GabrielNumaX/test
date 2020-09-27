import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Card02.scss';

import card03 from '../../Utils/imgs/card03.jpg'

const Card03 = () => {
    return ( 
        <div className="Card02">
            <div className="CardDesc">

                <img src={card03} alt="card"></img>

                <h5>BASIC</h5>
                <p>1.15%<span>1</span></p>

                <div>
                    <h6>3%</h6>
                    <p>cash back</p>
                </div>
            </div>

            <div className="CardBtn">
                <div className="BtnCol">

                    <div className="SpotsRow">
                        <p className="Spots">10000</p>
                        <p className="SpotsLeft">10000 spots left</p>
                    </div>

                    <div className="Bar">
                        
                    </div>

                    <button>Coming Soon</button>
                </div>
            </div>

            <div className="Includes">

                <h5>INCLUDES</h5>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>Free Debit Card</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>1.15%<span>3</span> Bonus Rate Checking Account</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>3% Cash back on brands you love</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>Free Cash Withdrawals</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>Phone &amp; Chat Support</p>
                </div>

                <p className="Fund">Fund your account with a minimum opening deposit 
                    of <strong>$0.</strong></p>
            </div>

            <div className="Membership">

                <div>
                    <FontAwesomeIcon icon={faDollarSign} className="Icon"/>
                </div>

                <p>No Membership Fee</p>

                <h4>Free Forever</h4>
                
            </div>


        </div>
     );
}
 
export default Card03;