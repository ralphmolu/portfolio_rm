import React from 'react';
import Navigation from './Navigation.jsx';
import Typical from 'react-typical';

const Header = () => {
    return (
        <header>
            <h1>
                <Typical
                steps={['Ralph Molu', 1000, 'Welcome to my portfolio', 1000]}
                lopp={Infinity}
                wrapper="p"
                />
                </h1>
            <Navigation />
        </header>
    );
};

export default Header;