import { NavLink } from "react-router-dom";
import './Navbar.css';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">Navigation Bar</NavLink>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">Home</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <IoMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;