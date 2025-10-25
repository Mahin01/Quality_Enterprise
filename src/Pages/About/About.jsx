import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // --- Color Constants (Matching the sub-page theme) ---
    const PRIMARY_TEAL = '#1A364F';
    const DARK_NAVY = '#0F2133';
    const ORANGE_ACCENT_HEX = '#FF8C00'; 

    // --- Submenu Definitions ---
    const serviceSubmenu = [
        { name: 'Industrial Equipment Supply', path: '/services/Industrial_Equipment_Supply' },
        { name: 'Operational Excellence & Efficiency', path: '/services/Operational_Excellence&Efficiency' },
        { name: 'MEP Works & Engineering Solutions', path: '/services/MEP_Works&Engineering_Solutions' },
        { name: 'Calibration & Compliance Services', path: '/services/Calibration&Compliance_Services' },
    ];
    
    const productSubmenu = [
        { name: 'Valves & Flow Control Equipment', path: '/products/valves-flow-control' },
        { name: 'Sealing Solutions – Gaskets, O-Rings & More', path: '/products/sealing-solutions' },
        { name: 'Conveyor Belts & Accessories', path: '/products/conveyor-belts' },
        { name: 'Spare Parts & Accessories', path: '/products/spare-parts' },
        { name: 'Plastic & Rubber Engineering Materials', path: '/products/engineering-materials' },
    ];

    // Define the reusable link classes
    // Use inline style for orange accent on hover, keeping text white otherwise.
    const linkClasses = `text-white hover:bg-transparent transition duration-200`;

    // Define the primary orange style for the main menu items
    const accentStyle = { color: ORANGE_ACCENT_HEX };
    const accentHoverStyle = { color: ORANGE_ACCENT_HEX };


    return (
        <>
            {/* Main Navbar - Primary Teal Background, Orange Accent Text */}
            <div 
                className="navbar shadow-2xl w-full top-0 border-b border-white/10 mx-auto z-60" 
                style={{ backgroundColor: PRIMARY_TEAL, color: 'white' }}
            >
                <div className="navbar-start">
                    
                    {/* Hamburger Menu for Small Screens */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        
                        {/* Dropdown Menu for Small Screens - Dark Navy Background */}
                        <ul 
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 z-20"
                            style={{ backgroundColor: DARK_NAVY }}
                        > 
                            <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                            
                            {/* Nested Submenu for Services (Small Screens) */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between`} style={accentStyle}>
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2" style={{ backgroundColor: PRIMARY_TEAL }}> {/* Primary Teal for nested list */}
                                    {serviceSubmenu.map((item) => (
                                        <li key={item.path}>
                                            <Link className={linkClasses} style={{'--tw-text-opacity': '1'}} to={item.path} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Nested Submenu for Products (Small Screens) */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between`} style={accentStyle}>
                                    Products
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2" style={{ backgroundColor: PRIMARY_TEAL }}> {/* Primary Teal for nested list */}
                                    {productSubmenu.map((item) => (
                                        <li key={item.path}>
                                            <Link className={linkClasses} style={{'--tw-text-opacity': '1'}} to={item.path} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            
                            <li><Link className={linkClasses} to={"/about"}>About</Link></li>
                            <li><Link className={linkClasses} to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <a href="/"><img className='w-32 h-24' src="logo.png" alt="Brand Logo" /></a> 
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className={linkClasses} to={"/"} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Home</Link></li>
                        
                        {/* Desktop Hover Submenu for Services */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1`} style={accentStyle}> 
                                <span>Services</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul 
                                className="absolute hidden group-hover:block p-2 shadow-xl rounded-box top-full left-0 w-80"
                                style={{ backgroundColor: DARK_NAVY }}
                            > 
                                {serviceSubmenu.map((item) => (
                                    <li key={item.path}>
                                        <Link className={linkClasses} style={{'--tw-text-opacity': '1'}} to={item.path} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Desktop Hover Submenu for Products */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1`} style={accentStyle}> 
                                <span>Products</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul 
                                className="absolute hidden group-hover:block p-2 shadow-xl rounded-box top-full left-0 w-80"
                                style={{ backgroundColor: DARK_NAVY }}
                            > 
                                {productSubmenu.map((item) => (
                                    <li key={item.path}>
                                        <Link className={linkClasses} style={{'--tw-text-opacity': '1'}} to={item.path} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        
                        <li><Link className={linkClasses} to={"/about"} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>About</Link></li>
                        <li><Link className={linkClasses} to={"/contact"} onMouseEnter={(e) => e.currentTarget.style.color = ORANGE_ACCENT_HEX} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Contact</Link></li>
                    </ul>
                </div>

                {/* CTA Button - Orange Accent Background, Dark Navy Text */}
                <div className="navbar-end gap-4">
                    <a 
                        href="#quote" 
                        className="px-6 py-2 text-sm font-bold rounded-lg shadow-md hover:scale-105 transition duration-300"
                        style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}
                    > 
                        Get A Quote
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;