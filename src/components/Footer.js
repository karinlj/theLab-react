import React from 'react';
import Boozang from '../img/boozang.png';

const Footer = () => { //UI component
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul>
                            <li><h2 className="thelab">theLab</h2> powered by &nbsp; <a href="https://boozang.com">
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