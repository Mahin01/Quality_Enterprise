import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // --- Submenu Definitions ---

    // Define the submenu items for Services
    const serviceSubmenu = [
        { name: 'Industrial Equipment Supply', path: '/services/industrial_equipment_Supply' },
        { name: 'Operational Excellence & Efficiency', path: '/services/operational_excellence_service' },
        { name: 'MEP Works & Engineering Solutions', path: '/services/MEP_Works_&_engineering_solutions' },
        { name: 'Calibration & Compliance Services', path: '/services/calibration&compliance' },
    ];
    
    // Define the submenu items for Products
    const productSubmenu = [
        { name: 'Valves & Flow Control Equipment', path: '/products/Valves&Flow_Coontrol_Equipments' },
        { name: 'Sealing Solutions – Gaskets, O-Rings & More', path: '/products/Sealing_Solutions' },
        { name: 'Conveyor Belts & Accessories', path: '/products/Conveyor_Belts' },
        { name: 'Spare Parts & Accessories', path: '/products/Spare_Parts&Accessories' },
        { name: 'Plastic & Rubber Engineering Materials', path: '/products/Plastic_Parts&Rubber_Engineering_Materials' },
    ];

    // Define the reusable link classes
    const linkClasses = 'hover:bg-transparent hover:text-amber-400 text-white';

    return (
        <>
            {/* Main Navbar - Dark Gray 900 Background, Amber 400 Text */}
            <div style={{backgroundColor : "#1A364F"}} className="navbar shadow-2xl w-full top-0 border-b border-amber-500/40 mx-auto text-amber-400 z-60">
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
                            
                            {/* Nested Submenu for Services (Small Screens) */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between text-amber-400`}>
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2 bg-gray-700"> {/* Services Nested List */}
                                    {serviceSubmenu.map((item) => (
                                        <li key={item.path}>
                                            <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Nested Submenu for Products (Small Screens) */}
                            <li tabIndex={0}>
                                <a className={`${linkClasses} justify-between text-amber-400`}>
                                    Products
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </a>
                                <ul className="p-2 bg-gray-700"> {/* Products Nested List */}
                                    {productSubmenu.map((item) => (
                                        <li key={item.path}>
                                            <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            
                            <li><Link className={linkClasses} to={"/about"}>About</Link></li>
                            <li><Link className={linkClasses} to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <a href="/"><img className='w-32 h-24' src="/logo.png" alt="Brand Logo" /></a> 
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                        
                        {/* Desktop Hover Submenu for Services */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1 text-amber-400`}> 
                                <span>Services</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="absolute hidden group-hover:block p-2 bg-gray-800 z-20 shadow-xl rounded-box top-full left-0 w-80"> 
                                {serviceSubmenu.map((item) => (
                                    <li key={item.path}>
                                        <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Desktop Hover Submenu for Products */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1 text-amber-400`}> 
                                <span>Products</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="absolute hidden group-hover:block p-2 bg-gray-800 z-20 shadow-xl rounded-box top-full left-0 w-80"> 
                                {productSubmenu.map((item) => (
                                    <li key={item.path}>
                                        <Link className={linkClasses} to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        
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