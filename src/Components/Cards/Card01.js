import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Card01.scss';

import card01 from '../../Utils/imgs/card01.png'

const Card01 = () => {
    return ( 
        <div className="Card01">
            <div className="CardDesc">

                <img src={card01} alt="card"></img>

                <h5>METAL</h5>
                <p>2.15%<span>1</span></p>

                <div>
                    <h6>5%</h6>
                    <p>cash back</p>
                </div>
            </div>

            <div className="CardBtn">
                <div className="BtnCol">

                    <div className="SpotsRow">
                        <p className="Spots">2222 <span>/ 2500 spots</span></p>
                        <p className="SpotsLeft">278 spots left</p>
                    </div>

                    <div className="Bar">
                        <div>

                        </div>
                    </div>

                    <button>Sign Up Now</button>
                </div>
            </div>

            <div className="Includes">

                <h5>INCLUDES</h5>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>Charcoal Black Metal Card</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>2.15%<span>1</span> Bonus Rate Checking Account</p>
                </div>

                <div className="IncludesRow">
                    <FontAwesomeIcon icon={faCheck} className="Icon"/>
                    <p>5% Cash back on brands you love</p>
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
                    of <strong>$1000.</strong> 3 additional free ATM withdrawals per 
                    month from out of network ATMs.</p>
            </div>

            <div className="Membership">

                <div>
                    <FontAwesomeIcon icon={faDollarSign} className="Icon"/>
                </div>

                <p>$11.99/m Membership Fee</p>

                <h4>Free for 6 months</h4>
                <h6>~$72 Savings </h6>
                
            </div>


        </div>
     );
}
 
export default Card01;