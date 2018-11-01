import React from 'react';
import Boozang from '../img/boozang.png';

const Footer = () => { //UI component
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="container">
                    <div className="row align-items-end">
                        <ul>
                            <li><h2 className="thelab">theLab</h2> powered by  <a href="https://boozang.com">
                                <img src={Boozang} alt="boozang logo" />
                            </a>
                            </li>
                            <li className="copy">&copy; 2018 Boozang</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer