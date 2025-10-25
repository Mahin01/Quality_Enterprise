import React, { useState } from 'react';

const Contact = () => {
    
    // --- Color and Style Constants (Consistent Theme) ---
    const PRIMARY_TEAL = '#1A364F';
    const DARK_NAVY = '#0F2133';
    const ORANGE_ACCENT_HEX = '#FF8C00'; 
    const INPUT_BG = '#112739';

    // --- State Management for Form Data ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'Select Service Needed',
        requirements: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Stop the default page reload
        
        // Ensure required fields are filled before attempting mailto
        if (!formData.name || !formData.email || !formData.phone || formData.service === 'Select Service Needed') {
            alert('Please fill in all required fields (marked with *) and select a service.');
            return;
        }

        // 1. Construct the email subject
        const subject = `Inquiry from ${formData.name} (${formData.company || 'Individual'}) - ${formData.service}`;
        
        // 2. Construct the email body
        const body = `
            Hello Quality Enterprise Team,
            
            I am submitting an inquiry regarding: ${formData.service}.
            
            My requirements are:
            
            ${formData.requirements || 'No detailed requirements provided.'}
            
            ---
            Contact Details:
            Name: ${formData.name}
            Company: ${formData.company || 'N/A'}
            Email: ${formData.email}
            Phone: ${formData.phone}
            ---
        `;

        // 3. Construct the mailto URL using encodeURIComponent for safety
        const mailtoLink = `mailto:info@quality-ent.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // 4. Open the user's default email client
        window.location.href = mailtoLink;
    };
    
    // --- Inline SVG Icon Definitions ---
    // (Icons retained from the previous step)
    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: DARK_NAVY }}><path d="M22 16.92v3a2 2 0 0 1-2 2h-3.34c-.2-.41-.5-.83-.91-1.29l-1.92-1.92a2 2 0 0 0-1.07-.63A17 17 0 0 0 5 13.5V5a2 2 0 0 1 2-2h3.18c.6 0 1.13.43 1.25 1.02l.74 3c.09.47-.05.98-.44 1.35l-.29.29a7.86 7.86 0 0 0 5.15 5.15l.29-.29c.37-.39.88-.53 1.35-.44l3 .74c.59.12 1.02.65 1.02 1.25z"/></svg>
    );
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: DARK_NAVY }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    );
    const MapPinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" style={{ color: DARK_NAVY }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    );

    const inputClasses = `w-full p-4 rounded-lg text-gray-100 border border-gray-600 focus:border-[${ORANGE_ACCENT_HEX}] focus:ring-2 focus:ring-[${ORANGE_ACCENT_HEX}]/50 transition duration-150 placeholder-gray-400 text-base`;

    return (
        <section className="py-16 shadow-2xl p-6 md:p-10 mx-auto" style={{ backgroundColor: DARK_NAVY }}>
            <header className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    Let's Build <span style={{ color: ORANGE_ACCENT_HEX }}>Together</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Contact our specialized team for reliable industrial supply, engineering consultation, or urgent support.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                
                {/* Contact Information Column */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Phone Block */}
                    <div className="p-6 border border-gray-700 rounded-xl shadow-lg" style={{ backgroundColor: PRIMARY_TEAL }}>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 p-3 rounded-full shadow-lg" style={{ backgroundColor: ORANGE_ACCENT_HEX }}>
                                <PhoneIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">24/7 Support</h3>
                        </div>
                        <p className="text-gray-400 mb-2">Call us anytime for urgent material sourcing or technical assistance.</p>
                        <p className="text-lg font-semibold" style={{ color: ORANGE_ACCENT_HEX }}>+880-1851705517</p>
                        <p className="text-lg font-semibold" style={{ color: ORANGE_ACCENT_HEX }}>+880-1313032754</p>
                    </div>

                    {/* Email Block */}
                    <div className="p-6 border border-gray-700 rounded-xl shadow-lg" style={{ backgroundColor: PRIMARY_TEAL }}>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 p-3 rounded-full shadow-lg" style={{ backgroundColor: ORANGE_ACCENT_HEX }}>
                                <MailIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">Business Inquiries</h3>
                        </div>
                        <p className="text-gray-400 mb-2">Send us your RFQ or detailed component specifications.</p>
                        <a 
                            href="mailto:info@quality-ent.com" 
                            className="text-lg font-semibold hover:underline transition"
                            style={{ color: ORANGE_ACCENT_HEX }}
                        >
                            info@quality-ent.com
                        </a>
                    </div>
                    
                    {/* Location Block */}
                    <div className="p-6 border border-gray-700 rounded-xl shadow-lg" style={{ backgroundColor: PRIMARY_TEAL }}>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 p-3 rounded-full shadow-lg" style={{ backgroundColor: ORANGE_ACCENT_HEX }}>
                                <MapPinIcon />
                            </div>
                            <h3 className="text-xl font-bold text-white">Our Office</h3>
                        </div>
                        <p className="text-gray-400">
                            Road 12, House 15/B, Block A, 
                            Dhaka 1209, Bangladesh
                        </p>
                        <a 
                            href="#" 
                            className="mt-4 block text-sm font-medium hover:underline"
                            style={{ color: ORANGE_ACCENT_HEX }}
                        >
                            View on Map (Placeholder)
                        </a>
                    </div>
                </div>

                {/* Contact Form Column */}
                <div className="lg:col-span-2 p-8 border border-gray-700 shadow-xl rounded-xl" style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b pb-4" style={{ borderColor: ORANGE_ACCENT_HEX }}>Request a Consultation</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClasses} 
                                style={{ backgroundColor: INPUT_BG }} 
                                placeholder="Full Name *" 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={inputClasses} 
                                style={{ backgroundColor: INPUT_BG }} 
                                placeholder="Work Email *" 
                                required 
                            />
                            <input 
                                type="text" 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={inputClasses} 
                                style={{ backgroundColor: INPUT_BG }} 
                                placeholder="Company Name" 
                            />
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputClasses} 
                                style={{ backgroundColor: INPUT_BG }} 
                                placeholder="Phone Number *" 
                                required 
                            />
                        </div>
                        <div className="mb-8">
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`${inputClasses} appearance-none`}
                                style={{ backgroundColor: INPUT_BG }}
                                required
                            >
                                <option value="Select Service Needed" disabled>Select Service Needed *</option>
                                <option value="Industrial Equipment Supply">Industrial Equipment Supply</option>
                                <option value="Engineering Consultation">Engineering Consultation</option>
                                <option value="Maintenance & Modification">Maintenance & Modification</option>
                                <option value="Calibration & Compliance">Calibration & Compliance</option>
                                <option value="Other Inquiry">Other Inquiry</option>
                            </select>
                        </div>
                        <div className="mb-8">
                            <textarea 
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                className={inputClasses} 
                                style={{ backgroundColor: INPUT_BG }}
                                placeholder="Tell us about your requirements or challenge..." 
                                rows={6}
                            >
                            </textarea>
                        </div>
                        <div className="text-right">
                            <button 
                                type="submit" 
                                className='px-10 py-4 font-extrabold text-lg rounded-lg shadow-xl tracking-wider transform hover:scale-[1.02] transition duration-200'
                                style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}
                            >
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