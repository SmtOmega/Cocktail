import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                
                <ul className="links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar