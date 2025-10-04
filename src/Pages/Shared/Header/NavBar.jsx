import React from 'react'

function NavBar() {
    return (
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1 gap-2">
                    <img 
                        src="logo.jpg" 
                        alt="Brand Logo" 
                        className="h-16 w-16 object-contain"
                    />
                    <span className="text-xl font-bold">Quality Enterprise</span>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                        </button>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default NavBar;
