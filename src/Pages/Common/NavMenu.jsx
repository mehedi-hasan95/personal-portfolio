import React from 'react';
import { Link } from 'react-scroll';

import reasume from '../../assets/images/Reasume of Mehedi Hasan.pdf';

const NavMenu = () => {
    const menu = <>
        <li><Link to="hero" smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to="skills" smooth={true} offset={-100} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} offset={-100} duration={500}>Projects</Link></li>
        <li><Link to="about" smooth={true} offset={-100} duration={500}>About Me</Link></li>
        <li><Link to="contact" smooth={true} offset={-150} duration={500}>Contact</Link></li>
        <li><a href={reasume} download>My Resume</a></li>
    </>
    return (
        <div className="navbar bg-gray-500 text-white fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 text-white rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Mehedi Hasan</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;