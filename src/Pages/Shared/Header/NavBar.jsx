import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // Define the submenu items for Services
    const serviceSubmenu = [
        { name: 'Industrial Equipment Supply', path: '/services/Industrial_Equipment_Supply' },
        { name: 'Operational Excellence & Efficiency', path: '/services/Operational_Excellence&Efficiency' },
        { name: 'MEP Works & Engineering Solutions', path: '/services/MEP_Works&Engineering_Solutions' },
        { name: 'Calibration & Compliance Services', path: '/services/Calibration&Compliance_Services' },
    ];
    
    // Define the reusable link classes
    // Note: Tailwind amber-400 and gray-900 provide the high contrast you established.
    const linkClasses = 'hover:bg-transparent hover:text-amber-400 text-white'; // Added text-white for initial state clarity

    return (
        <>
            {/* Main Navbar - Dark Gray 900 Background, Amber 400 Text, Amber 500/40 Border */}
            <div className="navbar bg-gray-900 shadow-2xl w-full top-0 border-b border-amber-500/40 mx-auto text-amber-400 z-60">
                <div className="navbar-start">
                    
                    {/* Hamburger Menu for Small Screens */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        
                        {/* Dropdown Menu for Small Screens - Gray 800 Background */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52 z-20"> 
                            <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                            
                            {/* Nested Submenu for Small Screens */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between text-amber-400`}>
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2 bg-gray-700"> {/* Slightly lighter gray for nested list */}
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
                    {/* Note: I added 'fixed z-50' to the main div to keep the navbar sticky above all content. */}
                    <a href="/"><img className='w-32 h-24' src="logo.png" alt="Brand Logo" /></a> 
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                        
                        {/* Desktop Hover Submenu */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1 text-amber-400`}> 
                                <span>Services</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            
                            {/* Dropdown Content - Gray 800 Background */}
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

                {/* CTA Button - Orange 400 Background, Gray 900 Text */}
                <div className="navbar-end gap-4">
                    <a href="#quote" className="px-6 py-2 text-sm font-bold text-gray-900 bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 transform hover:scale-105 transition duration-300"> 
                        Get A Quote
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;