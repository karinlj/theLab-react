import React from 'react';
import './Test.scss';

const CounterNav = (props) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{' '}
                <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
    );
}
export default CounterNav