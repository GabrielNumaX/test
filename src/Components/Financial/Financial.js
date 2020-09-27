import React from 'react';

import '../../Sass/Financial.scss';


const Financial = () => {
    return ( 
        <div className="Financial">

            <div className="FinancialTxt">
                <h4>Start Saving for a rainy day fund</h4>

                <h3>Use Our Checking Account to Achieve Your Financial Goals</h3>

                <p>
                    With the latest Federal rate cut, the largest banks are offering close 
                    to 0% APY on their checking and savings accounts. OnJuno checking will 
                    earn you more than 20x the national average*. Deposits up to $250,000 
                    are FDIC insured through our banking partner Evolve Bank and Trust. 
                    Grow your idle money faster with our checking account and start saving 
                    towards a rainy day fund, big expense, or vacation. 
                </p>
            </div>

            <div className="FinancialPercentage">

                <p className="Percentage">2.15</p>

                <div>
                    <p className="PercentageSign">%</p>
                    <p className="Rates">Bonus Rates On Deposits.</p>

                </div>
            </div>

        </div>
     );
}
 
export default Financial;