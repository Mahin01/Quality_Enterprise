import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    // Lucide Phone icon (inline SVG)
    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-900"><path d="M22 16.92v3a2 2 0 0 1-2 2h-3.34c-.2-.41-.5-.83-.91-1.29l-1.92-1.92a2 2 0 0 0-1.07-.63A17 17 0 0 0 5 13.5V5a2 2 0 0 1 2-2h3.18c.6 0 1.13.43 1.25 1.02l.74 3c.09.47-.05.98-.44 1.35l-.29.29a7.86 7.86 0 0 0 5.15 5.15l.29-.29c.37-.39.88-.53 1.35-.44l3 .74c.59.12 1.02.65 1.02 1.25z"/></svg>
    );

    // Lucide Mail icon (inline SVG)
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-900"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    );
    
    // Lucide Map Pin icon (inline SVG)
    const MapPinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-900"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    );


    return (
        <section className="py-16 bg-gray-900 rounded-xl shadow-2xl p-6 md:p-10 max-w-7xl mx-auto">
            <header className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    Let's Build <span className="text-amber-400">Together</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Contact our specialized team for reliable industrial supply, engineering consultation, or urgent support.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Contact Information Column (1/3 width) */}
                <div className="lg:col-span-1 space-y-8">
                    
                    {/* Phone Block */}
                    <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 bg-amber-500 p-3 rounded-full shadow-lg">
                                <PhoneIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">24/7 Support</h3>
                        </div>
                        <p className="text-gray-400 mb-2">Call us anytime for urgent material sourcing or technical assistance.</p>
                        <p className="text-lg font-semibold text-amber-200">+880-1851705517</p>
                        <p className="text-lg font-semibold text-amber-200">+880-1313032754</p>
                    </div>

                    {/* Email Block */}
                    <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 bg-amber-500 p-3 rounded-full shadow-lg">
                                <MailIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">Business Inquiries</h3>
                        </div>
                        <p className="text-gray-400 mb-2">Send us your RFQ or detailed component specifications.</p>
                        <a href="mailto:info@quality-ent.com" className="text-lg font-semibold text-amber-200 hover:text-amber-300 hover:underline transition">info@quality-ent.com</a>
                    </div>
                    
                    {/* Location Block (New Addition) */}
                    <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 bg-amber-500 p-3 rounded-full shadow-lg">
                                <MapPinIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">Our Office</h3>
                        </div>
                        <p className="text-gray-400">
                            Road 12, House 15/B, Block A, 
                            Dhaka 1209, Bangladesh
                        </p>
                        <a href="#" className="mt-4 block text-sm font-medium text-amber-500 hover:text-amber-400 hover:underline">View on Map (Placeholder)</a>
                    </div>
                </div>

                {/* Contact Form Column (2/3 width) */}
                <div className="lg:col-span-2 p-8 bg-gray-800 border border-gray-700 shadow-xl rounded-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-amber-400/50 pb-4">Request a Consultation</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <input type="text" className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 placeholder-gray-400 text-base" placeholder="Full Name *" required />
                            <input type="email" className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 placeholder-gray-400 text-base" placeholder="Work Email *" required />
                            <input type="text" className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 placeholder-gray-400 text-base" placeholder="Company Name" />
                            <input type="tel" className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 placeholder-gray-400 text-base" placeholder="Phone Number *" required />
                        </div>
                        <div className="mb-8">
                            {/* Note: Added appearance-none to fix select styling issues on some browsers */}
                            <select className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 text-base appearance-none" defaultValue="">
                                <option value="" disabled>Select Service Needed</option>
                                <option value="supply">Industrial Equipment Supply</option>
                                <option value="engineering">Engineering Consultation</option>
                                <option value="maintenance">Maintenance & Modification</option>
                                <option value="calibration">Calibration & Compliance</option>
                                <option value="other">Other Inquiry</option>
                            </select>
                        </div>
                        <div className="mb-8">
                            <textarea className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition duration-150 placeholder-gray-400 text-base" placeholder="Tell us about your requirements or challenge..." rows={6}></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className='px-10 py-4 bg-amber-500 text-gray-900 font-extrabold rounded-lg hover:bg-amber-400 transition-colors duration-200 shadow-xl text-lg tracking-wider transform hover:scale-[1.02]'>
                                Submit Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;