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
            <div className="navbar bg-gray-900 shadow-2xl fixed w-full top-0 border-b border-amber-500/40mx-auto text-amber-400">
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
                    <a href="/"><img className='w-12 h-12 px-2' src="logo.jpg" alt="Brand Logo" /></a> 
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
                    <div className="form-control">
                        <div className="relative">
                            {/* - input input-bordered: Change the 'input' class (which controls color) to be theme-relevant.
                                - text-sm: Change the text color if needed (e.g., 'text-white' for dark theme).
                            */}
                            <input type="search" name="q" className="input input-bordered text-sm rounded w-24 md:w-auto h-8 outline-none focus:outline-none" placeholder="Search..." autoComplete="off" />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                {/* - button type="submit": Add a color class to the button/icon if it doesn't stand out (e.g., 'text-gray-300').
                                */}
                                <button type="submit" className="p-1">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                        </div>           
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;