import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    return (
        <section className="py-16 bg-gray-900 rounded-xl shadow-2xl p-6 md:p-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
                Get In <span className="text-amber-400">Touch</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Contact Info Card */}
                <div className="lg:w-1/3 p-6 bg-gray-800 border border-gray-700 shadow-xl rounded-xl">
                    <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-gray-700 pb-3">Contact Information</h3>

                    {/* Phone Section */}
                    <div className="flex items-start space-x-4 mb-8">
                        {/* Phone Icon (Amber accent) */}
                        <div className="flex-shrink-0 bg-amber-500 p-3 rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.93-.27 10.864 10.864 0 003.4.55 1 1 0 011 1v3.4a1 1 0 01-1 1A17.052 17.052 0 013 5a1 1 0 011-1h3.4a1 1 0 011 1c0 1.14.19 2.25.55 3.4a1 1 0 01-.27.93l-2.2 2.2a1 1 0 00-.26.26z"/>
                            </svg>
                        </div>
                        <div className="text-gray-300">
                            <p className="font-medium mb-1 text-white">We are available 24/7, 7 days a week.</p>
                            <p>Phone: <span className="text-amber-200">+880-1851705517, +880-1313032754</span></p>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <hr className="border-gray-700 mb-8" />

                    {/* Email Section */}
                    <div className="flex items-start space-x-4">
                        {/* Email Icon (Amber accent) */}
                        <div className="flex-shrink-0 bg-amber-500 p-3 rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zM4.5 4.5v.42l7.5 5.28 7.5-5.28V4.5h-15zm15 15v-10.4l-7.5 5.28-7.5-5.28V19.5h15z"/>
                            </svg>
                        </div>
                        <div className="text-gray-300">
                            <p className="font-medium mb-2 text-white">Fill out our form and we will contact you within 24 hours.</p>
                            <p>Mail Us: <a href="mailto:info@quality-ent.com" className="text-amber-200 hover:underline">info@quality-ent.com</a></p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3 p-8 bg-gray-800 border border-gray-700 shadow-xl rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Send Us a Message</h3>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                            <input type="text" className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring focus:ring-amber-500/50 transition duration-150 placeholder-gray-400" placeholder="Your Name *" required />
                            <input type="email" className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring focus:ring-amber-500/50 transition duration-150 placeholder-gray-400" placeholder="Your Email *" required />
                            <input type="tel" className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring focus:ring-amber-500/50 transition duration-150 placeholder-gray-400" placeholder="Your Phone *" required />
                        </div>
                        <div className="mb-8">
                            <textarea className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring focus:ring-amber-500/50 transition duration-150 placeholder-gray-400" placeholder="Your Message" rows={5}></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className='px-8 py-3 bg-amber-500 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-colors duration-200 shadow-md'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


export default Contact;