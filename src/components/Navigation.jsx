
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
const currentPage = useLocation().pathname;

    return (
        <nav>
            <ul className = "nav-list">
                <li>
                    <Link to="/" className={currentPage === '/' ? 'active' : ' '}>About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio" className={currentPage === '/portfolio' ? 'active' : ' '}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" className={currentPage === '/contact' ? 'active' : ' '}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className={currentPage === '/resume' ? 'active' : ' '}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;