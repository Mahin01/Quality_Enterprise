import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {

    // You might need to bring in context or state here if the theme is dynamically managed.
    // const { theme } = useContext(ThemeContext); 
    // This is just a placeholder example.

    // **IMPORTANT:** Replace 'bg-base-100' and 'text-primary' below with the actual colors 
    // from your "earlier color theme." For example:
    // - Darker Navbar: 'bg-neutral' or 'bg-gray-800'
    // - New Primary Color: 'text-secondary' or 'text-indigo-400'

    return (
        <>
            {/* - bg-base-100: Change this to the navbar's background color from the old theme (e.g., 'bg-neutral' for a dark theme).
            */}
            <div className="navbar bg-gray-900 shadow-2xl w-full top-0 border-b border-amber-500/40mx-auto text-amber-400">
                <div className="navbar-start">
                    {/* Hamburger Menu for Small Screens */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        {/* Dropdown Menu */}
                        {/* - bg-base-100: Change this to match the dropdown background color from the old theme.
                        */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* - hover:text-primary: Change this to the *accent/primary* color from the old theme (e.g., 'hover:text-secondary' or 'hover:text-amber-400'). 
                                  Keep 'hover:bg-transparent' unless the old theme used a hover background.
                            */}
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/services"}>Services</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/products"}>Products</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>

                {/* Brand Logo - No change needed here for color theme relevance other than surrounding text color */}
                    <a href="/"><img className='w-12 h-12 px-2' src="logo.png" alt="Brand Logo" /></a> 
                    {/* - text-xl font-bold uppercase: Add text color if the navbar background is not 'base-100' and text visibility is an issue.
                        - Example: '<span className="text-xl font-bold uppercase text-white">' for a dark background.
                    */}
                    <span className="text-xl font-bold uppercase">Quality Enterprise</span>
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* - hover:text-primary: Change this to the *accent/primary* color from the old theme.
                        */}
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/services"}>Services</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/products"}>Products</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
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