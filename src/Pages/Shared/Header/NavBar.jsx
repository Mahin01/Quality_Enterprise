import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const NavBar = () => {

    // Define the submenu items for Services
    const serviceSubmenu = [
        { name: 'Industrial Equipment Supply', path: '/services/Industrial_Equipment_Supply' },
        { name: 'Operational Excellence & Efficiency', path: '/services/Operational_Excellence&Efficiency' },
        { name: 'MEP Works & Engineering Solutions', path: '/services/MEP_Works&Engineering_Solutions' },
        { name: 'Calibration & Compliance Services', path: '/services/Calibration&Compliance_Services' },
    ];
    
    // Define the reusable link classes
    const linkClasses = 'hover:bg-transparent hover:text-amber-400';

    return (
        <>
            <div className="navbar bg-gray-900 shadow-2xl w-full top-0 border-b border-amber-500/40 mx-auto text-amber-400">
                <div className="navbar-start">
                    
                    {/* Hamburger Menu for Small Screens (Keep as is for mobile tap behavior) */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        
                        {/* Dropdown Menu for Small Screens */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52 z-20"> 
                            <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                            
                            {/* SUBMENU FOR SMALL SCREENS (Opens on click/tap) */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between`}>
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2 bg-gray-700">
                                    {serviceSubmenu.map((item) => (
                                        <li key={item.path}>
                                            <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            
                            <li><Link className={linkClasses} to={"/products"}>Products</Link></li>
                            <li><Link className={linkClasses} to={"/about"}>About</Link></li>
                            <li><Link className={linkClasses} to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <a href="/"><img className='w-32 h-24' src="logo.png" alt="Brand Logo" /></a> 
                </div>

                {/* --- */}

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                        
                        {/* **CRITICAL CHANGE: Submenu for Large Screens (Desktop) - Hover Only** */}
                        {/* 1. Add 'group' class to the parent <li> */}
                        {/* 2. Add 'relative' to position the dropdown correctly */}
                        <li tabIndex={0} className="relative group">
                            {/* The parent <a> tag */}
                            <a className={`${linkClasses} pr-1`}> 
                                <span className='text-amber-400'>Services</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            
                            {/* The nested <ul> is the dropdown content */}
                            {/* 1. Add 'absolute' to take it out of the flow */}
                            {/* 2. Add 'hidden' to hide it by default */}
                            {/* 3. Add 'group-hover:block' to show it on parent hover */}
                            {/* 4. Add 'z-20' for stacking order */}
                            <ul className="absolute hidden group-hover:block p-2 bg-gray-800 z-20 shadow-xl rounded-box top-full left-0 w-52"> 
                                {serviceSubmenu.map((item) => (
                                    <li key={item.path}>
                                        <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        
                        <li><Link className={linkClasses} to={"/products"}>Products</Link></li>
                        <li><Link className={linkClasses} to={"/about"}>About</Link></li>
                        <li><Link className={linkClasses} to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <a href="#quote" className="px-6 py-2 text-sm font-bold text-gray-900 bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 transform hover:scale-105 transition duration-300"> Get A Quote
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;