import React, {useState, useEffect}from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Header.scss'
import logo from '../../Utils/imgs/logo01.png';

const Header = () => {

    const [headerShadow, setHeaderShadow] = useState(false);
    const [company, setCompany] = useState(false);
    const [learn, setLearn] = useState(false);
    const [legal, setLegal] = useState(false);

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

    const setCompanyDD = () => {

        if(!company) {
            setCompany(!company);
        }
        else{
            setCompany(!company);
        }

        if(learn){
            setLearn(!learn);
        }

        if(legal){
            setLegal(!learn);
        }
    }

    const setLearnDD = () => {

        if(!learn) {
            setLearn(!learn);
        }
        else {
            setLearn(!learn);
        }

        if(company){
            setCompany(!company);
        }

        if(legal){
            setLegal(!legal);
        }
    }

    const setLegalDD = () => {

        if(!legal) {
            setLegal(!legal);
        }
        else {
            setLegal(!legal);
        }

        if(company){
            setCompany(!company);
        }

        if(learn){
           setLearn(!learn);
        }
    }


    return ( 
        <header className={headerShadow ? 'HeaderShadow' : null}>
            <div className="LogoAndNav">
                <img src={logo} alt="logo"></img>

                <nav>
                    <p>Home</p>
                    <div onClick={setCompanyDD}>
                        <p>Company</p>   
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>

                        <div className={company ? "DropdownContent DropdownShow" : "DropdownContent"}>
                            <p>About</p>
                            <p>Newsroom</p>
                            <p>Careers</p>
                            <p>Partners</p>

                        </div>
                    </div>
                    <div onClick={setLearnDD}>
                        <p>Learn</p> 
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>
                            
                        <div className={learn ? "DropdownContent DropdownShow" : "DropdownContent"}>
                            <p>Blog</p>
                            <p>Guides</p>
                            <p>Help Center</p>

                        </div>
                    </div>
                   
                    <div onClick={setLegalDD}>
                        <p>Legal</p> 
                        <FontAwesomeIcon icon={faChevronDown} className="HeaderIcon"/>
                           
                        <div className={legal? "DropdownContent DropdownShow" : "DropdownContent"}>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Trademarks</p>

                        </div>
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