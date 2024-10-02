import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav__logo">Navigation Bar</NavLink>
            </nav>
        </header>
    )
}

export default Navbar;