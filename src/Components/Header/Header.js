import React, {useState, useEffect}from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Header.scss'
import logo from '../../Utils/imgs/logo01.png';

const Header = () => {

    const [headerShadow, setHeaderShadow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if(window.scrollY > 90) {
                setHeaderShadow(true)
            }
            else {
                setHeaderShadow(false);
            }

        })
    }, [headerShadow]);


    return ( 
        <header className={headerShadow ? 'HeaderShadow' : null}>
            <div className="LogoAndNav">
                <img src={logo} alt="logo"></img>

                <nav>
                    <p>Home</p>
                    <div>
                        <p>Company</p>   
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>
                    </div>
                    <div>
                        <p>Learn</p> 
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>
                    </div>
                   
                    <div>
                        <p>Legal</p> 
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>
                    </div>
                </nav>
            </div>

            <div className="HeaderBtn">
                <button className="LoginBtn">Login</button>
                <button className="SignupBtn">Signup</button>
            </div>

        </header>
     );
}
 
export default Header;