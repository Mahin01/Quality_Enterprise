import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. 🔥 FIX: Re-import useLocation

// Assuming logo.png is correctly imported or located in the 'public' folder.
// If your logo is in the 'src' folder, you MUST uncomment the import below:
// import logoImage from './logo.png'; 

const NavBar = () => {
    // 2. 🔥 FIX: Calling useLocation to get the current path
    const location = useLocation(); 

    // --- Submenu Definitions ---
    const serviceSubmenu = [
        { name: 'Consultancy & Trainings', path: '/services/consultancy&trainings' },
        { name: 'MEP Works & Engineering Solutions', path: '/services/MEP_Works_&_Engineering_Solutions' },
        { name: 'Calibration & Compliance Services', path: '/services/calibration&compliance' },
    ];

    const productSubmenu = [
        { name: 'Valves & Flow Control Equipment', path: '/products/Valves&Flow_Coontrol_Equipments' },
        { name: 'Sealing Solutions – Gaskets, O-Rings & More', path: '/products/Sealing_Solutions' },
        { name: 'Conveyor Belts & Accessories', path: '/products/Conveyor_Belts' },
        { name: 'Spare Parts & Accessories', path: '/products/Spare_Parts&Accessories' },
        { name: 'Plastic & Rubber Engineering Materials', path: '/products/Plastic_Parts&Rubber_Engineering_Materials' },
    ];

    const linkClasses = 'hover:bg-transparent hover:text-amber-400 text-white';
    const PRIMARY_TEAL = "#1A364F";
    // NOTE: If using the import method, use the imported variable here:
    // const logoSrc = logoImage; 
    // If you prefer the 'public' folder method, the string path is fine:
    const logoSrc = "logo.png"; 

    return (
        <>
            {/* Outer Wrapper */}
            <div 
                style={{ backgroundColor: PRIMARY_TEAL }} 
                className="border-b border-amber-500/40 shadow-lg w-full top-0 text-amber-400 z-50"
            >
                
                {/* Container for Top Row (Mobile Menu | Logo | Empty Space) */}
                {/* 3. ✅ Check: The 'relative' class is correctly on this element, 
                       which serves as the positioning context for the absolute logo. */}
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-28 relative"> 
                    
                    {/* 1. START - Mobile Menu (Dropdown) */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        
                        {/* Dropdown Menu (Mobile) - text-xs applied */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52 text-xs"> 
                            <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                            
                            {/* Services links are now top-level in the mobile menu dropdown */}
                            {serviceSubmenu.map((item) => (
                                <li key={item.path}>
                                    {/* location.pathname is now defined */}
                                    <Link 
                                        className={linkClasses} 
                                        to={item.path} 
                                        style={{ color: location.pathname.startsWith('/services') ? '#fcd34d' : 'inherit' }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {/* Products Submenu (Mobile) - KEPT AS A SUBMENU */}
                            <li tabIndex={0} className="menu-dropdown-toggle">
                                <a className={`${linkClasses} justify-between text-amber-400`}>
                                    Industrial Supplies
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-gray-700">
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

                    {/* 2. CENTER - Brand Logo (Always visible & Centered) */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Link to="/" className="flex items-center">
                            <img 
                                className="w-64 h-36" 
                                // ✅ Used the defined logoSrc variable
                                src={logoSrc} 
                                alt="Brand Logo" 
                            />
                        </Link>
                    </div>

                    {/* 3. END - Empty container to ensure logo stays centered */}
                    <div className="w-10 h-10 lg:w-0 lg:h-0">
                    </div>
                </div>

                {/* Desktop Navbar Links (Centered Below Logo) - Hidden on mobile */}
                <div className="hidden lg:flex justify-center -mt-8 pb-4"> 
                    {/* Menu text-xs applied */}
                    <ul className="menu menu-horizontal px-1 text-xs mx-auto">
                        <li><Link className={linkClasses} to={"/"}>Home</Link></li>
                        
                        {/* Services links are now top-level in the desktop menu */}
                        {serviceSubmenu.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    className={`${linkClasses} ${location.pathname === item.path ? 'text-amber-400' : ''}`} 
                                    to={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Products (Desktop) - KEPT AS A SUBMENU */}
                        <li tabIndex={0} className="relative group">
                            <a className={`${linkClasses} pr-1 text-amber-400`}>
                                <span>Industrial Supplies</span> 
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                </svg>
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
            </div>
        </>
    );
};

export default NavBar;