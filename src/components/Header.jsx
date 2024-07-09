
import Navigation from './Navigation.jsx';
// import Typical from 'react-typical';

const Header = () => {
    return (
        <>
            
            <header>
                <div className="header-container">
                    <h1 className="header-title"> Ralph Molu
                        {/* <Typical
                steps={['Ralph Molu', 1000, 'Welcome to my portfolio', 1000]}
                lopp={Infinity}
                wrapper="p"
                /> */}
                    </h1>
                </div>
                <Navigation />
            </header>
        </>
    );
};

export default Header;