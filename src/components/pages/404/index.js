import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function FourZeroFour() {
    return (
        <div className="body bg-purple">
            <div className="stars">
                
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" alt="error" width="300px" />
                    <Link to="/">
                        <a  className="btn-go-home" target="_blank">
                            GO BACK HOME
                        </a>
                    </Link>
                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                    <div className="earth-moon">
                        <img alt="earth" className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img
                            alt="astronaut"
                            className="object_astronaut"
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                            width="140px"
                        />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </div>
    );
}

export default FourZeroFour;
