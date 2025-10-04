import React from 'react'

function NavBar() {
    return (
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1 gap-2">
                   <a href="/"> 
                    <img 
                            src="logo.jpg" 
                            alt="Brand Logo" 
                            className="h-16 w-16 object-contain"
                        />
                    </a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>  
                    <li><a href='/services'>Services</a></li>
                    <li><a>Products</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default NavBar;
