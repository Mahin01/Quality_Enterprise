import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavMenu = () => {

    return (
        <>
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    {/* Hamburger Menu for Small Screens */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        {/* Dropdown Menu */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/services"}>Services</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/products"}>Products</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>

                {/* Brand Logo */}
                    <a href="/"><img className='w-12 h-12 px-2' src="logo.jpg" alt="Brand Logo" /></a> <span className="text-xl font-bold uppercase">Quality Enterprise</span>
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/services"}>Services</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/products"}>Products</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <div className="form-control">
                        <div class="relative">
                            <input type="search" name="q" class="input input-bordered text-sm rounded w-24 md:w-auto h-8 outline-none focus:outline-none" placeholder="Search..." autocomplete="off" />
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" class="p-1">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavMenu;
