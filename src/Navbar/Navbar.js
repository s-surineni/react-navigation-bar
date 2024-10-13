import { NavLink } from "react-router-dom";
import './Navbar.css';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">Navigation Bar</NavLink>
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">Home</NavLink>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;