import React from 'react';
import { Link } from 'react-router-dom';
import reasume from '../../assets/images/Reasume of Mehedi Hasan.pdf';

const NavMenu = () => {
    const menu = <>
        <li><Link to=''>Home</Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Skills</Link></li>
        <li><Link to=''>Projects</Link></li>
        <li><Link to=''>Contact</Link></li>
        <li><a href={reasume} download>My Resume</a></li>
    </>
    return (
        <div className="navbar bg-gray-500 text-white">
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