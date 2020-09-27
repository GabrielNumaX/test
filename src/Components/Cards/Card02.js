import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Card02.scss';

import card02 from '../../Utils/imgs/card02.png'

const Card02 = () => {
    return ( 
        <div className="Card02">
            <div className="CardDesc">

                <img src={card02} alt="card"></img>

                <h5>PREMIUM</h5>
                <p>1.65%<span>1</span></p>

                <div>
                    <h6>4%</h6>
                    <p>cash back</p>
                </div>
            </div>

            <div className="CardBtn">
                <div className="BtnCol">

                    <div className="SpotsRow">
                        <p className="Spots">2000</p>
                        <p className="SpotsLeft">2000 spots left</p>
                    </div>

                    <div className="Bar">
                        
                    </div>

                    <button>Up Next</button>
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
                    <p>1.65%<span>2</span> Bonus Rate Checking Account</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>4% Cash back on brands you love</p>
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
                    of <strong>$500.</strong> 5 additional free ATM withdrawals per 
                    month from out of network ATMs.</p>
            </div>

            <div className="Membership">

                <div>
                    <FontAwesomeIcon icon={faDollarSign} className="Icon"/>
                </div>

                <p>$6.99/m Membership Fee</p>

                <h4>Coming Soon</h4>
                
            </div>


        </div>
     );
}
 
export default Card02;