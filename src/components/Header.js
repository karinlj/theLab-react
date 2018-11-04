import React from 'react';
import Boozang from '../img/boozang.png';

const Header = () => { //UI component
    return (
        <div className="header">
            <div className="header-section">
                <div className="container">
                    <div className="row justify-content-end">
                        <ul>
                            <li>Powered by  &nbsp;   <a href="https:boozang.com">
                                <img src={Boozang} alt="boozang logo" /><br />
                                <h3 className="text-white">Try it out now!</h3></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header