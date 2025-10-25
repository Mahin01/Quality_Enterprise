import React from 'react';

const Footer = () => {
    
    // --- Color and Style Constants (Consistent Theme) ---
    const PRIMARY_TEAL = '#1A364F'; 
    const DARK_NAVY = '#0F2133';    
    const ORANGE_ACCENT_HEX = '#FF8C00'; 
    const ACCENT_TEXT_COLOR = ORANGE_ACCENT_HEX;

    return (
        <footer className="p-10 pt-16 shadow-2xl text-white" style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-8">

                {/* 1. About Info Section */}
                <div className="w-full md:w-1/3 space-y-3">
                    <h3 className="text-2xl font-extrabold mb-4 inline-block" style={{ color: ACCENT_TEXT_COLOR }}>About Us</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Quality Enterprise is a trusted industrial partner, specializing in **equipment supply**, **calibration services**, and **Operational Excellence** solutions. Founded by industry veterans with over **40 years of combined experience**, we ensure your operations are efficient and future-ready.
                    </p>
                    <p className="text-xs pt-4 text-gray-400">
                        We deliver confidence, efficiency, and continuous growth.
                    </p>
                </div>

                {/* 2. Quick Links & Contact Details */}
                <div className="flex flex-col sm:flex-row justify-around w-full md:w-1/3 space-y-10 sm:space-y-0 sm:space-x-8">

                    {/* Quick Navigation Links */}
                    <nav className="flex flex-col space-y-3">
                        <h3 className="text-xl font-bold mb-2" style={{ color: ACCENT_TEXT_COLOR }}>Site Links</h3>
                        <a href="/" className="hover:underline transition duration-200 text-sm text-gray-300 hover:text-white">Home</a>
                        <a href="/services" className="hover:underline transition duration-200 text-sm text-gray-300 hover:text-white">Services</a>
                        <a href="/products" className="hover:underline transition duration-200 text-sm text-gray-300 hover:text-white">Products</a>
                        <a href="/about" className="hover:underline transition duration-200 text-sm text-gray-300 hover:text-white">About</a>
                        <a href="/contact" className="hover:underline transition duration-200 text-sm text-gray-300 hover:text-white">Contact</a>
                    </nav>

                    {/* Contact Information (Get In Touch) */}
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-xl font-bold mb-2" style={{ color: ACCENT_TEXT_COLOR }}>Get In Touch</h3>
                        
                        {/* Urgent/Technical Phone */}
                        <p className="text-sm text-gray-300">
                            <span className="font-semibold block mb-1" style={{ color: ACCENT_TEXT_COLOR }}>Make a Call:</span>
                            <a href="tel:+8801716255685" className="hover:underline transition duration-200 block text-gray-300 hover:text-white">+880 1716255685</a>
                            <a href="tel:+8801606912992" className="hover:underline transition duration-200 block text-gray-300 hover:text-white">+880 1606-912992</a>
                        </p>

                        {/* Business Email */}
                        <p className="text-sm text-gray-300">
                            <span className="font-semibold block mb-1" style={{ color: ACCENT_TEXT_COLOR }}>Don't hesitate to Email:</span>
                            <a href="mailto:info@quality-ent.com" className="hover:underline transition duration-200 text-gray-300 hover:text-white">info@quality-ent.com</a>
                        </p>

                        {/* Office Location */}
                        <p className="text-sm pt-2 text-gray-300">
                            <span className="font-semibold block mb-1" style={{ color: ACCENT_TEXT_COLOR }}>Our Office (Chattogram):</span> 
                            Ekhlas complex, 525 Jubilee Road, Chattogram
                        </p>
                    </div>
                </div>

                {/* 3. Social Media Icons & Copyright */}
                <div className="w-full md:w-1/4 flex flex-col items-start md:items-end space-y-6">
                    <h3 className="text-xl font-bold" style={{ color: ACCENT_TEXT_COLOR }}>Connect With Us</h3>
                    <div className="flex space-x-4">
                        {/* Twitter/X */}
                        <a href="#" className="transition transform hover:scale-110 p-2 rounded-full text-white hover:text-blue-400" style={{ backgroundColor: DARK_NAVY }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="transition transform hover:scale-110 p-2 rounded-full text-white hover:text-red-600" style={{ backgroundColor: DARK_NAVY }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="transition transform hover:scale-110 p-2 rounded-full text-white hover:text-blue-600" style={{ backgroundColor: DARK_NAVY }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright Section (Full Width) */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: ORANGE_ACCENT_HEX }}>
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
                    {/* Primary Copyright */}
                    <p className="text-gray-400 mb-2 sm:mb-0">
                        &copy; {new Date().getFullYear()} Quality Enterprise. All rights reserved.
                    </p>

                    {/* Developer Info */}
                    <p className="text-gray-500">
                        Design & Development by: 
                        <a 
                            className='hover:underline ml-1 font-medium' 
                            href="https://mahin-rahman.web.app"
                            style={{ color: ORANGE_ACCENT_HEX }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Mahin Rahman
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;